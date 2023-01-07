import React, { useContext, useEffect, useState } from 'react'
import { View, SafeAreaView } from 'react-native'
import CardStack from '../../components/CardStack/CardStack'
import DecisionButton from '../../components/DecisionButton/DecisionButton'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'
import styles from './styles'
import { AppContext } from '../../utils/Context/Context'
import API from '../../api'
import FilterModal from '../../components/FilterModal/FilterModal'
import {NavigationProp, ParamListBase} from '@react-navigation/native'


type Props = {
  navigation: NavigationProp<ParamListBase>
};

const PreferenceSelectorScreen = ({ navigation }: Props) => {
  const { context, dispatch } = useContext(AppContext)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getFoods = async () => {
      const images = await API.getRandomImages()
      dispatch({ type: 'addImages', payload: images })
    }

    getFoods()
  }, [])

  useEffect(() => {
    if (context.images.length === 0 && context.nextAction.isSet) {
      handleStackEnd()
    }
  }, [context.images])

  const handleStackEnd = () => {
    setTimeout(() => {
      navigation.navigate('SuggestionScreen')
    }, 200)
  }

  const handleDecisionPress = (isLiked: boolean) => {
    if (context.images.length > 0) {
      const category = context.images[0].category
      dispatch({
        type: 'setNextAction',
        payload: { isSet: true, category, isLiked }
      })
    }
  }


  useEffect(() => {
    if (context.images.length > 0 && context.loadedImageCount === context.images.length) {
      setIsLoading(false)
    }
  }, [context.loadedImageCount])

  return (
    <SafeAreaView style={styles.wrapper}>
      {isLoading ? (
        <>
          <View style={styles.loadingSpinnerPlacement}>
            <LoadingSpinner />
          </View>
        </>
      ) : null}
      <View style={styles.buffer} />
      <CardStack cards={context.images} onStackEnd={handleStackEnd} />
      <View style={styles.decisionWrapper}>
        <DecisionButton
          decision="dislike"
          onPress={() => handleDecisionPress(false)}
        />
        <DecisionButton
          decision="like"
          onPress={() => handleDecisionPress(true)}
        />
      </View>
      {/* </View> */}
      <FilterModal isVisible={context.filterOptions.isModalVisible} onClose={() => {
        dispatch({type: 'updateOptionsVisibility'})
      }}/>
    </SafeAreaView>
  )
}

export default PreferenceSelectorScreen
