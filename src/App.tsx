import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/register/Signup';
import Signin from './components/register/Signin';
import Todo from './pages/Todo';
import Register from './pages/Register';
import Page from './components/layout/Page';

function App() {
  return (
    <Page>
      <Router>
        <Routes>
          <Route path='/' element={<Register />}></Route>
          <Route path='/todo' element={<Todo />}></Route>
        </Routes>
      </Router>
    </Page>
  );
}

export default App;
