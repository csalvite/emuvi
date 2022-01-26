import { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { TokenContext } from '../..';

const { REACT_APP_LOCALHOST } = process.env;

function Login() {
  const [error, setError] = useState();

  // recuperamos del contexto: token y setToken
  const [token, setToken] = useContext(TokenContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    const user = {
      email: e.target.elements.email.value,
      password: e.target.elements.passwd.value,
    };

    try {
      const response = await fetch(`${REACT_APP_LOCALHOST}/users/login`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const userLogin = await response.json();
        console.log('Usuario logueado');
        setToken(userLogin.authToken);
        setError(false);
        console.log(userLogin);
      } else {
        console.error('Error en el login');
        setError(true);
      }
    } catch (error) {
      console.error('Error en el login');
      setError(true);
    }
  };

  // Si existe el token significa que se ha logeado, por lo que redirigimos a la página principal
  if (token) {
    return <Navigate to='/' />;
  }

  return (
    <div className='register-form'>
      <h1>Login EMUVI</h1>

      <form onSubmit={handleLogin}>
        <ul>
          <li>
            <label htmlFor='email'>Email: </label>
            <input type='text' name='email' id='email' required />
          </li>
          <li>
            <label htmlFor='passwd'>Password: </label>
            <input type='password' name='passwd' id='passwd' required />
          </li>
          <li>
            <button className='btn'>Iniciar Sesión</button>
          </li>
          <li>
            <p>
              No tienes cuenta? <Link to='/register'>Regístrate</Link>
            </p>
          </li>
        </ul>
      </form>
      {error ? (
        <div>Error en el login ACORDARSE DE DARLE UNA CLASE A ESTO :d</div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export { Login };
