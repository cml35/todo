import Button from '@mui/material/Button';

import TodoList from "../components/TodoList";

const Todo = (props) => {
  const { items } = props;
  return (
    <div>
      <h2>To Do List App</h2>
      <TodoList items={items}/>
      <Button variant="contained">Add entry</Button>
    </div>
  );
};

export default Todo;
