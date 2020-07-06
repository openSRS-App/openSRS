import React from 'react'
import { View } from 'react-native';
import { Layout, Text, Button, Menu, MenuGroup, MenuItem, Card, Icon } from '@ui-kitten/components';
import FlashCard from './FlashCard'

export default function FlashCardList({flashcards, flip}) {
    return (
        <View style={{alignSelf:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4}}>
            {console.log(flashcards)}
            {flashcards.map((flashcards, Index) => {
                return <Card style={{ width: 420, height: 420, zIndex:-{Index}, shadowColor: "#000", backgroundColor: flip ? "#ffffff" : "#dbe4f0" ,
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.23,
                shadowRadius: 2.62,
        
                elevation: 4}} key={Index}><FlashCard flashcards={flashcards} flip={flip}/></Card>
            })}
        </View>
    )
}
