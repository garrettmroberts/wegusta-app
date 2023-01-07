import { useContext } from 'react'
import { View } from 'react-native'
import { AppContext } from '../../utils/Context/Context'

import Card from '../Card/Card'
import SwipeableEntity from '../SwipeableEntity/SwipeableEntity'
import styles from './styles'

type CardStackProps = {
  cards: CardProps[];
  onStackEnd?: () => void;
};

type CardProps = {
  category: string;
  imageName: string;
}

const CardStack = ({ cards, onStackEnd }: CardStackProps) => {
  const { context, dispatch } = useContext(AppContext)

  const handleSwipe = (category: string, isLiked: boolean) => {
    setTimeout(
      () =>
        dispatch({
          type: 'updateUserPreferences',
          payload: { category, isLiked }
        }),
      201
    )
  }

  return (
    <View style={styles.wrapper}>
      {cards
        .slice(0)
        .reverse()
        .map((cardProps: CardProps, idx: number) => {
          return (
            <SwipeableEntity
              key={`card-${idx}`}
              onSwipeLeft={() => handleSwipe(cardProps.category, false)}
              onSwipeRight={() => handleSwipe(cardProps.category, true)}
              onSwipe={idx === 0 ? onStackEnd : () => {}}
              containsElement={cardProps.category}
              isActive={idx === context.images.length - 1}
            >
              <View style={idx === context.images.length - 1 ? styles.cardPlacementTop : styles.cardPlacementBack}>
                <Card imageProps={cardProps} isSmall={idx !== context.images.length - 1} />
              </View>
            </SwipeableEntity>
          )
        })}
    </View>
  )
}

export default CardStack
