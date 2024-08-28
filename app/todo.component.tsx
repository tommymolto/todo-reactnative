import React from 'react';
import { View, Text, FlatList } from 'react-native';

const TodoItem = ({ text }) => {
  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
};

const TodoList = ({ todos }) => {
  return (
    <FlatList
      data={todos}
      renderItem={({ item }) => <TodoItem text={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

const ToDoComponent = () => {
  const todos = [
    { id: 1, text: 'Buy groceries' },
    { id: 2, text: 'Finish homework' },
    { id: 3, text: 'Meet with friends' },
  ];

  return (
    <View>
      <TodoList todos={todos} />
    </View>
  );
};

export default ToDoComponent;