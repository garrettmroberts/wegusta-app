import React, { useContext, useEffect, useState } from 'react'
import {
  AppState,
  Linking,
  Modal,
  Pressable,
  SafeAreaView,
  Text,
  View
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Constants from 'expo-constants'
import * as Location from 'expo-location'

import styles from './styles'
import Colors from '../../constants/Colors'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'
import ResultCard from '../../components/ResultCard/ResultCard'
import { AppContext } from '../../utils/Context/Context'
import API from '../../api'
import { LocationAccuracy } from 'expo-location'
import {NavigationProp, ParamListBase} from '@react-navigation/native'

type Coords = {
  latitude: number;
  longitude: number;
};

type Props = {
  navigation: NavigationProp<ParamListBase>;
};

type RecommendedRestaurantInfo = {
  place_id?: string,
  name?: string,
  rating?: string,
  location?: {
    lat?: string,
    lng?: string
  },
  photoUrl?: string,
  priceLevel?: string,
  closingTime?: string,
  openTimes?: string
}

type SuggestionScreenState = {
  pageState: 'loading' | 'error' | 'needsLocationAccess' | 'success',
  location: Coords | undefined,
  recommendedRestaurantInfo: RecommendedRestaurantInfo,
  needsLocationAccess: boolean
}

const SuggestionScreen = ({ navigation }: Props) => {
  const { context, dispatch } = useContext(AppContext)
  const [state, setState] = useState<SuggestionScreenState>({
    pageState: 'loading', // loading, error, needsLocationAccess, success
    location: undefined,
    recommendedRestaurantInfo: {},
    needsLocationAccess: false
  })

  // LOCATION SERVICES
  // -------------------------------------------------------------------
  // Returns locationAccessStatus, also requests permission if applicable.
  const getLocationAccessStatus = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync()
    if (status === 'denied') return false
    if (status === 'granted') return true
    console.error('ERROR: unexpected location status:', status)
    return status
  }

  const getLocationCoordinates = async () => {
    const hasLocationAccess = await getLocationAccessStatus()
    if (hasLocationAccess) {
      const location = await Location.getCurrentPositionAsync({
        accuracy: LocationAccuracy.Balanced
      })
      setState({...state, location: location?.coords})
      return
    } else {
      setState({...state, needsLocationAccess: true})
    }
  }

  const attemptgetLocation = async () => {
    const hasLocationAccess = await getLocationAccessStatus()
    if (!hasLocationAccess) {
      setState({...state, needsLocationAccess: true})
    } else {
      getLocationCoordinates()
    }
  }

  const getLocationAccessViaSettings = async () => {
    await Linking.openURL('app-settings:')
    AppState.addEventListener('change', (nextAppState) => {
      const executeNextStep = async () => {
        if (nextAppState === 'active') {
          const isLocationAccessGranted = await getLocationAccessStatus()
          if (isLocationAccessGranted) {
            setState({...state, needsLocationAccess: false})
          }
        }
      }

      executeNextStep()
    })
  }

  // RESTAURANT RECOMMENDATION SERVICES
  // -------------------------------------------------------------------
  const generateRandomNumber = (max: number) => {
    return Math.floor(Math.random() * max)
  }

  const selectFoodCategory = () => {
    const filteredPreferences = context.userPreferences.filter(
      preference => preference.isLiked
    )

    const rand = generateRandomNumber(filteredPreferences.length)

    if (filteredPreferences.length === 0) {
      return null
    }

    const res = filteredPreferences[rand].category

    const updatedFilterPreferences = context.userPreferences.filter((ele) => {
      return ele.category !== res
    })

    dispatch({type: 'setUpdatedUserPreferences', payload: updatedFilterPreferences})

    return res
  }

  const queryForRestaurant = async (category: string) => {
    let recommendedRestaurantInfo: RecommendedRestaurantInfo = {}
    const query = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=${category}&location=${state.location?.latitude}%2C${state.location?.longitude}&radius=${context.filterOptions.filterDistance * 1000}&type=restaurant&opennow&key=${Constants.expoConfig?.extra?.gMapsApiKey}`
    await fetch(query)
      .then(response => {
        return response.json()
      })
      .then(json => {
        if (json.status !== 'ZERO_RESULTS') {
          const rand = generateRandomNumber(
            json.results.length > 5 ? 5 : json.results.length
          )
          const result = json.results[rand]
          recommendedRestaurantInfo = {
            place_id: result.place_id,
            name: result.name,
            openTimes: result.opening_hours,
            priceLevel: result.price_level,
            rating: result.rating,
            photoUrl: `https://maps.googleapis.com/maps/api/place/photo?photo_reference=${result.photos[0].photo_reference}&maxheight=600&maxhidth=800&key=${Constants.expoConfig?.extra?.gMapsApiKey}`,
            location: {
              lat: result.geometry.location.lat,
              lng: result.geometry.location.lng
            }
          }
          return recommendedRestaurantInfo
        } else {
          const filteredPreferences = context.userPreferences.filter(
            preference => preference.isLiked
          )
          if (filteredPreferences.length > 0) {
            const category = selectFoodCategory()
            if (category !== null) {
              queryForRestaurant(category)
            }
          } else {
            setState({
              ...state,
              pageState: 'error'
            })
          }
        }
      })
    return recommendedRestaurantInfo
  }

  const queryForOpeningHours = async (placeId: string) => {
    let res = ''
    const query = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=opening_hours&key=${Constants.expoConfig?.extra?.gMapsApiKey}`
    await fetch(query)
      .then(response => response.json())
      .then(json => {
        const date = new Date().getDay()
        const openHours = json.result.opening_hours.weekday_text
        const lastDate = openHours.pop()
        openHours.unshift(lastDate)
        const currentDayOpenHours = openHours[date]
        res = currentDayOpenHours.split(' – ')[1]
      })
    return res
  }

  const makeRestaurantDecision = async () => {
    const hasLocationAccess = await getLocationAccessStatus()
    if (hasLocationAccess) {
      const category = selectFoodCategory()
      if (category !== null) {
        const recommendedRestaurantInfo = await queryForRestaurant(category)
        if (recommendedRestaurantInfo.place_id) {
          const closingTime = await queryForOpeningHours(recommendedRestaurantInfo.place_id)
          setState({
            ...state,
            recommendedRestaurantInfo: {
              ...recommendedRestaurantInfo,
              closingTime
            }
          })
        }
      } else {
        setState({...state, pageState: 'error'})
      }
    }
  }

  // EFFECT HOOKS
  // -------------------------------------------------------------------
  useEffect(() => {
    if (state.recommendedRestaurantInfo?.place_id && state.recommendedRestaurantInfo?.closingTime) {
      setState({...state, pageState: 'success'})
    }
  }, [state.recommendedRestaurantInfo])

  useEffect(() => {
    if (state.location && !state.recommendedRestaurantInfo.closingTime) makeRestaurantDecision()
  }, [state.location])

  useEffect(() => {
    attemptgetLocation()
  }, [])

  const getDistanceFromLatLon = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ) => {
    const R = 6371 // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1) // deg2rad below
    const dLon = deg2rad(lon2 - lon1)
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    const d = R * c // Distance in km
    return parseInt((d / 1.609).toFixed(2)) // Distance in mi
  }

  function deg2rad(deg: number) {
    return deg * (Math.PI / 180)
  }

  const handleTryAgainPress = () => {
    const refreshImagesAndRedirect = async () => {
      const images = await API.getRandomImages()
      dispatch({ type: 'addImagesAndRefreshState', payload: images })
      navigation.navigate('PreferenceSelectorScreen')
    }

    refreshImagesAndRedirect()
  }

  const renderResults = () => {
    if (state.pageState === 'success' &&
    state.recommendedRestaurantInfo.name &&
    state.recommendedRestaurantInfo.rating &&
    state.recommendedRestaurantInfo.photoUrl &&
    state.recommendedRestaurantInfo.closingTime &&
    state.recommendedRestaurantInfo.priceLevel &&
    state.recommendedRestaurantInfo.location?.lat &&
    state.recommendedRestaurantInfo.location?.lng &&
    state.location?.latitude &&
    state.location?.longitude) {
      return (
        <>
          <ResultCard
            title={state.recommendedRestaurantInfo?.name}
            rating={parseInt(state.recommendedRestaurantInfo?.rating)}
            distance={getDistanceFromLatLon(
              parseInt(state.recommendedRestaurantInfo?.location?.lat),
              parseInt(state.recommendedRestaurantInfo?.location?.lng),
              state.location?.latitude,
              state.location?.longitude
            )}
            imageUrl={state.recommendedRestaurantInfo?.photoUrl}
            closingTime={state.recommendedRestaurantInfo?.closingTime}
            priceLevel={parseInt(state.recommendedRestaurantInfo?.priceLevel)}
            latitude={parseInt(state.recommendedRestaurantInfo?.location?.lat)}
            longitude={parseInt(state.recommendedRestaurantInfo?.location?.lng)}
          />
          <Pressable style={styles.tryAgainBlock} onPress={handleTryAgainPress}>
            <Text style={styles.tryAgainText}>Try again</Text>
            <Ionicons name="refresh-outline" size={24} color={Colors.primary} />
          </Pressable>
        </>
      )
    }
  }


  return (
    <SafeAreaView style={styles.container}>
      {(state.pageState === 'loading') ? (
        <>
          <View style={[styles.container, styles.absolute]}>
            <LoadingSpinner />
            <Text style={styles.loadingText}>Generating Results</Text>
          </View>
        </>
      ) : null}
      {(state.needsLocationAccess) ? (
        <View style={styles.container}>
          <Modal 
            animationType="slide"
            transparent={true}
            visible={state.needsLocationAccess}
            onRequestClose={() => {
              setState({...state, pageState: 'loading'})
            }}>
            <View style={[styles.container, styles.absolute, styles.locationServicesPlacement]}>
              <Pressable style={styles.locationServicesCloseButton} onPress={() => {
                setState({...state, needsLocationAccess: false, pageState: 'error'})
              }}>
                <Ionicons name="close" size={16} color="black" />
              </Pressable>
              <View style={styles.locationServicesIcon}>
                <Ionicons name="ios-location-sharp" size={36} color={Colors.secondary} />
              </View>
              <Text style={styles.locationServicesHeader}>Enable Location Services</Text>
              <Text style={styles.locationServicesSubheader}>We will need your location to provide you a better app experience.</Text>
            </View>
            <Pressable style={[styles.actionButton, styles.locationServicesPrimaryButton]} onPress={() => {
              getLocationAccessViaSettings()
            }}>
              <Text style={styles.locationServicesPrimaryButtonText}>Enable</Text>
            </Pressable>
            <Pressable style={[styles.actionButton, styles.locationServicesSecondaryButton]}>
              <Text style={styles.locationServicesSecondaryButtonText} onPress={() => {
                setState({...state, needsLocationAccess: false, pageState: 'error'})
              }}>Not now</Text>
            </Pressable>
          </Modal>
        </View>
      ) : null}
      {(state.pageState === 'error') ? (
        <>
          <Text style={styles.errorText}>No Results Found.</Text>
          <Pressable style={styles.tryAgainBlock} onPress={handleTryAgainPress}>
            <Text style={styles.tryAgainText}>Try again</Text>
            <Ionicons name="refresh-outline" size={24} color={Colors.primary} />
          </Pressable>
        </>
      ) : null}
      {renderResults()}
    </SafeAreaView>
  )
}


export default SuggestionScreen
