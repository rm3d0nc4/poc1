/**
  * Sample React Native App
  * https://github.com/facebook/react-native
  * @flow
  */
 
 import React, { Component } from 'react';
 import {
   Platform,
   StyleSheet,
   Text,
   View,
   TouchableHighlight    
 } from 'react-native';
 import Voice from 'react-native-voice';
 
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,' +
    'Shake or press menu button for dev menu',
});
 
 type Props = {};
 export default class App extends Component<Props> {
 
   constructor(props) {
   
     super(props)
     this.state = { textoStatus: '' ,texto:''}
   
     Voice.onSpeechStart = this.onSpeechStartHandler.bind(this);
     Voice.onSpeechEnd = this.onSpeechEndHandler.bind(this);
     Voice.onSpeechResults = this.onSpeechResultsHandler.bind(this);
     
   }
 
    onSpeechResultsHandler(result){
         this.setState({
             ...this.state,
             texto:result.value
         });
    }    
   
   onSpeechStartHandler(){
     this.setState({
         ...this.state,
         textoStatus:'iniciou'
     });    
   }    
   
   onSpeechEndHandler(){
     this.setState({
         ...this.state,
         textoStatus:'parou'
     });    
   }
     
   onStartButtonPress(e){
     Voice.start('pt-BR');
   }    
   
   onStopButtonPress(e){
     Voice.stop();
   }    
 
   render() {
     return (
       <View style={styles.container}>
         <Text style={styles.welcome}>
           Welcome to React Native!
         </Text>
         <TouchableHighlight
          style={styles.button}
          onPress={this.onStartButtonPress}
        >
          <Text> Iniciar reconhecimento de voz </Text>
         </TouchableHighlight>
          <TouchableHighlight
          style={styles.button}
          onPress={this.onStopButtonPress}
        >
          <Text> Parar </Text>
         </TouchableHighlight>
         <Text style={styles.welcome}>
          Status {this.state.textoStatus}
         </Text>
         <Text style={styles.welcome}>
           {this.state.texto}
         </Text>
       </View>
     );
   }
 }
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#F5FCFF',
   },
   welcome: {
     fontSize: 20,
     textAlign: 'center',
     margin: 10,
   },
   instructions: {
     textAlign: 'center',
     color: '#333333',
     marginBottom: 5,
   },
 });

