import '../styles/Footer.css'
import {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';

//Fácil de usar e amplamente conhecida, essa biblioteca simplifica o processo de verificação e validação dos formulários
import 'react-toastify/dist/ReactToastify.css';


function Footer() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("") 
    const handleSubmit = (e) => {
        e.preventDefault()
        e.stopPropagation()

        if (name.length < 2) {
           return toast.error("Seu nome precisa ter mais de dois caractéres") 
        }
        
        setName('')
        setEmail('')
        return toast.success("Seu cadastro foi efetuado com sucesso!")
    }
    //Método nativo de verificação e validação dos formulários
    return (
        <div className="footer">
             <ToastContainer />
            <div className="footer__Text">
                <h2>ASSINE NOSSA NEWSLETTER</h2>
                <span>Fique por dentro das nossas novidades e receba 10% de desconto na sua próxima compra.</span>
            </div>
                <p>*válido apenas para jóias e não acumulativo com outras promoções</p>
            <div className="footer__Inputs">
                <form onSubmit={handleSubmit}>
                    <input required value={name} onChange={e => setName(e.target.value)} className="input__Name" placeholder="Name"/>
                    <input required type="email" value={email} onChange={e => setEmail(e.target.value)} className="input__Email" placeholder="E-mail"/>
                    <button type='submit' className="enviar">ENVIAR</button>
                </form>            
            </div>
        </div>
    )
}

export default Footer
