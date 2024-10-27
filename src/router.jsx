import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import About from './Pages/AboutUs/About'

function RouterApp() {

    return (
        <Router>
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />}>Login</Route>
                <Route path="/Register" element={<Register />}>Register</Route>
                <Route path="/About" element={<About />}>About</Route>

            </Routes>
        </Router>
    )
}

export default RouterApp