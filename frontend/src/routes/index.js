import React, { lazy } from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
const Home = lazy(() => import('../app/home'));
const Login = lazy(() => import('../auth/login'));
const SignUp = lazy(() => import('../auth/signup'));
const VerificationCode = lazy(() => import('../auth/verificationCode'));
const ResetPassword = lazy(() => import('../auth/resetPassword'));
const ForgotPassword = lazy(() => import('../auth/forgotPassword'));


export default function RouterComponents() {
  return (
    <div>
        <Router>
            <div>
                <Routes>
                    <Route path='/home' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/verificationCode' element={<VerificationCode />} />
                    <Route path='/resetPassword' element={<ResetPassword />} />
                    <Route path='/forgotPassword' element={<ForgotPassword />} />
                </Routes>
            </div> 
        </Router>
    </div>
  )
}
