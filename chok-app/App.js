import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppRegistry, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
        <Image style={styles.backgroundImage} source={{uri: 'https://s-media-cache-ak0.pinimg.com/564x/5b/10/e4/5b10e4cbeb28f81eebd82e2ded8a6528.jpg'}}>
        <View style={styles.imageContainer}>
          <LogoImage/>
          <FacebookLoginButton/>
          <GoogleLoginButton/>
        </View>
        </Image>
    );
  }
}

class BackgroundImage extends React.Component {
  render() {
    return (
      <Image style={styles.logoImage} source={{uri: 'http://www.fashionmio.com/wp-content/uploads/2015/01/Korean-Skin-Care-Hacks-for-Dry-Skin.jpg'}}/>
    );
  }
}

class LogoImage extends React.Component {
  render() {
    return (
      <Image style={styles.logoImage} source={{uri: 'https://image.elevenia.co.id/minimall/logo/2016/09/01/BK%20renewal%20logo-08_2016090118520141438.png'}}/>
    );
  }
}



class FacebookLoginButton extends React.Component {
  render() {
    return (
      <Image style={styles.loginButtonImage} source={{uri: 'http://qsmart.co/Images/fb.png'}}/>
    );
  }
}

class GoogleLoginButton extends React.Component {
  render() {
    return (
      <Image style={styles.loginButtonImage} source={{uri: 'http://www.setyourowntests.com/_/rsrc/1468869481521/help/accounts/btn_google_signin_dark_normal_web%402x.png'}}/>
    );
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 1.0,
  },
  backgroundImage: {
    flex: 1,
    height: null,
    width: null,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'stretch',
    backgroundColor: 'rgba(255,255,255,0.5)',
    opacity: 0.9
  },
  logoText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  logoImage: {
    width: 250,
    height: 200,
    margin: 0,
    opacity: 0.9,
  },
  loginButtonImage : {
    width: 193,
    height: 48,
    margin: 5,
  }
});

AppRegistry.registerComponent('LogoImage', () => LogoImage);
