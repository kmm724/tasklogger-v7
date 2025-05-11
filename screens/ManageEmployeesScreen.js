// screens/ManageEmployeesScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';
import { useAppContext } from '../context/AppContext';

export default function ManageEmployeesScreen() {
  const { employees, addEmployee, removeEmployee } = useAppContext();
  const [name, setName] = useState('');

  const handleAdd = () => {
    if (name.trim() !== '') {
      addEmployee({ id: Date.now().toString(), name });
      setName('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Employee name"
        value={name}
        onChangeText={setName}
      />
      <Button title="Add Employee" onPress={handleAdd} />
      <FlatList
        data={employees}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.employeeItem}>
            <Text>{item.name}</Text>
            <Button title="Remove" onPress={() => removeEmployee(item.id)} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
  employeeItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 },
});
