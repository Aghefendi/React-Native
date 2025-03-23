
import React from 'react'
import LottieView from 'lottie-react-native'

function Error () {
  return <LottieView source={require('../../assets/error3.json')} autoPlay style={{alignItems:'center',justifyContent:'center',width:500 , height:500}}/>
}

export default Error;

