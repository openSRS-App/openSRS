import React, {useRef} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CardFlip from 'react-native-card-flip';
import { transform } from '@babel/core';

const FlashCard = ({flashcards, flip}) => {


    return (
        // <View >
        //     <CardFlip>
        //         <TouchableOpacity onPress={() => } ><Text style={{display:'flex',justifyContent:'center',alignSelf:'center', fontSize:28 }}>{flashcards.front}</Text></TouchableOpacity>
        //         <TouchableOpacity  onPress={() => console.log(CardFlip)} ><Text style={{display:'flex',justifyContent:'center',alignSelf:'center', fontSize:28 }}>{flashcards.back}</Text></TouchableOpacity>
        //     </CardFlip>
        // </View>
        // <View className={`card ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)} >
        // <View style={`styles.card ${flip ? '.front' : '.back'}`}>
            <View style={{display:'flex',justifyContent:'center',alignSelf:'center', height:360}}>
                <Text style={{display:'flex',justifyContent:'center',alignSelf:'center', fontSize:28 }}>{flip ? flashcards.front : flashcards.back}</Text>
            </View>

        // </View>
    )
}
export default FlashCard;

// let styles = {
//     // .card.flip{
//     //     --rotate-y:180deg;
//     // }
    
//     .card .front {
//         left: 0;
//     }
    
//     .card .front,
//     .card .back {
//         align-self: center;
//         position: absolute;
//         padding: 1rem;
//         backface-visibility: hidden;
//     }
    
//     .card .back {
//         transform: rotateY(180deg)
// }