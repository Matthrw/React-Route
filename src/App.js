import { Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './components/Form';
import Home from './components/Home';
import Navbar from './components/Navbar';
import User from './components/User';

function App() {
	return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/users' element={<User></User>}></Route>
      </Routes>
			<Form></Form>
		</>
	);
}

export default App;
