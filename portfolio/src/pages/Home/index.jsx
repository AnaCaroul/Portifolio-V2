
import Img from '../../assets/undraw_Programmer_re_owql.png'
import { Link } from 'react-router-dom'
import stylesH from './Home.module.css'

function Home() {
    return (
       <>
           <section className={stylesH.home}>
                <div className={stylesH.apresentacao}>
                    <p>Olá, sou <br/>
                        <span>Ana Carolina</span> <br/>
                        Dev Front end
                    </p>
                    <Link to="/sobre" className={`${stylesH.btn} ${stylesH.btn_red}`}>
                        Saiba mais sobre mim
                    </Link>
                </div>
                <figure>
                    <img className={stylesH.img_home} src={Img} alt="Imagem de Home" />
                </figure>
            </section> 
        </> 
    )
}

export default Home
