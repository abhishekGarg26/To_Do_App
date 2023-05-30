import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
export default class Note extends React.Component {
  render() {
    return (
      <View style={styles.note} key={this.props.task}>
        <Text style={styles.noteText}>{this.props.task.note}</Text>
        <Text style={styles.noteText}>{this.props.task.date}</Text>
        <TouchableOpacity
          style={styles.noteDelete}
          onPress={this.props.markDone}>
          <Text style={{ color: 'white' }}>Done</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  note: {
    position: 'relative',
    padding: 20,
    paddingRight: 190,
    borderBottomColor: '#ededed',
    borderBottomWidth: 2,
  },
  noteText: {
    paddingLeft: 20,
    borderLeftColor: '#ededed',
    borderLeftWidth: 10,
  },
  noteDelete: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    top: 10,
    padding: 10,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
