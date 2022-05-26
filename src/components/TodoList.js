import * as R from "ramda";

import TodoItem from "./TodoItem";

const TodoList = (props) => {

  const renderTodoItems = (items) => {
    const renderTodoItem = (item) => {
      const { title, content } = item;
      return <TodoItem title={title} content={content} />
    };

    return R.map((item) => renderTodoItem(item), items);
  };

  const { items } = props;
  return (
    <div>
      {renderTodoItems(items)}
    </div>
  );
};

export default TodoList;
