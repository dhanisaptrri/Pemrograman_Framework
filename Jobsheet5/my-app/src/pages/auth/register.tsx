import Link from "next/link";
import styles from "./register.module.css";

const halamanRegister = () => {
  return (
    <div className={styles.register}>
      <h1>Halaman Register</h1>
      <Link href="/auth/login">Ke Halaman Login</Link>
    </div>
  );
};

export default halamanRegister;