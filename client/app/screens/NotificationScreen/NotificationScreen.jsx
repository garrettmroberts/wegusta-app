import React from 'react'
import { View, ScrollView, FlatList, Text } from 'react-native'

import GroupNotification from '../../components/GroupNotification/GroupNotification'
import { useStoreContext } from '../../utils/Context'
import styles from './styles'

const NotificationScreen = () => {
    const [state, dispatch] = useStoreContext()

    const generateNotifications = () => {
        const read = []
        const unread = []

        state.notifications.forEach((notif, idx) => {
            if (notif.unread) {
                unread.push(
                    <GroupNotification
                        users={notif.users}
                        unread={notif.unread}
                        lastUpdated={notif.lastUpdated}
                        key={`notification-${idx}`}
                    />
                )
            } else {
                read.push(
                    <GroupNotification
                        users={notif.users}
                        unread={notif.unread}
                        lastUpdated={notif.lastUpdated}
                        key={`notification-${idx}`}
                    />
                )
            }
        })

        return (
            <ScrollView style={styles.screenWrapper}>
                <View style={styles.section}>
                    <Text style={styles.header}>New</Text>
                    {unread}
                </View>
                <View style={styles.section}>
                    <Text style={styles.header}>Past</Text>
                    {read}
                </View>
            </ScrollView>
        )
    }

    return generateNotifications()
}

export default NotificationScreen
