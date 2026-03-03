import { useEffect } from "react";
import { useRouter } from "next/router";
import ProdukView from "../../views/produk";

const Produk = () => {
  const { push } = useRouter();

  useEffect(() => {
    const isLogin = localStorage.getItem("isLogin");

    if (!isLogin) {
      push("/auth/login");
    }
  }, [push]);

  return <ProdukView />;
};

export default Produk;

