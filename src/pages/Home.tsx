import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import banner from '../../assets/banner.png' 

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image 
          // source={banner}
          style={styles.image}
          source={banner}
          // source={require('../../assets/banner.png')}
          // source={{uri: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/366901/01/sv01/fnd/BRA/w/1000/h/1000/bg/255,255,255'}}
          />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Tênis</Text>
        <Text style={[styles.text, {color: '#cecece'}]}> - </Text>
        <Text style={[styles.text, {color: '#cecece'}]}>Masculino</Text>
        <TouchableOpacity style={{position: 'absolute', right:0, alignSelf: 'center'}}>
          <MaterialIcons
            name='filter-list'
            size={24}
            color='#000'
            />

        </TouchableOpacity>

      </View>
      <View style={styles.line} />
      <ScrollView>
        <Text style={styles.text}> Lançamentos</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <View style={{width:80, height: 80, backgroundColor:'red' }}></View>
          <View style={{width:80, height: 80, backgroundColor:'red' }}></View>
    
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width: '100%',
    backgroundColor: '#fff'
  },
  header:{
    marginBottom: 8
  },
  image:{
     width: '100%'
  },
  textContainer:{
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '5%'
  },
  text:{
    fontFamily: 'Anton_400Regular',
    fontSize: 26,
    marginHorizontal: '1%'
  },
  line:{
    borderBottomColor: '#d8d8d8',
    borderBottomWidth: 2
  }
})