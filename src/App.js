import './App.css';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { FaEye } from "react-icons/fa";


function App() {
  return (
    <div className="container">

      <header>

        <MdOutlineKeyboardArrowLeft  className='icon'/>

        <h2>Alterar Senha</h2>

      </header>

      <div className='mesage'>

        <spam>
          <p>
            Um código de verificação foi enviado ao seu email.
            Por favor, insira-o no campo abaixo
          </p>
        </spam>

<div className="mesage-input">
<input className='code' disabled placeholder='AH293HN'></input>

<button className='send'>

  <IoMdSend />

</button>
</div>

        </div>

        <p className='text'>
          Sua senha precisa ter pelo menos seis caracteres e
          incluir uma combinação de números, letras e caracteres especiais
          !@#$
        </p>

        <div className='passwords'>
          <input className='pass' type="password"></input>
          <input className='pass1' type="password">
          </input>
          <FaEye className='eye'/>

          <button>
            <p>Confirmar</p>
          </button>
        </div>


    </div>
  );
}

export default App;
