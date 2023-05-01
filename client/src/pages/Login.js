import React, { useState } from 'react'

export const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(e){
        e.preventDefault();
        localStorage.setItem('user-pass', username+password);
        window.location.href = "/";
    }

  return (
    <div>
        <form onSubmit={handleSubmit} className='form'>
            <input type='text' name='username' placeholder='username' value={username} onChange={e => setUsername(e.target.value)}/>
            <input type='text' name='password' placeholder='password' value={password} onChange={e => setPassword(e.target.value)}/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
