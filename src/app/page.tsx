import Navbar from "@/components/Navbar";
import Hero from "@/app/home/Hero";
import Products from "@/app/product/Products";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Products />
      <Footer />
    </main>
  );
}
