/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useRef } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Dimensions
} from 'react-native';

import { Text } from 'react-native-elements';
import LottieView from 'lottie-react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { G, Line, Text as SvgText } from 'react-native-svg';
//import { BarChart, XAxis } from 'react-native-svg-charts';
//import { PieChart } from 'react-native-svg-charts';

import Video, {VideoRef} from 'react-native-video';
const { width, height } = Dimensions.get('window')


const VideoPlayer = () => {
 const videoRef = useRef<VideoRef>(null);
 const background = require('./20sec.mp4');

 return (
   <Video 
    // Can be a URL or a local file.
    source={background}
    // Store reference  
    ref={videoRef}
    // Callback when remote video is buffering                                      
    //onBuffer={onBuffer}
    // Callback when video cannot be loaded              
    //onError={onError}               
    style={styles.backgroundVideo}
   />
 )
}

function Animation() {
  return (
    <LottieView 
      source={require('./feedback.json')} 
      style={styles.feedbackAnimation}
      autoPlay 
      loop
    />
  );
}

//const ShareCampaignComponent = ({ socialShares }: any) => {
  //const socialShareDonations_Data = [
    //{
      //key: 'Whatsapp',
      //value: socialShares?.whatsapp,
      //svg: { fill: '#FFC38B' },
    //},
    //{
      //key: 'Facebook',
      //value: socialShares?.facebook,
      //svg: { fill: '#FFD7BB' },
    //},
    //{
      //key: 'Instagram',
      //value: socialShares?.instagram,
      //svg: { fill: '#FCEEE8' },
    //},
    //{
      //key: 'Mail',
      //value: socialShares?.mail,
      //svg: { fill: '#DA8900' },
    //},
    //{
      //key: 'Others',
      //value: socialShares?.others,
      //svg: { fill: '#FFB056' },
    //},
  //]

  //return (
    //<View
      //style={{
        //height: (height / 640) * 200,
      //}}
    //>
      //{Object.keys(socialShareDonations_Data).length && (
        //<>
          //<PieChart
            //style={{ height: 150, position: 'relative', right: 80 }}
            //data={socialShareDonations_Data}
            //outerRadius={'80%'}
            //innerRadius={10}
          ///>
          //<View style={{ position: 'absolute', right: (width / 360) * 50, top: 0 }}>
            //{socialShareDonations_Data.map((item, index) => {
              //return (
                //<View
                  //style={{ flexDirection: 'row', marginTop: 8 }}
                  //key={index}
                //>
                  //<View
                    //style={[
                      //styles.legendColor,
                      //{ backgroundColor: item.svg.fill },
                    //]}
                  ///>
                  //<Text style={styles.legendText}>{item.key}</Text>
                //</View>
              //)
            //})}
          //</View>
        //</>
      //)}
    //</View>
  //)
//}



function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Animation />
  );
}

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  feedbackAnimation: {
    height: (height / 640) * 140,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  legendText: {
    fontSize: 14,
    color: 'white',
    fontWeight: '500',
    lineHeight: 19,
    fontFamily: 'Avenir-Heavy',
    paddingLeft: 8,
  },
  legendColor: {
    height: 16,
    width: 16,
    borderRadius: 2,
  },
});

export default App;
