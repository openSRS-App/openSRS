import React from 'react'
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


export default function Home_frame() {
    return (
        <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <view style={{alignSelf:"flex-start", padding:"10px"}}>
                <Button >Menu</Button>
            </view>
            <view style={{flex: 1, alignSelf:'center', paddingTop:'200px', paddingBottom:'200px'}}>
                <Card style={{width:'420px', height:'420px'}}>
                    <FlashCardList />
                </Card>
            </view>
            <view style={{display:'flex', flexDirection:'row', padding:'120px'}}>
                <view style={{padding:'10px'}}>
                    <Button accessoryLeft={CloseIcon} ></Button>
                </view>
                <view style={{padding:'10px', paddingLeft:'100px', paddingRight:'100px'}}>
                    <Button accessoryLeft={FlipIcon}></Button>
                </view>
                <view style={{padding:'10px'}}>
                    <Button accessoryLeft={CheckIcon}></Button>
                </view>
            </view>
        </Layout>
    )
}