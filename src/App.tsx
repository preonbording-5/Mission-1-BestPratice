import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import Todo from './pages/Todo'
import Signup from './components/register/Signup'
import Signin from './components/register/Signin'

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Signup />
              <Signin />
            </>
          }
        ></Route>
        {/* <Route path='/todo' element={<Todo />}></Route> */}
      </Routes>
    </Router>
  )
}

export default App
