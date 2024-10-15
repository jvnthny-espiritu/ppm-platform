import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Forms } from './pages/Forms';
import { NotFoundPage } from './pages/NotFoundPage';
import SignInSide from './pages/sign-in-side/SignInSide';
import SignUp from './pages/sign-up/SignUp';
import PerformerRegister from './components/PerformerUI/PerformerRegister';
import { ProfileRoutes } from './components/PerformerUI/ProfileRoutes';
import DashboardLayoutAccount from './components/DashboardUI/DashboardLayoutAccount';

function App() {
  return (
    <main>
      <Routes>
        <Route path = '/' element = {<SignInSide/>} />
        <Route path = '/sign-in' element = {<SignInSide/>} />
        <Route path = '/admin' element = {<DashboardLayoutAccount/>} />
        <Route path = '/profile/*' element={<ProfileRoutes/>} />
        <Route path = '/forms' element = {<Forms/>} />
        <Route path = '/sign-up' element = {<SignUp/>} />
        <Route path = '/performer/register' element = {<PerformerRegister/>} />
        <Route path = '*' element = {<NotFoundPage/>} />
      </Routes>
    </main>
  );
};

export default App
