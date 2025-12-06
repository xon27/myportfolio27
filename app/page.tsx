import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Awards from '@/components/Awards'
import FeaturedEngagements from '@/components/FeaturedEngagements'
import InternalWorks from '@/components/InternalWorks'
import FeaturedNews from '@/components/FeaturedNews'
import About from '@/components/About'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white w-full overflow-x-hidden">
      <CustomCursor />
      <Navigation />
      <Hero />
      <Awards />
      <FeaturedEngagements />
      <InternalWorks />
      <FeaturedNews />
      <About />
      <Footer />
    </main>
  )
}

