import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { deleteUserAsync } from '../redux/Actions/usersAction' 
import '../styles/profile.css'

export default function Profile({setIsLoggedIn}) {

  const dispatch = useDispatch();

  const auth = useSelector((state)=>state.auth);

  const [ editLocal, setEditLocal ] = useState({
    name: true,
    email: true
  });
  const [ dataUser, setDataUser ] = useState({
    name: 'auth.name',
    email: 'auth.email'
  })

  const handleChangeName = (e) => {
    const handle = e.target.value;
    setDataUser({...dataUser, name: handle})
  }

  const handleChangeEmail = (e) => {
    const handle = e.target.value;
    setDataUser({...dataUser, email: handle})
  }

  return (
    <div className='container-profile'>
      <form className='profile-user' >
        <div className='container-img-profile'>
          <span>
            <label htmlFor="img-user">
              <img src={'https://res.cloudinary.com/dxhgejzwc/image/upload/v1652161956/sprint-3-proyecto/asesor2_m7zf4e.png'} alt="imagen-profile"/>
            </label>
            <input type="file" id='img-user' name='profile-img' accept="image/png,image/jpeg"/>
          </span>
        </div>

        <div className='detail-profile'>
          <div>
            
            <input type="text" onChange={(e)=> handleChangeName(e)} className={!editLocal.name ? 'input-profile-inactive' : 'input-profile-active'} value={editLocal.name ? 'auth.name' : 'dataUser.name' } readOnly={editLocal.name && 'readOnly'}/>
            <button onClick={()=>setEditLocal({...editLocal, name: !editLocal.name})}>Editar</button>
          </div>
          <div>
            <input type="text" onChange={(e)=> handleChangeEmail(e)} className={!editLocal.email ? 'input-profile-inactive' : 'input-profile-active'} value={editLocal.email ? 'auth.email' : 'dataUser.email' } readOnly={editLocal.email && 'readOnly'}/>
            <button onClick={()=>setEditLocal({...editLocal, email: !editLocal.email})}>Editar</button>
            
          </div>
        </div>
        <div className='buttons-profile'>
          <button className='btn-delete' >Eliminar Cuenta</button>
          {/* onClick={()=>dispatch(deleteUserAsync(auth, setIsLoggedIn))} */}

          <button type='submit' className='btn-edit'>Confirmar Cambios</button>
        </div>
      </form>
    </div>
  )
}