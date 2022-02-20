import './menu.css';
import {BsYoutube,BsInstagram} from 'react-icons/bs';
import LoginButton from '../LoginButton';
import {Link} from 'react-router-dom';
import {useAuth0} from '@auth0/auth0-react';
import LogoutButton from '../LogoutButton';



export default function Menu(){
    const {user} = useAuth0()
    return(
        <div className="menu">
            <a href="https://youtube.com" className="social">
                <BsYoutube color='#FFF' size={24}/>
            </a>
            <a href="https://www.instagram.com/cicerogabriel.js/" className="social">
                <BsInstagram color='#FFF' size={24}/>
            </a>
            {user && (
                <>
            <Link className='menu-item social' to='/links'>
                Meus links
            </Link>
            <LogoutButton/>
                </>
            )}
            {!user && (<LoginButton/>)}
            
        </div>
    )
}