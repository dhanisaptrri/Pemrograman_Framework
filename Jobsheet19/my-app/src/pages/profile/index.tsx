import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useSession } from 'next-auth/react'

const HalamanProfile = () => {
  const {data}:any = useSession();
  return (
    <div>
      <h1>Halaman Profile</h1><br />
      <h1>Selamat Datang {data?.user?.fullname}</h1>
    </div>
  )
}

export default HalamanProfile