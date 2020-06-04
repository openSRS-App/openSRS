import React, {useState, useEffect, useRef} from 'react';
import { View, Text } from 'react-native';

export default function FlashCard({flashcards}) {
    const [flip, setFlip] = useState(false);
    let back;
    let front;



    return (
        
        // <View className={`card ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)} >
        <View>
            <View style={front}>
                {flashcards.front}
            </View>
            {/* <View style={back} >{flashcards.back}</View> */}
        </View>
    )
}

// let styles = {
//     .card.flip{
//         --rotate-y:180deg;
//     }
    
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