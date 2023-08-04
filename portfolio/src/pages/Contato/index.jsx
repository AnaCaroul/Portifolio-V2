import { BsGithub, BsInstagram, BsLinkedin, BsWhatsapp } from 'react-icons/bs'
import { GoMail } from 'react-icons/go'
import stylesC from './Contatos.module.css'

function Contato() {
    return (
        <>
                <section className={stylesC.contatos}>
                    <h2>Contatos</h2>

                    <h3>Entre em contato</h3>
                    <p>Para que possamos conversar mais sobre</p>

                    <div className={stylesC.icones}>
                        
                        <a href='mailto:anacarolinaalvesramos03@gmail.com' target='_blank' rel='noopener noreferrer'>
                            <GoMail className={stylesC.icone} />
                        </a>

                        <a href='https://www.instagram.com/anacarolina.alr/' target='_blank' rel='noopener noreferrer'>
                            <BsInstagram className={stylesC.icone} />
                        </a>

                        <a href='https://api.whatsapp.com/send?phone=31971289301' target='_blank' rel='noopener noreferrer'>
                            <BsWhatsapp className={stylesC.icone} />
                        </a>

                        <a href='https://github.com/AnaCaroul' target='_blank' rel='noopener noreferrer'>
                            <BsGithub className={stylesC.icone} />
                        </a>

                        <a href='https://www.linkedin.com/in/ana-carolina-alves-ramos-1181911a6/' target='_blank' rel='noopener noreferrer'>
                            <BsLinkedin className={stylesC.icone} />
                        </a>

                    </div>

                </section>

        </>
    )
}

export default Contato