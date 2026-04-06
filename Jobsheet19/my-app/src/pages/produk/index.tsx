import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";
import fetcher from "../../utils/swr/fetcher";
import dynamic  from "next/dynamic";

// const fetcher = (url: string) => fetch(url).then((res) => res.json());
const TampilanProduk = dynamic(() => import("../../views/produk"), {
  loading: () => <p>Memuat Daftar Produk...</p>,
  ssr: false 
});

const kategori = () => {
  // const [isLogin, setIsLogin] = useState(true);
  const { push } = useRouter();
  const [products, setProducts] = useState([]);
  // console.log("products:", products);

  const { data, error, isLoading } = useSWR("/api/produk", fetcher);
  // cek apakah data, error, dan isLoading sudah benar

  return (
    <div>
      <TampilanProduk products={isLoading ? [] : data?.data} />
    </div>
  );
};

export default kategori;