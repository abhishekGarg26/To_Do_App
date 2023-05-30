import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import Constants from 'expo-constants';
import Note from './components/Note';
import db from './config'
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      noteArr: [{ note: 'React-Native', date: '13-Jul-2021' }],
      noteText: '',
    };
  }
  markDone = (index) => {
    const node =db.ref('tasks').child(this.state.noteArr[index].id)
    node.remove();
    this.state.noteArr.splice(index);
  };
componentDidMount(){
  const tasks=db.ref('tasks');
  tasks.on('value',(data)=>{
    const todos=data.val();
    const taskList=[];
    for(var id in todos){
      taskList.push({id,...todos[id]})
    }
    this.setState({noteArr:taskList})
  })
}
  addtask = () => {
    const tasks= db.ref('tasks');
    var d = new Date();
    const monthName = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'Jun',
      'July',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    if (this.state.noteText) {

      const newTask={
        note: this.state.noteText,
        date:
          d.getDate() + ' ' + monthName[d.getMonth()-1] + ' ' + d.getFullYear(),
      }
      tasks.push(newTask)
      this.setState({ noteText: '' });
    }
  };
  
  render() {
    var notes = this.state.noteArr.map((item, index) => {
      return (
        <Note
          task={item}
          markDone={() => {
            this.markDone(index);
          }}
        />
      );
    });
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{ fontSize: 20 }}>Keep It</Text>
        </View>
        <ScrollView style={styles.scroll}>{notes}</ScrollView>
        <View style={styles.bottom}>
          <TextInput
            placeholder="Enter Task"
            style={styles.inputText}
            onChangeText={(text) => {
              this.setState({ noteText: text });
            }}
            value={this.state.noteText}
          />
          <TouchableOpacity style={styles.inputButton} onPress={this.addtask}>
            <Text style={{ fontSize: 20 }}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  header: {
    backgroundColor: 'gold',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: 'grey',
  },
  bottom: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    borderTopColor: 'gold',
    borderTopWidth: 2,
  },
  inputText: {
    padding: 20,
    outline: 'none',
  },
  inputButton: {
    position: 'absolute',
    bottom: 10,
    right: 20,
    height: 40,
    width: 40,
    backgroundColor: 'gold',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  scroll:{
    flex:1,
    marginBottom:70
  }
});
