import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import WhyManuls from "./components/WhyManuls";
import WhatWeUse from "./components/WhatWeUse";
import MeetTeam from "./components/MeetTeam";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-white">
      <Navigation />
      <Hero />
      <WhyManuls />
      <WhatWeUse />
      <MeetTeam />
      <ContactForm />
      <Footer />
    </div>
  );
}
