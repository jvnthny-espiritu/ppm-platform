import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Forms } from './pages/Forms';
import { NotFoundPage } from './pages/NotFoundPage';
import SignInSide from './pages/sign-in-side/SignInSide';
import SignUp from './pages/sign-up/SignUp';
import { ProfileRoutes } from './components/Profile/ProfileRoutes';
import DashboardLayoutAccount from './components/DashboardLayoutAccount';

function App() {
  return (
    <main>
      <Routes>
        <Route path = '/' element = {<DashboardLayoutAccount/>} />
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
