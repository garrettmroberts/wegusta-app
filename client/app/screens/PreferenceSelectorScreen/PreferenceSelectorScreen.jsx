import React, { useState, useEffect } from 'react'
import { View, Image } from 'react-native'
import AvatarArray from '../../components/AvatarArray/AvatarArray'
import { useStoreContext } from '../../utils/Context'
import PropTypes from 'prop-types'
import sampleUsers from '../../temp/sampleUsers'
import styles from './styles'
import CardStack from '../../components/CardStack/CardStack'

const PreferenceSelectorScreen = () => {
    const [context, dispatch] = useStoreContext()
    const [state, setState] = useState({
        avatars: [],
    })

    useEffect(() => {
        const pendingWorkflowSelectedUsers = generateAvatars()
        setState({ avatars: pendingWorkflowSelectedUsers })
    }, [])

    const generateAvatars = () => {
        return context.pendingWorkflow.selectedUsers
    }

    return (
        <View style={styles.screenWrapper}>
            <View style={styles.avatarArrayWrapper}>
                <AvatarArray avatars={state.avatars} />
            </View>
            {/* <Image source={require('../../assets/burger.png')} style={styles.image} /> */}
            <CardStack />
        </View>
    )
}

export default PreferenceSelectorScreen
