import React from 'react';
import { View, Text, FlatList } from 'react-native';

interface Todo {
  id: number;
  text: string;
}

const TodoItem: React.FC<{ text: string }> = ({ text }) => {
  return (
      <View>
        <Text>{text}</Text>
      </View>
  );
};

interface TodoListProps {
  todos: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
      <FlatList
          data={todos}
          renderItem={({ item }) => <TodoItem text={item.text} />}
          keyExtractor={(item) => item.id.toString()} // Ensure key is a string
      />
  );
};

const ToDoComponent: React.FC = () => {
  const todos: Todo[] = [
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