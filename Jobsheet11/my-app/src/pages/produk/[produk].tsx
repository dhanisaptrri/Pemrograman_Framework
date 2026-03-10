import fetcher from "@/utils/swr/fetcher";
import { useRouter } from "next/router";
import useSWR from "swr";
import DetailProduk from "../../views/DetailProduct";
import { ProductType } from "../../types/Product.type";

const HalamanProduk = ({ product }: { product: ProductType }) => {
//   // const Router = useRouter();
//   // console.log(Router);
//   const { query } = useRouter();
//   const { data, error, isLoading } = useSWR(`/api/products/${query.produk}`, fetcher);

//   return (
//     <div>
//       <DetailProduk products={isLoading ? [] : data.data} />
//     </div>
//   );
return (
    <div>
      <DetailProduk products={product} />
    </div>
  )
};
export default HalamanProduk;
export async function getServerSideProps({ params }: { params: { produk: string } }) {
  const res = await fetch(`http://localhost:3000/api/produk/${params?.produk}`);
  const respone = await res.json();
  // console.log("Data produk yang diambil dari API:", respone);
  return {
    props: {
      product: respone.data || null, // Pastikan untuk memberikan nilai default jika data tidak tersedia
    },
  };
}
