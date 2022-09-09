import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import {authService} from '../../services/authService'

import { RiLoginCircleFill } from "react-icons/ri";


const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '' 
    });

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {

        e.preventDefault();
        authService.login({email, password})
        .then(()=>{
            window.location.href = "http://localhost:3000/";
        })
        .catch(()=>{
            alert('Credenciais invalidas')
        });
    };


    return (
        <div className='container-login container mt-5'>
            <h1 className='text-light mb-5'>Login</h1>
            
            <form onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='email'
                        placeholder='Email'
                        name='email'
                        value={email}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div className='form-group mt-2'>
                    <input
                        className='form-control'
                        type='password'
                        placeholder='Password'
                        name='password'
                        value={password}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required
                    />
                </div>
                <button className='btn btn-primary mt-2' type='submit'><RiLoginCircleFill/> Login</button>
            </form>
            
            <p className='mt-3 mb-1 text-light'>
                Não tem cadastro ? <Link to='/signup'>Cadastre-se</Link>
            </p>
        </div>
    );
};


export default Login;