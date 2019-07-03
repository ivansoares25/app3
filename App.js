import React, { Component } from 'react';
import {
  StyleSheet,
  Text, 
  Button,
  View } from 'react-native';

import Cabecalho from './source/components/Cabecalho';
import Icone from './source/components/Icone';

  export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = { escolhaDoUsuario: '', escolhaDoComputador: '', resultado: '' };
  }

  jokenpo(escolhaDoUsuario) {
    //gera numero aleatorio (0, 1, 2)
    const numero = Math.floor(Math.random() * 3);

    let escolhaDoComputador = '';
    
    switch (numero) {
      case 0: escolhaDoComputador = 'Pedra'; break;
      case 1: escolhaDoComputador = 'Papel'; break;
      case 2: escolhaDoComputador = 'Tesoura'; break;
      default: escolhaDoComputador = '';
    }

    let resultado = '';

    if (escolhaDoComputador === 'Pedra') {
      if (escolhaDoUsuario === 'Pedra') {
        resultado = 'Empate';
      }
      if (escolhaDoUsuario === 'Papel') {
        resultado = 'Você Ganhou';
      } 
      if (escolhaDoUsuario === 'Tesoura') {
        resultado = 'Você Perdeu';
      }
    }

    if (escolhaDoComputador === 'Papel') {
      if (escolhaDoUsuario === 'Papel') {
        resultado = 'Empate';
      }
      if (escolhaDoUsuario === 'Tesoura') {
        resultado = 'Você Ganhou';
      } 
      if (escolhaDoUsuario === 'Pedra') {
        resultado = 'Você Perdeu';
      }
    }

    if (escolhaDoComputador === 'Tesoura') {
      if (escolhaDoUsuario === 'Tesoura') {
        resultado = 'Empate';
      }
      if (escolhaDoUsuario === 'Pedra') {
        resultado = 'Você Ganhou';
      } 
      if (escolhaDoUsuario === 'Papel') {
        resultado = 'Você Perdeu';
      }
    }

    this.setState({ escolhaDoComputador }); 
    this.setState({ escolhaDoUsuario });
    this.setState({ resultado });
  }

  render() {
    return (
      <View>
        <Cabecalho />

        <View style={styles.painelAcoes}>
          <View style={styles.btnEscolha}>
            <Button title='pedra' onPress={() => this.jokenpo('Pedra')} />
          </View>
          <View style={styles.btnEscolha}>
            <Button title='papel' onPress={() => this.jokenpo('Papel')} />
          </View>
          <View style={styles.btnEscolha}>
            <Button title='tesoura' onPress={() => this.jokenpo('Tesoura')} />
          </View>
        </View>

        <View style={styles.palco}>
          <Text style={styles.resultado}>{this.state.resultado}</Text>
          <Icone escolha={this.state.escolhaDoComputador} jogador='Computador' />
          <Icone escolha={this.state.escolhaDoUsuario} jogador='Você' />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  btnEscolha: {
    width: 90,
  },
  painelAcoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  palco: {
    alignItems: 'center',
    marginTop: 10,
  },
  resultado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 60,
  },
});
