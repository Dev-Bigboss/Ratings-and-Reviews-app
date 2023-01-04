import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './ReviewForm';


export default function Home({ navigation }) {

  const [modalOpen, setModalOpen] = useState(false);


  const [reviews, setReviews] = useState([
    {title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1'},
    {title: 'Gotta Catch Them All (again)', rating:4, body: 'lorem ipsum', key: '2'},
    {title: 'Not Do "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3'}
  ]);
  
  const addReview =(review) => {
    review.key = Math.random().toString();
    setReviews((currentReviews) => {
      return [review, ...currentReviews];
    });
    setModalOpen(false);
  }
    
  return ( 
    <View style={globalStyles.container}>
      
      <Modal visible={modalOpen} animationType='slide'>
       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
       <View style={globalStyles.modalContent}>
          <MaterialIcons
            name='close'
            size={24}
            onPress={() => setModalOpen(false)}
            style={{ ...globalStyles.modalToggle, ...globalStyles.modalClose }}
          />
          <ReviewForm addReview={addReview}/>
          </View>
          </TouchableWithoutFeedback>
      </Modal>
      
      <MaterialIcons 
        name='add'
        size={24}
        onPress={() => setModalOpen(true)}
        style={globalStyles.modalToggle}
      />


      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
          <Card>
            <Text style={globalStyles.titleText}>{ item.title }</Text>
          </Card>
          </TouchableOpacity>
        )}
       />
        </View>
    );
}