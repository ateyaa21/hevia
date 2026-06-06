import Advice from "./Home/Advice";
import Banner from "./Home/Banner";
import BestSellers from "./Home/BestSellers";
import Catalogue from "./Home/Catalogue";
import Collections from "./Home/CollectionsSection";
import Faq from "./Home/Faq";
import Hero from "./Home/Hero";
import Intro from "./Home/Intro";
import Presentation from "./Home/Presentation";
import Process from "./Home/Process";
import Reviews from "./Home/Reviews";
import Why from "./Home/Why";

export default function Home() {
  return (
    <>
      <Hero />
      <Collections />
      <Intro />
      <Reviews />
      <BestSellers />
      <Presentation />
      <Catalogue />
      <Process />
      <Faq />
      <Why />
      <Advice />
      <Banner />
    </>
  );
}