import update from 'immutability-helper'
import type { FC } from 'react'
import { useCallback, useState } from 'react'
import { Menu } from './Menu'
import FlipMove from 'react-flip-move'

const style = {
  width: 400
}

export interface Item {
  id: number
  text: string
}

export interface ContainerState {
  cards: Item[]
}

export const Container: FC = () => {
  {
    const [cards, setCards] = useState([
      {
        id: 1,
        text: '사용자 관리'
      },
      {
        id: 2,
        text: '로그인 이력'
      },
      {
        id: 3,
        text: '메뉴 3'
      },
      {
        id: 4,
        text: '메뉴 4'
      }
    ])

    const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
      setCards((prevCards: Item[]) =>
        update(prevCards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevCards[dragIndex] as Item]
          ]
        })
      )
    }, [])

    const renderCard = useCallback(
      (card: { id: number; text: string }, index: number) => {
        return (
          <Menu
            key={card.id}
            index={index}
            id={card.id}
            title={card.text}
            moveCard={moveCard}
            icon={''}
          />
        )
      },
      []
    )

    return (
      <>
        <div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
      </>
    )
  }
}
