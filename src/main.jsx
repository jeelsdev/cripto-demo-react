import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./main.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Notfound from './components/Notfount/Notfound.jsx'
import Cripto from './components/cripto/Cripto.jsx'
import Home from './components/home/Home.jsx'
import Criptopage from './components/cripto/Criptopage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />}>
                <Route index element={<Home />}/>
            </Route>
            <Route path='/cripto' element={<App/>}>
                <Route index element={<Cripto />}/>
                <Route path=':id' element={<Criptopage />}/>
            </Route>
            <Route path='*' element={<Notfound />}/>
        </Routes>
    </BrowserRouter>
)
