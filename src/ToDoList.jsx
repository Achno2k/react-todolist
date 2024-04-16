import List from '@mui/material/List';
import ToDoItem from './ToDoItem';
import ToDoForm from './ToDoForm';
import { useState } from 'react';
import { useEffect } from 'react';
import { Box, Typography } from "@mui/material";

const getInitialData = () => {
  try {
    const data = JSON.parse(localStorage.getItem("todos"));
    return data || [];
  } catch (error) {
    console.error('Error parsing JSON:', error);
    return [];
  }
};


export default function ToDoList() {
  const [todos, setTodos] = useState(getInitialData());

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  const removeTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    })
  }

  const toggleTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      })
    })
  }

  const addTodo = (text) => {
    setTodos((prevTodos) => {
      return [...prevTodos, { text: text, id: crypto.randomUUID(), completed: false }];
    })
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        m: 3,
      }}
    >
      <Typography variant="h2" component="h1" sx={{ flexGrow: 1 }}>
        Todos
      </Typography>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {todos.map((todo) =>
          <ToDoItem
            todo={todo}
            key={todo.id}
            removeToDo={() => removeTodo(todo.id)}
            toggleToDo={() => toggleTodo(todo.id)}
          />
        )}
        <ToDoForm addTodo={addTodo} />
      </List>
    </Box>
  );
}
