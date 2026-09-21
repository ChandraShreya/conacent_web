
import Hero from "../features/home/components/Hero";
import AboutPreview from "../features/home/components/AboutPreview";
import ServicePreview from "../features/home/components/ServicePreview";
import WhyChooseUs from "../features/home/components/WhyChooseUs";
import SuccessStory from "../features/home/components/SuccessStory";
import Industries from "../features/home/components/Industries";
import LatestInsights from "../features/home/components/LatestInsights";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutPreview />
      <ServicePreview/>
      <Industries/>
      <WhyChooseUs/>
      <SuccessStory/>
      <LatestInsights/>
      
    </main>
  );
}
