import React from 'react'
import { View } from 'react-native';
import { Layout, Text, Button, Menu, MenuGroup, MenuItem, Card, Icon } from '@ui-kitten/components';
import FlashCard from './FlashCard'

export default function FlashCardList({flashcards, flip}) {
    return (
        <View style={{alignSelf:'center'}}>
            {console.log(flashcards)}
            {flashcards.map((flashcards, Index) => {
                return <Card style={{ width: 420, height: 420, zIndex:-{Index} }} key={Index}><FlashCard flashcards={flashcards} flip={flip}/></Card>
            })}
        </View>
    )
}
