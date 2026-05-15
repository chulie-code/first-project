import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Order from "@/components/Order";
import About from "@/components/About";
import Footer from "@/components/Footer";
import StickyOrderBar from "@/components/StickyOrderBar";

export default function Home() {
  return (
    <>
      <main className="flex-1 pb-24 md:pb-0">
        <Hero />
        <Products />
        <About />
        <Order />
        <Footer />
      </main>
      <StickyOrderBar />
    </>
  );
}
