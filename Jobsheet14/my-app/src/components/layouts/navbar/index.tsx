import syles from './navbar.module.css';
import { signIn, signOut, useSession } from 'next-auth/react';
const Navbar = () => {
  return (
    <div className={syles.navbar}>
      <div className='big'>
        <h1>Navbar Component</h1>
      </div>
      <button onClick={() => signIn()}>Sign in</button>
    </div>
  );
};

export default Navbar;