import React, {useEffect, useState} from 'react'
import { View, ScrollView } from 'react-native'
import { Layout, Text, Button, Icon, List, ListItem } from '@ui-kitten/components';


const TrashIcon = (props: any) => (
  <Icon name='trash-2-outline' {...props} />
);

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
    <View style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'flex-end'}}>
      <Icon name='edit-outline' {...props} onClick={() => console.log("what up")} />
      <Icon name='trash-2-outline' {...props} onClick={() => console.log("what up")} />
    </View>
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

      <Text category='h1' style={{padding:'1em'}}>Your Cards:</Text>
      {/* <View style={{ flexDirection: 'row' }}> */}
        {/* <Button
          onPress={() => deleteCard()} // upon clicking the button, trigger fn to delete card
          style={{ margin: '1em' }}
          >Delete a Card</Button>
        </ View> */}
      <View style={{maxHeight:'32em', padding:'1em'}}>
        <List
        data={flashcards}
        renderItem={renderItem}
        />
      </View>
        <View style={{ flexDirection: 'row' }}>
          <Button 
            style={{ margin: '5%', padding:'1em' }} 
            onPress={() => navigation.navigate('AddCard')}>
              Add a Card
          </Button>
        </ View>
    </Layout>
  )
}
