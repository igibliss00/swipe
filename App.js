import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Card, Button } from 'react-native-elements'

import Deck from './src/Deck'

const DATA = [
  { id: 1, text: 'Julie McElroy', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 2, text: 'Chris Kattan', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 3, text: 'Rose McGowan', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 4, text: 'Bob Odenkirk', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
  { id: 5, text: 'Lisa Zane', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 6, text: 'Wayne Wilderson', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 7, text: 'Amy Higgins', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 8, text: 'Sandra Thigpen', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
]

export default function App() {

  return (
    <View style={styles.container}>
      <Deck 
        data={DATA}
        renderCard={renderCard}
        renderNoMoreCards={renderNoMoreCards}
        style={styles.deck}        
      />
    </View>
  );
}

const renderNoMoreCards = () => {
  return (
    <Card title="All Done!">
      <Text style={{ marginBottom: 10 }}>
        There's no more content here!
      </Text>
      <Button
        backgroundColor="#03A9F4"
        title="Get More!"
      />
    </Card>
  )
}

const renderCard = item => {
  return (
    <Card 
      title={item.text}
      image={{ uri: item.uri }}
      key={item.id}
      style={styles.card}
    >
      <Text style={{ marginBottom: 10 }}>
        Custom Card
      </Text>
      <Button
        icon={{ name: 'code' }}
        backgroundColor="#03A9F4"
        title="View Now!"
      />
    </Card>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 200,
    backgroundColor: '#fff', 
  },
  deck: {},
});
