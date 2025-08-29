import { AboutSection } from "../../components/about.section";
import { ChefsSection } from "../../components/chefs-section";
import { FeaturesSection } from "../../components/features-section";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { HeroSection } from "../../components/hero-section";
import { MenuSection } from "../../components/menu-section";
import { ReservationSection } from "../../components/reservation-section";
import { TestimonialsSection } from "../../components/testimonials-section";

export default function Home() {
  return (
    <main className="page-wrapper">
      <Header />
      <HeroSection
        title="Enjoy Our Delicious Meal"
        description="Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet"
        showButton={true}
        showFoodImage={true}
        backgroundImage="/home-banner.svg"
      />
      <div style={{ background: "var(--color-bg-light)" }}>
        <FeaturesSection />
        <AboutSection />
        <MenuSection />
        <ReservationSection />
        <ChefsSection />
        <TestimonialsSection />
        <Footer />
      </div>
    </main>
  )
}
