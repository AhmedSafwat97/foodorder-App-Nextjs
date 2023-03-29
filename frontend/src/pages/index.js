import Layout from "@/Componants/Layout";
import Banner from "@/Componants/Sections/Banner";
import Offers from "@/Componants/Sections/Offers";
import About from "@/Componants/Sections/About";
import MenuSwiper from "@/Componants/Sections/MenuSwiper";
import MenuSwiper2 from "@/Componants/Sections/MenuSwiper2";
import MenuSwiper3 from "@/Componants/Sections/MenuSwiper3";
import MenuSwiper4 from "@/Componants/Sections/MenuSwiper4";

export default function Home({title}) {
  return (
    <Layout title="Home" >
      <Banner/>
      <Offers/>
      <h1 className="title" style={{ color: "black" , textAlign : "center" }}>
        Our Menu
        </h1>
      <MenuSwiper/>
      <MenuSwiper2/>
      <MenuSwiper3/>
      <MenuSwiper4/>
      <About/>
    </Layout>
  );
}
