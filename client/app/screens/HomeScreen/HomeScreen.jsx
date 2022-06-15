import React from 'react'
import { View, ImageBackground, Text } from 'react-native'
import { PropTypes } from 'prop-types'
import { useStoreContext } from '../../utils/Context'

import Button from '../../components/Button/Button'
import styles from './styles'

const HomeScreen = ({ navigation }) => {
  const navigateButton = () => {
    navigation.navigate('Invite')
  }

  const [context, dispatch] = useStoreContext();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/homescreenBackground.png')}
        resizeMode="cover"
        style={styles.image}
      >
        {console.log(context)}
        <View style={styles.wrapper}>
          <Text style={styles.header}>We Like,</Text>
          <Text style={styles.secondaryHeader}>together</Text>
          <Text style={styles.subtext}>
            Find the perfect restaurant for everyone.
          </Text>
          <Button
            type="primary"
            size="large"
            text="Make Plans"
            iconPlacement="right"
            icon="arrow-forward"
            handlePress={navigateButton}
          />
        </View>
      </ImageBackground>
    </View>
  )
}

HomeScreen.propTypes = {
  navigation: PropTypes.object,
}

export default HomeScreen
