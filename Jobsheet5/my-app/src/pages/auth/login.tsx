import { useRouter } from "next/router";

const Login = () => {
  const { push } = useRouter();

  const handleLogin = () => {
    localStorage.setItem("isLogin", "true");
    push("/produk");
  };

  return (
    <div>
      <h1>Halaman Login</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;