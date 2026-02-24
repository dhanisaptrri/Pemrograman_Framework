import Link from "next/link";

const halamanRegister = () => {
    return (
        <div>
            <h1>halaman Register</h1>
            <Link href="/auth/login">Ke Halaman Login</Link>
        </div>
    );
}

export default halamanRegister;