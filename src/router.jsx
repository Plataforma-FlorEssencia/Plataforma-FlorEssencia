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

import AlbumAutoConhecimento from './Pages/AlbumReflexao/AlbumAtuoConhecimento/AutoConhecimento'
import AlbumGestaoTempo from './Pages/AlbumReflexao/AlbumGestaoTempo/GestaoTempo'
import AlbumCarreira from './Pages/AlbumReflexao/AlbumCarreira/AlbymCarreira'
import AlbumInteligenciaEmocional from './Pages/AlbumReflexao/AlbumInteligenciaEmocional/AlbumInteligenciaEmocional'

import DiarioSuperacao from './Pages/Diarios/DiarioSuperacao/DiarioSuperacao'
import DiarioGratidao from './Pages/Diarios/DiarioGratidao/DiarioGratidao'


function RouterApp() {

    return (
        <Router>
            <Routes>
                
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />}>Login</Route>
                <Route path="/Register" element={<Register />}>Register</Route>
                <Route path="/About" element={<About />}>About</Route>
                <Route path="/ContactUs" element={<ContactUs />}>ContactUs</Route>
                <Route path="/Atividade" element={<Atividade />}>Atividade</Route>
                <Route path="/ShowCase" element={<ShowCase />}>ShowCase</Route>

                <Route path="/TesteAutoEstima01" element={<TesteAutoEstima01 />}>TesteAutoEstima01</Route>
                <Route path="/TesteAutoEstima02" element={<TesteAutoEstima02 />}>TesteAutoEstima02</Route>
                <Route path="/TesteAutoEstima03" element={<TesteAutoEstima03 />}>TesteAutoEstima03</Route>
                <Route path="/TesteAutoEstima04" element={<TesteAutoEstima04 />}>TesteAutoEstima04</Route>

                <Route path="/Profile" element={<Profile />}>Profile</Route>
                <Route path="/Leitura" element={<Leitura />}>Leitura </Route>
                <Route path="/Planos" element={<Planos />}>Planos </Route>
                <Route path="/Escrita" element={<Escrita />}>Escrita </Route>

                <Route path="/MemoryGame" element={<MemoryGame />}>MemoryGame </Route>
                <Route path="/MemoryGameTutorial" element={<MemoryGameTutorial />}>MemoryGame </Route>

                <Route path="/AlbumAutoConhecimento" element={<AlbumAutoConhecimento />} />
                <Route path="/AlbumGestaoDeTempo" element={<AlbumGestaoTempo />} />
                <Route path="/AlbumCarreira" element={<AlbumCarreira />} />
                <Route path="/AlbumInteligenciaEmocional" element={<AlbumInteligenciaEmocional />} />

                <Route path="/DiarioSuperacao" element={<DiarioSuperacao/>}/>
                <Route path="/DiarioGratidao" element={<DiarioGratidao/>}/>
            </Routes>
        </Router>
    )
}

export default RouterApp