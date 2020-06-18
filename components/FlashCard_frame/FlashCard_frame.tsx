import React, {useEffect, useState} from 'react'
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


export default function Home_frame({ navigation }: any, ) {
const [flashcards, setFlashcards] = useState([]);
const [flip, setFlip] = useState(true);
const [next, setNext] = useState(false);
// let flashcards:any = [];
useEffect( () => {
    const getCards = async () => {
    try {
        console.log("we hit useEffect")
        const data = await fetch("http://localhost:4000", {
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
        const flashcardsData = await data.json()
        setFlashcards(flashcardsData.data.cards)
        console.log(flashcardsData.data.cards)  
    }
    catch(err) {console.log(err)}
    }
    getCards()}, []) 
    


    return (
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {/* <View style={{ alignSelf: "flex-start" }}>
                <Button onPress={() => navigation.navigate('Menu')}>Menu</Button>
            </View> */}
            <View style={{ flex: 1, alignSelf: 'center', padding:'2em'}}>
                <Card style={{ width: 420, height: 420, shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.23,
                                    shadowRadius: 2.62,
                            
                                    elevation: 4 }}>
                    <FlashCardList flashcards={flashcards} flip={flip}/>
                </Card>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', padding:'8em'}}>
                <View style={{ padding:'1em'}}>
                    <Button style={{ shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.23,
                                    shadowRadius: 2.62,
                            
                                    elevation: 4}} 
                                    accessoryLeft={CloseIcon} onPress={() => {setFlashcards(flashcards.slice(1)); setFlip(true)}}></Button>
                </View>
                <View style={{padding:'1em'}}>
                    <Button style={{ shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.23,
                                    shadowRadius: 2.62,
                            
                                    elevation: 4}} accessoryLeft={FlipIcon} onPress={() => setFlip(!flip)}></Button>
                </View>
                <View style={{padding:'1em'}}>
                    
                    <Button style={{ shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.23,
                                    shadowRadius: 2.62,
                            
                                    elevation: 4}} 
                                    accessoryLeft={CheckIcon} onPress={() => {setFlashcards(flashcards.slice(1)); setFlip(true)}}></Button> 
                </View>
            </View>
        </Layout>
    )
}