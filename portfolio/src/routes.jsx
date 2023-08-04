import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/index.jsx'
import Sobre from './pages/Sobre/index.jsx'
import Projetos from './pages/Projetos/index.jsx'
import Contato from './pages/Contato/index.jsx'
import Page404 from './pages/Page404/index.jsx'
import PageBase from './pages/PageBase/index.jsx'


function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <PageBase /> }>
                    <Route index element={ <Home /> }></Route>
                    <Route path="/sobre" element={ <Sobre /> }></Route>
                    <Route path="/projetos" element={ <Projetos /> }></Route>
                    <Route path="/contatos" element={ <Contato /> }></Route>
                    <Route path="*" element={ <Page404 /> }></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes