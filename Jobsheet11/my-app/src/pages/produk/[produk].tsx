import fetcher from "@/utils/swr/fetcher";
import { useRouter } from "next/router";
import useSWR from "swr";

const HalamanProduk = () => {
  const { query } = useRouter();
  
  // Perhatikan penggunaan backtick (`) untuk template literal 
  // dan pastikan tidak ada tanda petik (') nyasar di akhir fetcher
  const { data, error, isLoading } = useSWR(
    query.produk ? `/api/produk/${query.produk}` : null, 
    fetcher
  );

  return (
    <div>
      <h1>Halaman Produk</h1>
      <p>Produk : {query.produk}</p>
      {/* Opsional: Tambahkan render data produk di sini */}
      {isLoading && <p>Loading...</p>}
      {data && <p>Nama Produk: {data.data.name}</p>}
    </div>
  );
};

export default HalamanProduk;