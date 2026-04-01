import Link from "next/link";
import style from "../../auth/register/register.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";

const TampilanRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
const { push } = useRouter();
const [error, setError] = useState("");

const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(event.currentTarget);
    
    // Ambil data dari inputan (pastikan name di input sesuai: "email", "Fullname", "Password")
    const email = formData.get("email") as string;
    const fullname = formData.get("Fullname") as string;
    const password = formData.get("Password") as string;

    setIsLoading(true); // Mulai loading
    setError(""); // Reset error sebelumnya

    const response = await fetch("/api/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, fullname, password }),
    });

    if (response.status === 200) {
        form.reset(); // Bersihkan form jika sukses
        setIsLoading(false);
        push("/auth/login"); // Pindah ke halaman login
    } else {
        setIsLoading(false);
        // Tampilkan pesan error jika email sudah ada atau error lain
        setError(response.status === 400 ? "User already exists" : "An error occurred");
    }
};
    return (
        <div className={style.register}>
            <h1 className={style.register__title}>Halaman Register</h1>
            <div className={style.register__form}>
                <form onSubmit={handleSubmit}>
                    <div className={style.register__form__item}>
                        <label 
                            htmlFor="email" 
                            className={style.register__form__item__label}
                        >
                            Email
                        </label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="Email" 
                            className={style.register__form__item__input}
                        />
                    </div>

                    <div className={style.register__form__item}>
                        <label 
                            htmlFor="Fullname" 
                            className={style.register__form__item__label}
                        >
                            Fullname
                        </label>
                        <input 
                            type="text" 
                            id="Fullname" 
                            name="Fullname" 
                            placeholder="Fullname" 
                            className={style.register__form__item__input}
                        />
                    </div>

                    <div className={style.register__form__item}>
                        <label 
                            htmlFor="Password" 
                            className={style.register__form__item__label}
                        >
                            Password
                        </label>
                        <input 
                            type="password" 
                            id="Password" 
                            name="Password" 
                            placeholder="Password" 
                            className={style.register__form__item__input}
                        />
                    </div>

                    <button 
                        type="submit" 
                        className={style.register__form__item__button}
                    >
                        Register
                    </button>
                </form>
                <br />
                <p className={style.register__form__item__text}>
                    Sudah punya akun? <Link href="/auth/login">Ke Halaman Login</Link>
                </p>
            </div>
        </div>
    );
};

export default TampilanRegister;