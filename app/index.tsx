import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');
const isDesktop = width > 720; // You can define desktop to be any width you deem suitable

export default function LandingPage() {
  return (
    <View style={[styles.container, isDesktop && styles.containerDesktop]}>
      <View style={[styles.headerContainer, isDesktop && styles.headerContainerDesktop]}>
        {/* Replace with your logo image */}
        <Image
          source={require('./../assets/images/adaptive-icon.png')}
          style={[styles.logo, isDesktop && styles.logoDesktop]}
        />
      </View>
      <View style={[styles.buttonContainer, isDesktop && styles.buttonContainerDesktop]}>
        <TouchableOpacity style={[styles.button, isDesktop && styles.buttonDesktop]}>
          <Text style={styles.buttonText}>Start a Game</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonOutline, isDesktop && styles.buttonDesktop]}>
          <Text style={[styles.buttonText, styles.buttonOutlineText]}>Join a Game</Text>
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
    backgroundColor: '#fff',
  },
  containerDesktop: {
    justifyContent: 'space-around',
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  headerContainerDesktop: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  logoDesktop: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonContainerDesktop: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 120,
  },
  button: {
    backgroundColor: '#6200ee',
    width: '100%',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
    borderColor: '#6200ee',
    borderWidth: 2,
  },
  buttonDesktop: {
    width: 250, // Fixed width for desktop
    marginBottom: 0,
    marginTop: 10,
    marginRight: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  buttonOutline: {
    backgroundColor: '#fff',
    borderColor: '#6200ee',
    borderWidth: 2,
  },
  buttonOutlineText: {
    color: '#6200ee',
  },
});
