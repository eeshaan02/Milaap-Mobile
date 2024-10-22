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

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Animation/>
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
});

export default App;
