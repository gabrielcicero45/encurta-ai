import {FiLink} from 'react-icons/fi'
import  './home.css'

import Menu from '../../components/Menu'
import LinkItem from '../../components/LinkItem'

import {useState} from 'react'

import api from '../../services/api'


import {useAuth0} from '@auth0/auth0-react';
import { ref, set,push } from "firebase/database";
import { database } from '../../services/firebase'

export default function Home(){
    const {user} = useAuth0()
    const db = database;
    const [link, setLink] = useState('');
    const [showModal,setShowModal] = useState(false);
    const [data,setData] = useState({})
    
    async function handleEncurtador(){
      try{
        const response = await api.post('/shorten',{
          long_url: link
        })
        response.data['user'] = user.sub
        setData(response.data)
        setLink('')
        setShowModal(true)
        const dbRef = ref(db, 'links-encurtados/')
        const linksAtuais =  push(dbRef)
        set(linksAtuais, data)
      }
      catch{
        alert("Algo deu errado ! Por favor, verifique se digitou sua URL corretamente")
        setLink('')
      }
    }
    return(
      <div className="container-home">
        <Menu/>
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
  