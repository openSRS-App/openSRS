import React from 'react'
import { View } from 'react-native'
import { Layout, Text, Button, CheckBox } from '@ui-kitten/components';


export default function Deck_frame(): React.ReactElement {
    return (
        <Layout style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
            <Button style={{alignSelf:"flex-start", margin: '1em'}}>Menu</Button>

              <Text category='h1'>Decks:</Text>
              <View style={{flexDirection: 'row'}}>
                <Button style={{margin: '1em'}}>Math</Button> 
                <CheckBox />
              </ View>  
              <View style={{flexDirection: 'row'}}>
                <Button style={{margin: '1em'}}>Science</Button> 
                <CheckBox />
              </ View>  
              <View style={{flexDirection: 'row'}}>
                <Button style={{margin: '1em'}}>Development</Button> 
                <CheckBox />
              </ View>  
        </Layout>
    )
}
