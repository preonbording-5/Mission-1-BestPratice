import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Todo from './pages/Todo';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Register />
            </>
          }
        ></Route>
        <Route path='/todo' element={<Todo />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
