import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useAppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';

export default function AddEmployeeScreen({ navigation }) {
  const { employees, setEmployees } = useAppContext();
  const [name, setName] = useState('');
  const [role, setRole] = useState('');

  const handleAddEmployee = () => {
    if (name.trim() === '' || role.trim() === '') {
      alert('Please enter both name and role.');
      return;
    }

    const newEmployee = { id: uuidv4(), name, role };
    setEmployees([...employees, newEmployee]);
    setName('');
    setRole('');
    alert('Employee added successfully');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Employee</Text>
      <TextInput
        style={styles.input}
        placeholder="Employee Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Employee Role (e.g., laborer, supervisor)"
        value={role}
        onChangeText={setRole}
      />
      <Button title="Add Employee" onPress={handleAddEmployee} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5 },
});
