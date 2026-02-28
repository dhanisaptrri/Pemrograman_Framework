import { useEffect } from "react";
import { useRouter } from "next/router";

const Produk = () => {
  const { push } = useRouter();

  useEffect(() => {
    const isLogin = localStorage.getItem("isLogin");

    if (!isLogin) {
      push("/auth/login");
    }
  }, [push]);

  return <div>Produk User Page</div>;
};

export default Produk;