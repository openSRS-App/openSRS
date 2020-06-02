import React from 'react'
import { Layout, Text, Button, Menu, MenuGroup, MenuItem } from '@ui-kitten/components';


export default function Deck_frame() {
    return (
        <Layout style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
            <Button style={{alignSelf:"flex-start", margin: '1em'}}>Menu</Button>
            
            <Text category='h1'>Decks:</Text>
            <Button style={{margin: '1em'}}>Math</Button>
            <Button style={{margin: '1em'}}>Science</Button>
            <Button style={{margin: '1em'}}>Development</Button>
        </Layout>
    )
}
