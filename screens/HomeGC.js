import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { useAppContext } from '../context/AppContext';

export default function HomeGC({ navigation }) {
  const { notes, addNote } = useAppContext();
  const [newNote, setNewNote] = useState('');

  const handleAddNote = () => {
    if (newNote.trim() !== '') {
      addNote({ id: Date.now().toString(), text: newNote });
      setNewNote('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>GC Dashboard</Text>
      <TextInput
        style={styles.input}
        placeholder="Add Note"
        value={newNote}
        onChangeText={setNewNote}
      />
      <Button title="Add Note" onPress={handleAddNote} />
      {/* ✅ Corrected navigation target */}
      <Button title="Manage Employees" onPress={() => navigation.navigate('ManageEmployees')} />
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.note}>{item.text}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, marginBottom: 12 },
  input: { borderWidth: 1, padding: 8, marginBottom: 12 },
  note: { padding: 8, borderBottomWidth: 1 },
});
