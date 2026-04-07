import styles from "@/styles/404.module.scss";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const Custom404 = () => {
    return (
        <div className={styles.error}>
            {/* <Head>
                <title>404 - Not Found</title>
            </Head> */}
            <Image
            src="/page-not-found.png"
            alt="404"
            width={400}
            height={300}
            className={styles.error__image}
            />
            <h1>404 - Halaman Tidak Ditemukan</h1>
            <p>Maaf, halaman yang Anda cari tidak ditemukan atau belum tersedia.</p>
            <p>Silakan periksa URL Anda atau kunjungi halaman utama kami.</p>
        </div>
    )
}

export default Custom404;