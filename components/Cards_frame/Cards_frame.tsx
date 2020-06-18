import React, {useEffect, useState} from 'react'
import { View, ScrollView } from 'react-native'
import { Layout, Text, Button, Icon, List, ListItem, Modal, Card, Input } from '@ui-kitten/components';


export default function Cards_frame({ navigation }: any): React.ReactElement {
  const [flashcards, setFlashcards] = useState([]);
  const [visible, setVisible] = React.useState(false);
  const [selected, setSelected] = React.useState({});
  const [frontShow, setFrontShow] = React.useState(true);
  const [backShow, setBackShow] = React.useState(true);

  const getCards = async () => {
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

  useEffect( () => {

    getCards()}, [])
  
  // ======================================
// delete card API call to server to remove a card
// ======================================
  const deleteCard: any = (selected) => {

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
      .then(data => {
        getCards();
        console.log("Deleted Card:", data)
      })
  }

  const editCard: any = (selected) => {
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
      .then(data => console.log("Edited Card:", data))
  }


  const renderItemIcon = (props: any) => (
    <View style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'flex-end'}}>
      <Icon name='edit-outline' {...props} onPress={() => setVisible(true)} />
      <Icon name='trash-2-outline' {...props} onPress={() => deleteCard(selected)} />
    </View>
  );
  
  const renderEditItemIcon = (props: any) => (
    <Icon name='checkmark-circle-outline' {...props} onPress={() => editCard()}/>
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

      <Modal visible={visible}>
        <Card disabled={true} style={{flex: 1, justifyContent: 'center', alignItems: 'center', height: 420, width: 420}}>
          <Card>
            {frontShow ? 
            <Text
              onPress={() => setFrontShow(!frontShow)}>
            {selected.front}</Text>
            :
            <Input
              label="Front of Card"
              value={selected.front}
              accessoryRight={renderEditItemIcon}
            />
            }
          </Card>
          <Card>
          {backShow ? 
            <Text
              onPress={() => setBackShow(!backShow)}>
            {selected.back}</Text>
            :
            <Input 
              label="Back of Card"
              value={selected.back}
              accessoryRight={renderEditItemIcon}
            />
            }
          </Card>
        </Card>
        <Button style={{ margin: '5%', padding:'4em', shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,
            elevation: 4 }}
            onPress={() => setVisible(false)}>
          Exit
        </Button>
      </Modal>

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
