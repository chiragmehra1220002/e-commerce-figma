
import Layout from "@/app/components/Home/Layout";
import Banner from "@/app/components/Home/Banner";
import Categories from "@/app/components/Home/Categories";  
import BestSellingProduct from "@/app/components/Home/BestSellingProduct";
export default function Home() {
  return (
    <>
      <Layout />
      <Banner/>
      <Categories/>
      <BestSellingProduct/>
    </>
  );
}
