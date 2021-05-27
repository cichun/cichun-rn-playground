/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type {Node} from 'react';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import StickyParallaxHeader from 'react-native-sticky-parallax-header';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const file2 = require('./assets/2.png');
  const file1 = require('./assets/1.png');

  return (
    <>
      <StickyParallaxHeader
        headerType={'TabbedHeader'}
        backgroundColor={'red'}
        // backgroundImage={1}
        // headerHeight={constants.responsiveHeight(13)}
        renderBody={() => {
          return <Text>Cześć</Text>;
        }}
        foregroundImage={require('./assets/1.png')}
        tabs={[
          {title: 'Info', content: <Text key={'info'}>Info</Text>},
          {title: 'History', content: <Text key={'History'}>History</Text>},
          {
            title: 'My Products',
            content: <Text key={'My Products'}>My Products</Text>,
          },
          {title: 'Settings', content: <Text key={'Settings'}>Settings</Text>},
        ]}
        title={'Nesta Plus'}
        logo={require('./assets/icon.png')}
        logoStyle={{width: 24, height: 24}}
      />

      {/*<StickyParallaxHeader headerType="AvatarHeader" />*/}
      {/*<StickyParallaxHeader headerType="DetailsHeader" />*/}
    </>
  );

  // eslint-disable-next-line no-unreachable
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <StickyParallaxHeader headerType="TabbedHeader" />
      {/*<ScrollView*/}
      {/*  contentInsetAdjustmentBehavior="automatic"*/}
      {/*  style={backgroundStyle}>*/}
      {/*  <Header />*/}
      {/*  <View*/}
      {/*    style={{*/}
      {/*      backgroundColor: isDarkMode ? Colors.black : Colors.white,*/}
      {/*    }}>*/}
      {/*    <Section title="Step One">*/}
      {/*      Edit <Text style={styles.highlight}>App.js</Text> to change this*/}
      {/*      screen and then come back to see your edits.*/}
      {/*    </Section>*/}
      {/*    <Section title="See Your Changes">*/}
      {/*      <ReloadInstructions />*/}
      {/*    </Section>*/}
      {/*    <Section title="Debug">*/}
      {/*      <DebugInstructions />*/}
      {/*    </Section>*/}
      {/*    <Section title="Learn More">*/}
      {/*      Read the docs to discover what to do next:*/}
      {/*    </Section>*/}
      {/*    <LearnMoreLinks />*/}
      {/*  </View>*/}
      {/*</ScrollView>*/}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
