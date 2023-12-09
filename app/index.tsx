import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function LandingPage() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        {/* Replace with your logo image */}
         <Image
          source={require('./../assets/images/adaptive-icon.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Start a Game</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonOutline]}>
          <Text style={styles.buttonOutlineText}>Join a Game</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff', // Set your desired background color
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 200, // Set width as per your logo's aspect ratio
    height: 200, // Set height as per your logo's aspect ratio
    resizeMode: 'contain', // To ensure the logo is scaled properly
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#6200ee', // Your primary button color
    width: '100%',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#ffffff', // Text color for primary button
    fontWeight: 'bold',
  },
  buttonOutline: {
    backgroundColor: '#fff',
    borderColor: '#6200ee', // Color same as the primary button
    borderWidth: 2,
  },
  buttonOutlineText: {
    color: '#6200ee', // Color same as the primary button
    fontWeight: 'bold',
  },
});
