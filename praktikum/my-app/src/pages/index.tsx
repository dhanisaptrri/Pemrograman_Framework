import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

      <div>
      <h1>Praktikum Next.js pages Router</h1><br />
      <p>Mahasiswa D4 Pengembangan Web</p>
           <Link href="/about">
        <button style={{ marginTop: "10px" }}>
          Ke Halaman About
        </button>
      </Link>

       <h2> Pertanyaan Refleksi</h2><br />
        <ol>
          <li>
            <strong>Mengapa Pages Router disebut sebagai routing berbasis file?</strong>
            
            <p>Karena struktur dan nama file di dalam folder <code>pages</code> secara langsung 
            menentukan sistem routing, setiap file otomatis menjadi sebuah route tanpa memerlukan 
            konfigurasi tambahan.</p>
          
          </li>
          
          <li>
            <strong>Apa perbedaan Next.js dengan React standar (CRA)?</strong>
            <p>
            <ul>

              <li>Mendukung Server-Side Rendering (SSR) dan Static Site Generation (SSG).</li>
              <li>Menyediakan sistem routing otomatis berbasis file.</li>
              <li>Memiliki fitur optimasi performa dan SEO.</li>
              <li>Mendukung pembuatan API melalui API Routes.</li>
            
            </ul> 
            </p>

          </li>


          <li><strong>Apa fungsi perintah <code>npm run dev</code>?</strong>
          
          <p>Perintah tersebut berfungsi menjalakan aplikasi dalam mode development, 
            sehingga developer dapat melakukan pengembangan dan melihat hasil perubahan secara real-time.</p>
            
          </li>

          
          <li><strong>Apa perbedaan <code>npm run dev</code> dan <code>npm run build</code>?</strong></li>
          <p>
            <ul>
              <li> <code>npm run dev</code> digunakan saat proses pengembangan</li>
              <li> <code>npm run build</code> digunakan untuk membangun
            aplikasi versi produksi yang sudah dioptimasi </li>
            </ul>
          </p>
      </ol>

     </div>
  )
}
  
