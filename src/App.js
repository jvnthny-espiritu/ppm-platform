import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Forms } from './pages/Forms';
import { NotFoundPage } from './pages/NotFoundPage';
import SignInSide from './pages/sign-in-side/SignInSide';
import SignUp from './pages/sign-up/SignUp';
import { ProfileRoutes } from './components/ProfileRoutes';

function App() {
  return (
    <main>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/profile'>Profile</Link>
          </li>
          <li>
            <Link to='/forms'>Forms</Link>
          </li>
          <li>
            <Link to='/sign-in'>Sign In</Link>
          </li>
          <li>
            <Link to='/sign-up'>Sign Up</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path = '/' element = {<Home/>} />
        <Route path = '/profile/*' element={<ProfileRoutes/>} />
        <Route path = '/forms' element = {<Forms/>} />
        <Route path = '/sign-in' element = {<SignInSide/>} />
        <Route path = '/sign-up' element = {<SignUp/>} />
        <Route path = '*' element = {<NotFoundPage/>} />
      </Routes>
    </main>
  );
};

export default App
