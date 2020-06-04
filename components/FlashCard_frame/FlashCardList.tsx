import React from 'react'
import { View, Text } from 'react-native';
import FlashCard from './FlashCard'

export default function FlashCardList({flashcards}) {
    return (
        <View style={{alignSelf:'center'}}>
            {flashcards.map(flashcards => {
                return <FlashCard flashcards={flashcards} key={flashcards.id} />
            })}
        </View>
    )
}
