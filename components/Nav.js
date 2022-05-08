import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'
import Image from 'next/image'
import style from '../styles/Toast.module.css'
const Nav = () => {
  return (<>
    <nav className={navStyles.nav}>
      <ul> 
        <li className={navStyles.img}>
          <Link  href='/login'><a><Image className={navStyles.image} src="/admin3.png" width="55px" height="55x"/></a></Link>
        </li>
        <li>
          <Link href='/everyOne'>EveryOne</Link>
        </li>
        {/* <li>
          <Link href='/friends'>Friends</Link>
        </li> */}
        <li>
          <Link href='/profile'>MyProfile</Link>
        </li>
       
         {/*<li>
          <Link href='/login'>Login</Link>
        </li>
        <li>
          <Link href='/register'>Register</Link>
        </li> */}
      </ul>
    </nav>
    <div id={style.snackbar}></div>

    </>
  )
}

export default Nav
