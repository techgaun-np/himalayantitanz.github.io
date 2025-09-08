import FieldCardCarousel from "@/components/homepage/FieldCardCrousel";
import Hero from "@/components/homepage/Hero";
import Sponsers from "@/components/homepage/Sponsers";

export default function Home() {
  return (
    <div>
      <Hero />
      <FieldCardCarousel />
      <Sponsers />
    </div>
  );
}
