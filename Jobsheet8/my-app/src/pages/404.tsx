import styles from "@/styles/404.module.scss";
import Head from "next/head";
import Link from "next/link";

const Custom404 = () => {
    return (
        <div className={styles.error}>
            <Head>
                <title>404 - Not Found</title>
            </Head>
            <h1>404 - Halaman Tidak Ditemukan</h1>
            <img src="/page-not-found.png" alt="404" className={styles.error__image} />
            <p>Maaf, halaman yang Anda cari tidak ditemukan atau belum tersedia.</p>
            <p>Silakan periksa URL Anda atau kunjungi halaman utama kami.</p>
            <Link href="/" className={styles.error__button}>
                Kembali ke Home
            </Link>
        </div>
    )
}

export default Custom404;