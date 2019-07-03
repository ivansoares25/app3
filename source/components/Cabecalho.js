import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View } from 'react-native';

const imagem = require('../../imagens/jokenpo.png');

class Cabecalho extends Component {
    render() {
        return (
        <View style={styles.cabecalho}>
            <View>
                <Image style={styles.imagem} source={imagem} />
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    cabecalho: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        paddingBottom: 200,
    },
    imagem: {
        resizeMode: 'cover',    
    },
});

export default Cabecalho;
