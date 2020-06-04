import React, {useEffect} from 'react'
import { View } from 'react-native';
import { Layout, Text, Button, Menu, MenuGroup, MenuItem, Card, Icon } from '@ui-kitten/components';
import FlashCardList from './FlashCardList'

const CloseIcon = (props: any) => (
    <Icon name='close' {...props} />
);

const FlipIcon = (props: any) => (
    <Icon name='flip-2' {...props} />
);

const CheckIcon = (props: any) => (
    <Icon name='checkmark' {...props} />
);


export default function Home_frame({ navigation }: any,) {
    
let flashcards;
useEffect(() => {
    fetch("http://localhost:4000", {
        method:"POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            query:` query {
                cards {
                    front
                    back
                    id
                }
            }
            `
        })
    })
        .then(res => res.json())
        .then(data => {
            flashcards = data.data.cards
            console.log(flashcards)
        })
    }, []);

    return (
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ alignSelf: "flex-start" }}>
                <Button onPress={() => navigation.navigate('Menu')}>Menu</Button>
            </View>
            <View style={{ flex: 1, alignSelf: 'center'}}>
                <Card style={{ width: 420, height: 420 }}>
                    <FlashCardList flashcards={flashcards}/>
                </Card>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row'}}>
                <View style={{  }}>
                    <Button accessoryLeft={CloseIcon} ></Button>
                </View>
                <View style={{ }}>
                    <Button accessoryLeft={FlipIcon}></Button>
                </View>
                <View style={{ }}>
                    <Button accessoryLeft={CheckIcon}></Button>
                </View>
            </View>
        </Layout>
    )
}