import "./menu.css";
import React, { useState } from 'react';
import { BsYoutube, BsInstagram } from "react-icons/bs";
import {Link,Navigate} from 'react-router-dom';
import { tokenService } from "../../services/tokenService";

const Menu = () => {
  
  const [token, setToken] =useState(tokenService.get())
    const logout_user = () => {
        setToken('')
        tokenService.save(token)
    };

    const guestLinks = () => (
        <>
          <Link className='menu-item'  to='/login'>Login</Link>
          <Link className='menu-item' to='/signup'>Cadastre-se</Link>
        </>
    );

    const authLinks = () => (
      <>
       <Link className="menu-item" to="/links">
            Meus Links
        </Link>
        <div className='menu-item'>
            <a className='nav-link' href='#!' onClick={logout_user}>Logout</a>
        </div>
      </>
        
    );
  return (
    <>
    <div className="menu">
      <a href="https://youtube.com" className="social">
        <BsYoutube color="#FFF" size={24} />
      </a>
      <a href="https://www.instagram.com/cicerogabriel.js/" className="social">
        <BsInstagram color="#FFF" size={24} />
      </a>
      {token !== '' ? authLinks() : guestLinks()}
       
    </div>
    </>
    
  );
}

export default Menu;