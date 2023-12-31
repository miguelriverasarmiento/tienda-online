import React from 'react'
import { Link } from "react-router-dom";
import Portada from "../images/ini.jpg"
import { useAuth0 } from '@auth0/auth0-react'

export const Initiation = () => {

  const { user, isAuthenticated, isLoading } = useAuth0();
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();

  if (isLoading) {
    return <div className='min-h-screen mt-10 mx-5 sm:mx-12 md:mx-20 lg:mx-28 xl:mx-40 2xl:mx-44 text-yellow-800 
    sm:text-lg md:text-lg font-extralight'>Loading...</div>;
  }

  return (
    <div className='mx-5 sm:mx-12 md:mx-20 lg:mx-28 xl:mx-40 2xl:mx-44'>
      {isAuthenticated ? (
        <>
          <div className='grid grid-rows-1 gap-3 w-[200px] sm:w-[400px] mt-10'>
            <div className='flex flex-row gap-1'>
              <img src={user.picture} alt={user.name} className='w-[30px] rounded-full'/>
              <p className='w-[220px] text-sm font-light text-yellow-950 py-1'>{user.name}</p>
            </div>
            <div className='text-sm w-[135px] px-4 py-2 border-2 border-amber-200 bg-amber-300
            hover:bg-yellow-300 rounded-md'>
              <button onClick={() => logout({ returnTo: window.location.origin }, localStorage.removeItem("dataCar"))}>
                <h1>Cerrar sesion</h1>
              </button>
            </div>
          </div>
        </>
        ) : 
        <>      
          <div className='w-[200px] sm:w-[400px] sm:flex md:flex gap-3 mt-10'>
            <div className='text-sm px-4 py-2 border-2 border-amber-200 bg-amber-300 
            hover:bg-yellow-300 rounded-md'>
              <button onClick={() => loginWithRedirect()}>
                Iniciar sesion
              </button>
            </div>
            <div className='text-sm px-4 py-2 border-2 border-amber-200 bg-amber-300
            hover:bg-yellow-300 rounded-md'>
              <button onClick={() => loginWithRedirect()}>
                <h1>Registrarse</h1>
              </button>
            </div>
          </div>
        </>
        }
      <div className='grid grid-rows-1 gap-5'>
        <div className='mt-20 font-light text-sm md:text-base'>
          <p className='w-[100%]'>La música expresa lo que no puede ser dicho 
            y aquello sobre lo que es imposible permanecer en silencio.</p>
          <p>−Victor Hugo</p>
        </div>
        <div className="my-10">
          <img src={Portada} alt="inicio" className="w-[100%]"/>
        </div>
      </div>
    </div>
  )
}
