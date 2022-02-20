import {FiArrowLeft,FiLink,FiTrash} from 'react-icons/fi';
import "./links.css"
import {Link} from 'react-router-dom';

import {useState,useEffect} from 'react';
import {useAuth0} from '@auth0/auth0-react';
import {ref, onValue,off, remove, set }from 'firebase/database';
import {database} from '../../services/firebase';
import LinkItem from '../../components/LinkItem';


export default function Links(){

    const [myLinks, setMyLinks] = useState([])
    const [data, setData] = useState({})
    const [showModal, setShowModal] = useState(false)
    const [emptyList, setEmptyList] = useState(false)
    const {user} = useAuth0()

    useEffect(()=>{
      const dbRef = ref(database,'links-encurtados/')
      onValue(dbRef,(snapshot)=>{
      const childData = snapshot.val();
      const lista = []
      for(let id in childData){
        lista.push(childData[id])
      }
      if(lista.length > 0){
        setMyLinks(lista)
      }
      else{
        setEmptyList(true)
      }
      
      }) 
    }
      ,[])

    function handleOpenLink(link){
      setData(link)
      setShowModal(true)
    }
   async function handleDeleteLink(linkId){
      const dbRef = ref(database,'links-encurtados/')
      onValue(dbRef,(snapshot)=>{
        
        const childData = snapshot.val();
        const lista = []
        for(let id in childData){
          if(childData[id].id !== linkId){
            lista.push(childData[id])
          } 
        }
        if(lista.length > 0){
          setMyLinks(lista)
        }
        else{
          setEmptyList(true)
        }
        
        }) 
      
    }
    return(
      
      <div className="links-container">
      
        <div className="links-header">
          <Link to="/">
          <FiArrowLeft size={38} color='#FFF'/>
          </Link>
          
          <h1>Meus Links</h1>
        </div>

      {emptyList && (
        <div className="links-item">
          <h2 className="empty-text"> Sua lista esta vazia ...</h2>
        </div> )}
 
      {myLinks.map(link=>(
            link.user === user.sub &&( <div key={link.id} className="links-item">
            <button onClick={() =>{handleOpenLink(link.id)}} className="link">
              <FiLink size={18} color='#FFF'/>
              {link.long_url}
            </button>
            <button className='link-delete' onClick={() =>{handleDeleteLink(link.id)}}>
              <FiTrash  size={24} color='#FF5454'/>
            </button>
          </div>) 
      ))
    }
      {showModal && (<LinkItem closeModal={() => setShowModal(false)} content={data}/>)}
      </div>
    )
  }
  