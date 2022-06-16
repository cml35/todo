import React, { useState } from "react";
import { gql } from "@apollo/client";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { useQuery, useMutation } from "@apollo/react-hooks";

import TodoList from "../components/TodoList";
import { getTodoItemsQuery } from "../queries/todo";
//import { NEW_TODO } from "../mutations/todo";

export const NEW_TODO = gql`
  mutation CreateToDo($input: TodoInput!) {
    createToDo(input: $input) {
      id
      title
      content
    }
  }
`;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000', 
  boxShadow: 24,
  p: 4,
};

const Todo = () => {
  const [modal, setModal] = useState(false);
  const { data } = useQuery(getTodoItemsQuery, { fetchPolicy: "cache-and-network" });
  const [createToDo, { data, loading, error }] = useMutation(NEW_TODO);

  if (!data) {
    return [];
  }
  const { todos } = data;

  const NewToDoItemModal = (props) => {
    const { onCancel, open } = props;

    const onSubmit = (event) => {
      event.preventDefault();

      console.log("title", event.target.title.value);
      console.log("content", event.target.content.value);

      setModal(false);

      createToDo({
        variables: {
          input: {
            id: "1",
            title: event.target.title.value,
            content: event.target.content.value,
          }
        }
      });
      event.target.reset();
    };

    return (
      <Modal
        open={open}
        onClose={onCancel}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create new entry
          </Typography>
          <form onSubmit={onSubmit}>
            <TextField id="title" name="title" label="Title" variant="outlined" />
            <TextField id="content" name="content" label="Content" variant="outlined" />
          <input type="submit" name=""submit value="Submit"/>
          </form>
        </Box>
      </Modal>
    );
  };

  if (modal) {
    console.log("modal", modal);
    return <NewToDoItemModal open={modal} onCancel={() => setModal(false)} />;
  }

  return (
    <div>
      <h2>To Do List App</h2>
      <TodoList items={todos}/>
      <Button variant="contained" onClick={() => setModal(true)}>Add items</Button>
    </div>
  );
};

export default Todo;
