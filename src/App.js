import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import RequireAuth from './Pages/Login/RequireAuth';
import Header from './Pages/Shared/Header/Header';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import ForgotPassword from './Pages/Login/ForgotPassword';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointments from './Pages/Dashboard/MyAppointments';
import MyReviews from './Pages/Dashboard/MyReviews';
import Users from './Pages/Dashboard/Users';

function App() {
  return (
    <div>
      <Header>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/appointment' element=
            {
              <RequireAuth>
                <Appointment />
              </RequireAuth>
            }>
          </Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='register' element={<Register />}></Route>
          <Route path='forgotpassword' element={<ForgotPassword />}></Route>

          <Route path='dashboard' element={
            <RequireAuth><Dashboard /></RequireAuth>}>

            <Route index element={<MyAppointments />}></Route>
            <Route path='myreviews' element={<MyReviews />}></Route>
            <Route path='users' element={<Users />}></Route>
          </Route>

        </Routes>
      </Header>


      <ToastContainer />
    </div>
  );
}

export default App;
