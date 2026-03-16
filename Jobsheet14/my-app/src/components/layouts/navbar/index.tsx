import syles from './navbar.module.css';
import { signIn, signOut, useSession } from 'next-auth/react';
const Navbar = () => {
  const {data} = useSession()
  //const { data: session } = useSession(); 
  //console.log("session", session);
  return (
    <div className={syles.navbar}>
      <div className='big'>
        <h1>Navbar Component</h1>
      </div>
      {data ?(
      <button onClick={() => signIn()}>Sign in</button>
      ) : (
        <button onClick={() => signOut()}>Sign out</button>
      )}
    </div>
  );
};

export default Navbar;