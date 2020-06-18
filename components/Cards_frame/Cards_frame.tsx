import React, {useEffect, useState} from 'react'
import { View, ScrollView } from 'react-native'
import { Layout, Text, Button, Icon, List, ListItem } from '@ui-kitten/components';


export default function Cards_frame({ navigation }: any): React.ReactElement {
  const [flashcards, setFlashcards] = useState([]);

  useEffect( () => {
    const getCards = async() => {
      try {
        const data = await fetch("http://localhost:4000", {
          method: "POST",
          headers: { "Content-Type" : "application/json" },
          body: JSON.stringify({
            query: `
              query {
                cards {
                  front
                  back
                }
              }`
          })
        })
        const flashcardsData = await data.json()
        setFlashcards(flashcardsData.data.cards)
      }
      catch (err) {
        console.log("Error in getCards: ", err)
      }
    }
    getCards()}, [])
  

  let selected = {};

  const setSelected = (item) => {
    selected = item;
  }

  // ======================================
// delete card API call to server to remove a card
// ======================================
  const deleteCard: any = (selected) => {
    console.log("selected: ", selected)
    fetch("http://localhost:4000", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
        mutation {
          deleteCard (front: "${selected.front}"){
            front: front
          }
        }
      `
      })
    })
      .then(res => res.json())
      .then(data => console.log("Deleted Card:", data))
  }


  const renderItemIcon = (props: any) => (
    <View style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'flex-end'}}>
      <Icon name='edit-outline' {...props} onPress={() => console.log("selected: ", selected)} />
      <Icon name='trash-2-outline' {...props} onPress={() => deleteCard(selected)} />
    </View>
  );
  

  const renderItem = ({ item }) => (
    <ListItem
      title={`${item.front}`}
      description={`${item.back}`}
      accessoryRight={renderItemIcon}
      onMouseEnter={() => setSelected(item)}
    />
  );

  return (
    <Layout style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>

      <Text category='h1' style={{padding:'1em'}}>Your Cards:</Text>

      <View style={{maxHeight:'32em', padding:'1em'}}>
        <List
        data={flashcards}
        renderItem={renderItem}
        />
      </View>

      <View style={{ flexDirection: 'row' }}>
        <Button 
          style={{ margin: '5%', padding:'4em', shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,
            elevation: 4 }} 
            onPress={() => navigation.navigate('AddCard')}>
              Add a Card
        </Button>
      </ View>

    </Layout>
  )
}
