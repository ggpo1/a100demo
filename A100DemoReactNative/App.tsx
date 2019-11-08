import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.app}>
      <View style={styles.header}></View>
      <View style={styles.content}>
        <View style={styles.sidebar}></View>
        <View style={styles.content_block}>
          <View style={styles.page_content}></View>
          <View style={styles.page_footer}></View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    backgroundColor: '#E5E5E5',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  header: {
    width: '100%',
    height: '20%',
    backgroundColor: 'red',
  },
  content: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  sidebar: {
    width: '7%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    borderTopRightRadius: 10,
  },
  content_block: {
    flex: 1,
    width: '89%',
    height: '100%',
    marginRight: '2%',
    alignItems: 'stretch',
    flexDirection: 'column',
    backgroundColor: 'green'
  },
  page_content: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
  page_footer: {
    width: '100%',
    height: '20%',
    backgroundColor: 'transparent'
  }
});
