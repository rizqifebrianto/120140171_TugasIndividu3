import React from "react";
import { TouchableOpacity, SafeAreaView, ScrollView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

import logo from '../assets/airplane.png'
import user from '../assets/user.png'
import backbtn from '../assets/arrow.png'

const Jadwal = [
  {
    id: '1',
    asal: 'Bandung',
    tujuan: 'Jakarta',
    maskapai: 'Lion Air',
    waktu : '23 Mar 2022, 18:00',

  },
  {
    id: '2',
    asal: 'Jakarta',
    tujuan: 'Bandung',
    maskapai: 'Lion Air',
    waktu : '23 Mar 2022, 18:00',
  },
  {
    id: '3',
    asal: 'Jakarta',
    tujuan: 'Bandung',
    maskapai: 'Lion Air',
    waktu : '23 Mar 2022, 18:00',
  },
  {
    id: '4',
    asal: 'Jakarta',
    tujuan: 'Bandung',
    maskapai: 'Lion Air',
    waktu : '23 Mar 2022, 18:00',
  },
  {
    id: '5',
    asal: 'Jakarta',
    tujuan: 'Bandung',
    maskapai: 'Lion Air',
    waktu : '23 Mar 2022, 18:00',
  },
  {
    id: '6',
    asal: 'Jakarta',
    tujuan: 'Bandung',
    maskapai: 'Lion Air',
    waktu : '23 Mar 2022, 18:00',
  },
  {
    id: '7',
    asal: 'Jakarta',
    tujuan: 'Bandung',
    maskapai: 'Lion Air',
    waktu : '23 Mar 2022, 18:00',
  },
  {
    id: '8',
    asal: 'Jakarta',
    tujuan: 'Bandung',
    maskapai: 'Lion Air',
    waktu : '23 Mar 2022, 18:00',
  },
  {
    id: '9',
    asal: 'Jakarta',
    tujuan: 'Bandung',
    maskapai: 'Lion Air',
    waktu : '23 Mar 2022, 18:00',
  },

];


const Schedule = ({ navigation }) => {
  const renderItem = ({ item }) => (
  <View style={styles.item}>
    <Text style={styles.tujuanasal}>{item.asal}   -   {item.tujuan}</Text>
    <View style={styles.waktupesawat}>
      <img src={logo} alt="logo" style={styles.logo}/>
      <Text style={styles.maskapai}>{item.maskapai}</Text>
      <Text style={styles.texttanggal}>{item.waktu}</Text>
    </View>    
  </View>
  );
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <View style={styles.top}>
            <TouchableOpacity
              style={styles.button}
              onPress={ () => navigation.goBack()}
            >
              <img src={backbtn} alt="back" style={styles.logo}/>
            </TouchableOpacity>
            <Text style={styles.heading}>Hiling.id</Text>
            <img src={user} alt="user" style={styles.logo}/>
          </View>
          <Text style={styles.heading2}>Hasil Pencarian Penerbangan</Text>
          <Text style={styles.heading2}>(tanggal Keberangkatan)</Text>
      </View>
      <SafeAreaView>
        <ScrollView style={styles.scrollView}>
          <FlatList
            data={Jadwal}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </ScrollView>
      </SafeAreaView>
      <Text style={styles.copyright}>Copyright Rizqi Fiesta - 120140171</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
    marginTop: StatusBar.currentHeight || 0,
  },
  header:{
    width:'100%',
    backgroundColor: 'crimson',
    padding:20,
    marginBottom:10,
  },
  heading: {
    color: 'white',
    fontSize: 30,
    fontFamily: "Lexend",
  },
  heading2: {
    fontFamily: "Lexend",
    color: 'white',
    textAlign:'center',
  },
  top: {
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"space-between",
    marginBottom:10,
  },
  img: {
    width:10,
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius:10,
  },
  title: {
    fontSize: 32,
  },
  waktupesawat:{
    marginTop: 20,
    marginBottom:10,
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"space-between"
  },
  maskapai:{
    marginLeft:-80,
    fontSize:20,
    fontWeight: "bold",
  },
  texttanggal:{
    color:'blue',
  },
  copyright: {
    color : '#797575',
    fontWeight: 'bold',
    marginBottom: '20px',
    padding:20,
    marginTop: '10px',
    textAlign: 'center',
  },
});

export default Schedule;