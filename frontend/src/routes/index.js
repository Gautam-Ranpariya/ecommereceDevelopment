import React  from 'react';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Login from '../auth/login';
import SignUp from '../auth/signup';
import VerificationCode from '../auth/verificationCode';
import ForgotPassword from '../auth/forgotPassword';
import ResetPassword from '../auth/resetPassword';
import Home from '../app/home';
import Error from '../app/error';


export default function RouterComponents() {
  return (
    <div>
        <Router>
            <div>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<SignUp />} />
                    <Route path ='/verificationCode' element={<VerificationCode />} />
                    <Route path='/forgotPassword' element={<ForgotPassword />} />
                    <Route path='/resetPassword' element={<ResetPassword />} />
                    <Route path='/error' element={<Error />} />
                </Routes>
            </div> 
        </Router>
    </div>
  )
}
