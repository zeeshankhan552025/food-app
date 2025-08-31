import { ContactHero } from "../../components/contact-hero";
import { ContactSection } from "../../components/contact-section";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";

export default function Contact() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <ContactHero
        title="Contact Us"
        breadcrumbItems={["HOME", "CONTACT"]}
        backgroundImage="/contact-page-banner.svg"
        overlayOpacity={0.4}
        customHeight="397px"
      />
      <div className="bg-gray-50 flex-1">
        <div className="container mx-auto px-4">
          <ContactSection />
        </div>
      </div>
      <Footer />
    </main>
  )
}
