import { ContactSection } from "../../components/contact-section";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { HeroSection } from "../../components/hero-section";

export default function Contact() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection
        title="Contact Us"
        showBreadcrumb={true}
        breadcrumbItems={["HOME", "CONTACT"]}
        backgroundImage="/contact-page-banner.svg"
        overlayOpacity={0.4}
      />
      <div className="bg-gray-50">
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}
