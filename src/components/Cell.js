import * as React from 'react';
import {StyleSheet, Text, Pressable, View} from 'react-native';

export default function Cell({
    row,
    col,
    isFlipped,
    squareText,
    handlePress,
}){
    return (
        <View style={styles.outerCellStyle}>
            <Pressable onPress={() => handlePress(row, col)}>
                <View style={styles.innerCellStyle}>
                    <Text style={styles.cellTextStyle}>{whatTheCellShows(isFlipped, squareText)}</Text>
                </View>
            </Pressable>
        </View>
    );
}

function whatTheCellShows(isFlipped, squareText)
{
    if (isFlipped && squareText == "T") return '💎';
    if (isFlipped) return squareText;
    return "";
}


const styles = StyleSheet.create({
    outerCellStyle:{
      backgroundColor:'orange',
      flex:0.2,
      justifyContent:'center'
    },
    innerCellStyle:{
      backgroundColor:'blue',
      height: "90%",
      width:"90%",
      justifyContent:'center',
      alignSelf:'center',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      borderWidth:2,
      borderColor:'black',
      elevation:8
    },
    cellTextStyle:{
        alignSelf:'center',
        fontSize:25,
        fontWeight:'bold',
        color:'white',
    }
  });