import {useState} from 'react';
import {FiLink} from 'react-icons/fi';
import './home.css';
import Menu from '../../components/Menu';
import LinkItem from '../../components/LinkItem';

import api from '../../services/api';
import { saveLink } from '../../services/storeLink'
import Hashids from 'hashids'
import { linkService } from '../../services/linkService';
import { tokenService } from '../../services/tokenService';

export default function Home(){
    const hashids = new Hashids('', 7)
    
    const [link, setLink]=useState('');
    const [showModal, setShowModal] =useState(false);
    const [data, setData] = useState({});
   async function handleEncurtador(){
        try{
            const id = hashids.encode(Math.floor(Math.random()*60000))
            const shortenLink = `http://localhost:3000/${id}`
            const response = {id:id, long_url:link, link:shortenLink, user: tokenService.get()};
            setData(response);
            setShowModal(true);
            linkService.saveLink(data)
            saveLink('@seuLink', response)
            setLink('');

            /*usando API bit.ly
            const response = await api.post('/shorten',{long_url: link})
            setData(response.data);
            setShowModal(true);
            
            saveLink('@seuLink', response.data)
            setLink('');*/
        }catch{
            alert("Ops parece que algo deu errado!");
            setLink('');
        }
    }
    return(
      <div className="container-home">
        <div className="logo">
          <img src="/logo.png" alt="Sujeito Link Logo" />
          <h1>Encurta Ai</h1>
          <span>Cole seu link para encurtar 👇 </span>
        </div>
        <div className="area-input">
          <div>
          <FiLink size={24} color='#FFF'/>
          <input placeholder='Cole seu link aqui ...' 
            value={link}
            onChange={(e)=> setLink(e.target.value)}
          />
          </div>
          <button onClick={handleEncurtador}>Encurtar Link</button>
        </div>
        { showModal && (<LinkItem 
        closeModal={()=>{setShowModal(false)}}
        content={data}
        />)}
        
      </div>
    )
}