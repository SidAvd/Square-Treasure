import * as React from 'react';
import {View, StyleSheet, Text, Pressable, Image} from 'react-native';
import { createBoard } from '../utils/createBoard';
import { gameReducer } from '../reducers/gameReducer';
import Cell from './Cell';

const NUMBER_OF_ROWS = 8;
const NUMBER_OF_COLUMNS = 8;


export default function Board(){
    const [gameState, dispatch] = React.useReducer(gameReducer, {
        board: createBoard(NUMBER_OF_ROWS, NUMBER_OF_COLUMNS),
        isWin: false,
        counterMoves: 0
    })

    function handlePress(row,col) {
        dispatch({type: "HANDLE_CELL", row, col})
    }

    function handleRestartButton() {
        dispatch({type: "HANDLE_RESTART_BUTTON"})
    }

    return (
        <View style={styles.containerBoard}>
            <View  style={styles.containerOuterUpper}>
                <View style={styles.containerUpper}>
                    <Text style={styles.text}>Square Treasure</Text>
                    <View style={styles.horizontalLine}></View>
                    <Text style={styles.text2}>{whatTheMessageShows(gameState.isWin)}</Text>
                </View>
            </View>
            <View  style={styles.containerOuterArray}>
                <View style={styles.containerArray}>
                    {gameState.board.map((row, rowIdx) => (
                        <View key={rowIdx} style={styles.rowStyle}>
                        {row.map((cell, cellIdx) => (
                            <Cell key={cellIdx} handlePress={handlePress} {...cell}/>
                        ))}
                        </View>
                    ))}
                </View>
            </View>
            <View style={styles.containerOuterDown}>
                <View style={styles.containerDown}>
                    <Pressable  style={{flex:1, justifyContent:'center', alignContent:'center', alignItems:'center'}} onPress={handleRestartButton}>
                        <Text style={styles.text2}>Restart</Text>
                    </Pressable>
                    <View style={styles.verticalLine}></View>
                    <View style={{flex:1, justifyContent:'center', alignContent:'center', alignItems:'center'}}>
                        <Text style={styles.text2}>Moves: {gameState.counterMoves}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

function whatTheMessageShows(isWin)
{
    if (isWin) return '💎 You Win 💎';
    return 'Find the 💎';
}

const styles = StyleSheet.create({
    containerBoard: {
        flex: 1,
        backgroundColor: 'salmon',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    containerOuterUpper:{
        flex: 5,
        width: '100%',
        padding: 2,
        backgroundColor: 'salmon',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent:'center',
    },
    containerUpper:{
        flex:1,
        width: '95%',
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'space-around',
        alignContent:'center',
        borderRadius:10,
        borderColor:'black',
        borderWidth:4
    },
    text:{
        fontWeight:'900',
        fontSize:32,
        color:'black',
    },
    containerOuterArray:{
        flex: 18,
        width: '100%',
        padding: 2,
        backgroundColor: 'salmon',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent:'center',
    },
    containerArray: {
        flex: 1,
        width:'95%',
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:10,
        borderColor:'black',
        borderWidth:4
    },
    rowStyle:{
        flex:0.1,
        flexDirection:'row'
    },
    containerOuterDown:{
        flex: 5,
        width: '100%',
        padding: 2,
        backgroundColor: 'salmon',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent:'center',
    },
    containerDown:{
        flex: 1,
        justifyContent:'center',
        alignSelf:'center',
        flexDirection:'row',
        width: '95%',
        backgroundColor: 'orange',
        borderRadius:10,
        borderColor:'black',
        borderWidth:4
    },
    text2:{
        fontWeight:'700',
        fontSize:26,
        color:'blue',
        alignSelf:'center'
    },
    verticalLine:{

        height:'90%',
        alignSelf:'center',
        borderLeftColor: 'black',
        borderLeftWidth:2,
        borderRightColor: 'black',
        borderRightWidth:2,
        borderRadius:4
    },
    horizontalLine:{
        width:'90%',
        alignSelf:'center',
        borderTopColor: 'black',
        borderTopWidth:2,
        borderBottomColor: 'black',
        borderBottomWidth:2,
        borderRadius:4
    },
  });