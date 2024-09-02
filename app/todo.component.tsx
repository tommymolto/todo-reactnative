import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, Button, StyleSheet } from 'react-native';
import { CheckBox } from '@rneui/themed';

interface Todo {
    id: number;
    text: string;
    done: boolean;
}

const TodoItem: React.FC<{ todo: Todo; onToggle: (id: number) => void }> = ({ todo, onToggle }) => {
    return (
        <View style={styles.todoItem}>
            <CheckBox
                checked={todo.done} // Use todo.done directly
                onPress={() => onToggle(todo.id)} // Corrected to use onToggle
            />
            <Text style={todo.done ? styles.doneText : styles.text}>{todo.text}</Text>
        </View>
    );
};

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTodoText, setNewTodoText] = useState<string>('');

    useEffect(() => {
        // Optional: Fetch initial todos from an API or local storage here
    }, []);

    const handleAddTodo = (newTodoText: string) => {
        const newTodo = { id: todos.length + 1, text: newTodoText, done: false };
        setTodos([...todos, newTodo]);
    };

    const handleToggleTodo = (id: number) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, done: !todo.done } : todo
        ));
    };

    return (
        <View>
            <TextInput
                placeholder="Enter new todo"
                value={newTodoText}
                onChangeText={setNewTodoText}
            />
            <Button
                title="Add Todo"
                onPress={() => handleAddTodo(newTodoText)}
            />
            <FlatList
                data={todos}
                renderItem={({ item }) => <TodoItem todo={item} onToggle={handleToggleTodo} />}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    todoItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        textDecorationLine: 'none',
    },
    doneText: {
        textDecorationLine: 'line-through',
    },
});

const ToDoComponent: React.FC = () => {
    return (
        <TodoList />
    );
};

export default ToDoComponent;