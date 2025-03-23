import React from "react";
import LottieView from "lottie-react-native";

function Loading(){


    return <LottieView source={require('../../assets/loading.json')} autoPlay style={{width:500, height:500,alignItems:'center',justifyContent:'center'}}/> ;
}
export default Loading;