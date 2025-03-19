import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors'
import css from './Navigation.module.css'
import { logoutThunk } from '../../redux/auth/operations'

const UserMenu = () => {

  const dispatch = useDispatch();

  const user = useSelector(selectUser)

  return (
    <div className={css.userMenu}>
        {user && user.name && <> <h3>{user.name}</h3> </>}
            <button className={css.logoutBtn} onClick={() => dispatch(logoutThunk())}>Logout</button>
    </div>
  )
}

export default UserMenu