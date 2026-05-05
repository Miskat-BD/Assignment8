import Banner from "@/components/homepage/Banner";
import ExtraSection1 from "@/components/homepage/ExtraSection1";
import FeaturedSection from "@/components/homepage/FeaturedSection";
import NewArrival from "@/components/homepage/NewArrival";

export default function Home() {
  return (
    <>
      <Banner />
      <NewArrival />
      <FeaturedSection />
      <ExtraSection1 />
    </>
  )
}
