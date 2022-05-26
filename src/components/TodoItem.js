const TodoItem = (props) => {
  const { title, content } = props;

  console.log("title", title);
  console.log("content", content);

  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default TodoItem;
