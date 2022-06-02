import { Routes ,Route } from 'react-router-dom';
import React, {Fragment} from 'react'
import Todo from './pages/Todo'

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Todo />} />
      </Routes>
  </Fragment>
  );
}

export default App;
