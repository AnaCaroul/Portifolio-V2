import Header from '../../componetes/Header/index.jsx'
import Footer from '../../componetes/Footer/index.jsx'
import Container from '../../componetes/Container/index.jsx'
import { Outlet } from 'react-router-dom'

function PageBase() {
    return (
        <main>
            <Header />
            <Container>
                <Outlet />
            </Container>
            <Footer />
        </main>
    )
}

export default PageBase