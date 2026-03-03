type ProductType = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
};

const TampilanProduk = ({ products }: { products: ProductType[] }) => {
  return (
    <div>
      <h1>Daftar Produk</h1>
      {products.map((products: ProductType) => (
        <div key={products.id}>
            <img src={products.image} alt={products.name} width={200} />
            <h2>nama :{products.name}</h2>
            <p>Harga: {products.price}</p>
            <p>kategori: {products.category}</p>
        </div>
      ))}
    </div>
  );
};

export default TampilanProduk;