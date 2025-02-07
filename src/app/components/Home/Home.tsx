import Layout from "./Layout";
import Categories from "./Categories";  
import Banner from "./Banner";
import BestSellingProduct from "./BestSellingProduct";
import Features from "./feature";
import Gallery from "./gallery";

export default function Home() {
  return (
    <>
      <Layout />
        <Banner />
 
      <Categories/>
      {/* <BestSellingProduct/> */}
    
    </>
  );
}
