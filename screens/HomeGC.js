// screens/HomeGC.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';

export default function HomeGC() {
  const [noteText, setNoteText] = useState('');
  const [notes, setNotes] = useState([]);

  const handleAddNote = () => {
    if (noteText.trim()) {
      setNotes([...notes, { id: Date.now().toString(), text: noteText }]);
      setNoteText('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>GC Dashboard</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter note"
        value={noteText}
        onChangeText={setNoteText}
      />
      <Button title="Add Note" onPress={handleAddNote} />
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.noteItem}>{item.text}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  noteItem: {
    fontSize: 18,
    paddingVertical: 5,
  },
});
