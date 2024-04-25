import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/scss/main.scss'; 
// import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import RouterComponents from './routes';
import Loader from './shared/common/loader';

function App() {

  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setShowLoader(false);
  }, [])

  return (
    showLoader ? <Loader /> : <div className="App">
      <RouterComponents />
      <ToastContainer 
        theme='dark' 
        stacked 
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
       />
    </div>
  );
}

export default App;
