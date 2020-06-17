import React, {useEffect, useState} from 'react'
import { View } from 'react-native'
import { Layout, Text, Button, Icon, List, ListItem } from '@ui-kitten/components';


// ======================================
// delete card API call to server to remove a card
// ======================================
const deleteCard: any = () => {
  fetch("http://localhost:4000", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      mutation {
        deleteCard(front: "${front}"){
          front: front
        }
      }
     `
    })
  })
    .then(res => res.json())
    .then(data => console.log("deleted the cards. Check DB to see if it's actually gone"))
}



export default function Cards_frame({ navigation }: any): React.ReactElement {
const [flashcards, setFlashcards] = useState([]);

useEffect( () => {
  const getCards = async() => {
    try{
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
  
  const renderItemIcon = (props) => (
    <Icon {...props} name='person'/>
  );
  
  const renderItem = ({ item }) => (
    <ListItem
      title={`${item.front}`}
      description={`${item.back}`}
      accessoryRight={renderItemIcon}
    />
  );

  return (
    <Layout style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>

      
      {/* <View style={{ alignSelf: "flex-start", padding: 20 }}>
        <Button
        // title="This leads to the Menu Component"
          onPress={() => navigation.navigate('Menu')}>
          Menu
        </Button>
      </View> */}

      <Text category='h1'> </Text>
      <View style={{ flexDirection: 'row' }}>
        <Button 
          style={{ margin: '5%' }} 
          onPress={() => navigation.navigate('AddCard')}>
            Add a Card
        </Button>
      </ View>
      <View style={{ flexDirection: 'row' }}>
        <Button
          onPress={() => deleteCard()} // upon clicking the button, trigger fn to delete card
          style={{ margin: '1em' }}
        >Delete a Card</Button>
      </ View>
      <List
      data={flashcards}
      renderItem={renderItem}
    />

    </Layout>
  )
}
