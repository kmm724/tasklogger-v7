// screens/EmployeeManagerScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { useAppContext } from '../context/AppContext';

export default function EmployeeManagerScreen() {
  const { employees, addEmployee, archiveEmployee } = useAppContext();
  const [name, setName] = useState('');

  const handleAddEmployee = () => {
    if (name.trim() !== '') {
      addEmployee({ id: Date.now().toString(), name });
      setName('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Employee Manager</Text>
      <TextInput
        style={styles.input}
        placeholder="Employee Name"
        value={name}
        onChangeText={setName}
      />
      <Button title="Add Employee" onPress={handleAddEmployee} />
      <FlatList
        data={employees}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.employeeRow}>
            <Text>{item.name}</Text>
            <Button title="Archive" onPress={() => archiveEmployee(item.id)} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, marginBottom: 12 },
  input: { borderWidth: 1, padding: 8, marginBottom: 12 },
  employeeRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
});
