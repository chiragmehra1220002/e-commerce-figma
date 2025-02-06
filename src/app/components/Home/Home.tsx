import Layout from "./Layout";
import Categories from "./Categories";  
import BestSellingProduct from "./BestSellingProduct";
import Timer from "./Timer";
export default function Home() {
  return (
    <>
      <Layout />
      <Timer />
      <Categories/>
      {/* <BestSellingProduct/> */}
    </>
  );
}
