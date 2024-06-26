import ListItem from '@mui/material/ListItem'
import TextField from '@mui/material/TextField'
import Create from '@mui/icons-material/Create'
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';

export default function ToDoForm({ addTodo }) {
    const [text, setText] = useState("");
    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(text);
        setText("");
    }

    return (
        <ListItem>
            <form onSubmit={handleSubmit}>
                <TextField
                sx={{ml: 5}}
                    id="outlined-basic"
                    label="New Todo"
                    variant="outlined"
                    value={text}
                    onChange={handleChange}
                    InputProps={{
                        endAdornment: (
                            < InputAdornment position="end" >
                                <IconButton
                                    aria-label="Create todo"
                                    edge="end"
                                    type='submit'
                                >
                                    <Create />
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
            </form>
        </ListItem >
    );
}
