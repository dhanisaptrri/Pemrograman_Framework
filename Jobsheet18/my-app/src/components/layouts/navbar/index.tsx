import Script from "next/dist/client/script";
import styles from "./navbar.module.css";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

const Navbar = () => {
  const { data }: any = useSession();
  // const { data: session } = useSession()
  // console.log("session", session)

  return (
    <div className={styles.navbar}>
      {/* <div className={styles.navbar__brand}>MyApp</div> */}

      <div className={styles.navbar__brand} id="title"></div>

      <Script id="title-script" strategy="lazyOnload">
        {`document.getElementById("title").innerText = "MyApp"`}
      </Script>
      <div className={styles.navbar__right}>
        {data ? (
          <>
            <div className={styles.navbar__user}>
              Welcome, {data.user?.fullname}
              {data.user.image && (
                <div className={styles.navbar__user__imageContainer}>
                  <Image
                    src={data.user.image}
                    alt={data.user.fullname || "User Avatar"}
                    width={40} // 2. Tentukan lebar (pixel)
                    height={40} // 3. Tentukan tinggi (pixel)
                    className={styles.navbar__user__image}
                    referrerPolicy="no-referrer" // 4. Tambahkan ini agar gambar Google tidak diblokir
                  />
                </div>
              )}
            </div>
            <button
              className={`${styles.navbar__button} ${styles["navbar_button--danger"]}`}
              onClick={() => signOut()}
            >
              Sign Out
            </button>
          </>
        ) : (
          <button
            className={`${styles.navbar__button} ${styles["navbar_button--primary"]}`}
            onClick={() => signIn()}
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
