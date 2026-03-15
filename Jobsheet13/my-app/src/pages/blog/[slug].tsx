import { useRouter } from "next/router";

const HalamanBlog = () => {
//   const Router = useRouter();
//   console.log(Router);
    const { query } = useRouter();
  return (
    <div>
      <h1>Halaman Blog Dhanisa</h1>
      <p>Blog : {query.slug}</p>
    </div>
  );
};

export default HalamanBlog;