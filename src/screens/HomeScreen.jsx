import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  img: {
    marginVertical: 20,
    width: 370,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 20,
  },
  img1: {
    marginVertical: 20,
    width: 370,
    height: 400,
    resizeMode: 'contain',
    left: 80,
    top: 30,
  },
  container: {
    alignItems: 'center',
  },
  title: {
    color: 'orange',
    fontSize: 16,
  },
});

export default () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}> Welcome to our pet shop </Text>
        <Image
          source={{
            uri: 'https://i.pinimg.com/564x/1b/ec/d2/1becd21f3e8be700e5557ee76bbaebbc.jpg',
          }}
          style={styles.img}
        />
        <Image
          source={{
            uri: 'https://catadoptionteam.org/wp-content/uploads/2019/05/Transparent-OrangeWhiteCat-764x1024.png',
          }}
          style={styles.img1}
        />
      </View>
    </View>
  );
};
