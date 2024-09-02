import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, Button } from 'react-native';

interface Todo {
    id: number;
    text: string;
    //done: boolean;
}

const TodoItem: React.FC<{ todo: Todo }> = ({ todo }) => {
    return (
        <View>
            <Text>{todo.text}</Text>
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
        const newTodo = { id: todos.length + 1, text: newTodoText };
        setTodos([...todos, newTodo]);
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
                renderItem={({ item }) => <TodoItem todo={item} />}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

const ToDoComponent: React.FC = () => {
    return (
        <TodoList />
    );
};

export default ToDoComponent;