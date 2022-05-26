import { Routes ,Route } from 'react-router-dom';
import React, {Fragment} from 'react'
import Todo from './pages/Todo'

function App() {
  const items = [
    {
      title: "First entry",
      content: "Today was a good day"
    },
    {
      title: "Second entry",
      content: "Today was a great day"
    }
  ];

  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Todo items={items}/>} />
      </Routes>
  </Fragment>
  );
}

export default App;
