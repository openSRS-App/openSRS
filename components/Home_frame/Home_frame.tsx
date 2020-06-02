import React from 'react'
import { Layout, Text, Button, Menu, MenuGroup, MenuItem } from '@ui-kitten/components';


export default function Home_frame() {
    return (
        <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Button style={{alignSelf:"flex-start"}}>Menu</Button>
            
            <Text category='h1'>This is the home frame</Text>
            <Button>button, yo</Button>
        </Layout>
    )
}
