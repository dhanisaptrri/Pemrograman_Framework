import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1>Praktikum Next.js Pages Router</h1>
      <br />
      <p>Mahasiswa D4 Pengembangan Web</p>

      <Link href="/about">
        <button style={{ marginTop: "10px" }}>
          Ke Halaman About
        </button>
      </Link>

      <h2>Pertanyaan Refleksi</h2>
      <br />

      <ol>
        <li>
          <strong>
            Mengapa Pages Router disebut sebagai routing berbasis file?
          </strong>
          <p>
            Karena struktur dan nama file di dalam folder <code>pages</code>{" "}
            secara langsung menentukan sistem routing.
          </p>
        </li>

        <li>
          <strong>
            Apa perbedaan Next.js dengan React standar (CRA)?
          </strong>
          <ul>
            <li>Mendukung SSR dan SSG</li>
            <li>Routing otomatis berbasis file</li>
            <li>Optimasi performa dan SEO</li>
            <li>Mendukung API Routes</li>
          </ul>
        </li>

        <li>
          <strong>
            Apa fungsi perintah <code>npm run dev</code>?
          </strong>
          <p>
            Menjalankan aplikasi dalam mode development dengan hot reload.
          </p>
        </li>

        <li>
          <strong>
            Apa perbedaan <code>npm run dev</code> dan{" "}
            <code>npm run build</code>?
          </strong>
          <ul>
            <li>
              <code>npm run dev</code> digunakan saat pengembangan
            </li>
            <li>
              <code>npm run build</code> digunakan untuk build produksi
            </li>
          </ul>
        </li>
      </ol>
    </div>
  );
}
  // export default Home;  