import './notfound.css'
import {Link} from 'react-router-dom';
export default function Error(){
    return(
        <div className="container-error">
        
          <img src="/notfound.png" alt="Pagina nao encontrada" />
          <h1>Pagina nao encontrada</h1>
          <Link to='/'>
              Voltar para a home
          </Link>
   
      </div>
    )
}