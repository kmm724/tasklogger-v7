import React, { useState } from 'react';
import { Modal, View, TextInput, Button, StyleSheet } from 'react-native';
import { useAppContext } from '../context/AppContext';

export default function AddNoteModal({ visible, onClose }) {
  const [noteText, setNoteText] = useState('');
  const { addNote } = useAppContext();

  const handleSave = () => {
    if (noteText.trim()) {
      addNote(noteText.trim());
      setNoteText('');
      onClose();
    }
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Enter note"
          value={noteText}
          onChangeText={setNoteText}
        />
        <Button title="Save Note" onPress={handleSave} />
        <Button title="Cancel" onPress={onClose} color="red" />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
  },
});
