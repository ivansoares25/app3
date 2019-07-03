import React, { Component } from 'react';
import {
  StyleSheet,
  Text, 
  Image,
  View } from 'react-native';

const pedra = require('../../imagens/pedra.png');
const papel = require('../../imagens/papel.png');
const tesoura = require('../../imagens/tesoura.png');

class Icone extends Component {
    render() {
        if (this.props.escolha === 'Pedra') {
            return (
                <View style={styles.icone}>
                    <Text style={styles.textoJogador}>{this.props.jogador}</Text>
                    <Image source={pedra} />        
                </View>
            );
        } else if (this.props.escolha === 'Papel') {
            return (
                <View style={styles.icone}>
                    <Text style={styles.textoJogador}>{this.props.jogador}</Text>
                    <Image source={papel} />        
                </View>
            );
        } else if (this.props.escolha === 'Tesoura') {
            return (
                <View style={styles.icone}>
                    <Text style={styles.textoJogador}>{this.props.jogador}</Text>
                    <Image source={tesoura} />        
                </View>
            );
        }
        return false;
    }
}

const styles = StyleSheet.create({
    icone: {
        alignItems: 'center',
        marginBottom: 20,
    },
    textoJogador: {
        fontSize: 18,
    },
});

export default Icone;  
