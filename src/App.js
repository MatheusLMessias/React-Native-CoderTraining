import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import {NoteCreated, NoteDeleted} from './components/AlertNotes';
import Component1 from './components/Component1';

export default () => { 
  return (
    <View style={styles.container}>
      <NoteCreated />
      <NoteDeleted></NoteDeleted>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center', // horizontal
    justifyContent: 'center', //vertical
  },
});
