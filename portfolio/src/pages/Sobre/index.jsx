import styles from './Sobre.module.css'
import avatar from '../../assets/avatar.jpeg'
import html from './images/icons8-html-96.png'
import css from './images/icons8-css-96.png'
import js from './images/icons8-javascript-96.png'
import react from './images/icons8-nativo-de-reagir-96.png'
import ts from './images/icons8-typescript-96.png'
import kotlin from './images/icons8-kotlin-100.png'
import Swift from './images/icons8-swift-96.png'
import Php from './images/icons8-php-96.png'
import Mysql from './images/icons8-mysql-100.png'


function Sobre() {
    return (
        <section className={styles.sobre}>
            
        <div className={styles.bio}>
            <img src={avatar} alt="Avatar" className={styles.avatar} />
            <div className={styles.textos}>
                <h2>Sobre</h2>

                <p>Sou <span>Ana Carolina</span> <br />
                <strong>Dev Front-end Junior</strong> </p>

                <p>Estudo no Colégio Cotemig, estou no 3 ano do ensino médio técnico em Desenvolvimento Web e Mobile.</p>

                <p>Sou uma pessoa muito dedicada e esforçada sempre em busca de aprimorar meus conhecimentos e aprender cada vez mais.</p>

                <p>Além de programação gosto muito de automobilismo, especialmente por Fórmula 1.</p>
            </div>
        </div>

        <div className={styles.techs}>
            <h3>Techs</h3>
            <div className={styles.icones}>
                <img src={html} alt="Ícone do html" />
                <img src={css} alt="Ícone do css" />
                <img src={js} alt="Ícone do js" />
                <img src={react} alt="Ícone do react" />
                <img src={ts} alt="Ícone do ts" />
                <img src={kotlin} alt="Ícone do Kotlin" />
                <img src={Swift} alt="Ícone do Swift" />
                <img src={Php} alt="Ícone do php" />
                <img src={Mysql} alt="Ícone do mysql" />
            </div>
        </div>

    </section>
    )
}

export default Sobre
