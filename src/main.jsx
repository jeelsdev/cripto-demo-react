import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./main.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Notfound from './components/Notfount/Notfound.jsx'
import Cripto from './components/cripto/Cripto.jsx'
import Home from './components/home/Home.jsx'
import Criptopage from './components/cripto/Criptopage.jsx'
import { UserContextProvider } from './context/UserContext.jsx'
import Profile from './components/users/profile/Profile.jsx'
import Login from './components/users/login/Login.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <UserContextProvider>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route index element={<Home />}/>
                    <Route path='profile' element={<Profile />}></Route>
                </Route>
                <Route path='/cripto' element={<App/>}>
                    <Route index element={<Cripto />}/>
                    <Route path=':id' element={<Criptopage />}/>
                </Route>
            <Route path='/login' element={<Login />}>
            </Route>
                <Route path='*' element={<Notfound />}/>
            </Routes>
        </BrowserRouter>
    </UserContextProvider>
)
