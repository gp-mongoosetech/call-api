
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './container/Home';
import List from './container/All-Data';
import Profile from './container/User-Profile';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={< Home />} />
        <Route exact path="/list" element={<List />} />
        <Route exact path="/list/:id" element={< Profile />} />
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        limit={3}
      />
    </BrowserRouter>
  )
}