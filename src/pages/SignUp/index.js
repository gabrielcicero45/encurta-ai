import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { authService } from '../../services/authService';

const Signup = () => {
    const [accountCreated, setAccountCreated] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        re_password: ''
    });

    const { username, email, password, re_password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        if (password === re_password) {

           authService.signup({username, email, password})
           .then(()=>{
            setAccountCreated(true)
           })
           .catch(()=>{
            setAccountCreated(false)
            alert('Nao foi possivel realizar o cadastro')
        });;
        }
    };


    if (accountCreated) {
        alert('Conta criada com sucesso')
        return <Navigate to='/login' />
    }

    return (
        <div className='container container-signup mt-5'>
            <h1 className="text-light mb-3">Cadastro</h1>
            <form onSubmit={e => onSubmit(e)}>
            <div className='form-group mt-2'>
                    <input
                        className='form-control'
                        type='text'
                        placeholder='Nome*'
                        name='username'
                        value={username}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div className='form-group mt-2'>
                    <input
                        className='form-control'
                        type='email'
                        placeholder='Email*'
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
                        placeholder='Senha*'
                        name='password'
                        value={password}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required
                    />
                </div>
                <div className='form-group mt-2'>
                    <input
                        className='form-control'
                        type='password'
                        placeholder='Confirmar Senha*'
                        name='re_password'
                        value={re_password}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required
                    />
                </div>
                <button className='btn btn-primary mt-2' type='submit'>Cadastre-se</button>
            </form>
            <p className='mt-3 text-light'>
               Já tem uma conta ? <Link to='/login'>Login</Link>
            </p>
        </div>
    );
};


export default Signup;