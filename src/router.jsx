import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import About from './Pages/AboutUs/About'
import ContactUs from './Pages/ContactUs/ContactUs'
import Atividade from './Pages/Atividades/Atividade'
import ShowCase from './Pages/ShowCase/ShowCase'
import Leitura from './Pages/Leitura/Leitura'
import TesteAutoEstima01 from './Pages/TesteAutoEstima/TesteAutoEstima01'
import TesteAutoEstima02 from './Pages/TesteAutoEstima/TesteAutoEstima02'
import TesteAutoEstima03 from './Pages/TesteAutoEstima/TesteAutoEstima03'
import TesteAutoEstima04 from './Pages/TesteAutoEstima/TesteAutoEstima04'
import Profile from './Pages/Profile/Profile'
import Planos from './Pages/Planos/Planos'
import Escrita from './Pages/Escrita/Escrita'
import MemoryGame from './Pages/Jogos/MemoryGame/MemoryGame'
import MemoryGameTutorial from './Pages/Jogos/MemoryGame/MemoryGameTutorial'


function RouterApp() {

    return (
        <Router basename="/Plataforma-FlorEssencia">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/about" element={<About />} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="/atividade" element={<Atividade />} />
                <Route path="/showcase" element={<ShowCase />} />
                <Route path="/testeautoestima01" element={<TesteAutoEstima01 />} />
                <Route path="/testeautoestima02" element={<TesteAutoEstima02 />} />
                <Route path="/testeautoestima03" element={<TesteAutoEstima03 />} />
                <Route path="/testeautoestima04" element={<TesteAutoEstima04 />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/leitura" element={<Leitura />} />
                <Route path="/planos" element={<Planos />} />
                <Route path="/escrita" element={<Escrita />} />
                <Route path="/memorygame" element={<MemoryGame />} />
                <Route path="/memorygametutorial" element={<MemoryGameTutorial />} />
            </Routes>
        </Router>
    )
}

export default RouterApp