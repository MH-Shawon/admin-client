import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify"
import Navbar from './components/Shared/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/Home/About/About';
import Contact from './pages/Contact/Contact';
import Portfolio from './pages/Portfolio/Portfolio';
import RequireAuth from './components/Login/RequireAuth/RequireAuth';
import AdminPanel from './pages/AdminRole/AdminPanel';
import Users from './pages/AdminRole/Users';
import SignUp from './components/Login/Signup/Signup';
import All from './pages/Portfolio/All';
import Marketing from './pages/Portfolio/Marketing';
import Web from './pages/Portfolio/Web';
import Graphics from './pages/Portfolio/Graphics';
import Login from './components/Login/Login/Login';




function App ()
{


  return (
    <div className="px-14">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='home' element={<Home></Home>} />
        <Route path='about' element={<About></About>} />
        
        <Route path='contact' element={<Contact></Contact>} />
        <Route path='portfolio' element={<Portfolio></Portfolio>} />

        <Route path='adminpanel' element={
          <RequireAuth>
            <AdminPanel></AdminPanel>
          </RequireAuth>
        }>

          <Route index element={<Users></Users>} />
          
        </Route>

        <Route path='signup' element={<SignUp></SignUp>} />
        <Route path='all' element={<All></All>} />

        <Route path='marketing' element={<Marketing></Marketing>} />
        <Route path='web' element={<Web></Web>} />
        <Route path='graphics' element={<Graphics></Graphics>} />
        <Route path="login" element={<Login></Login>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
