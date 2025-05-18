import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import Info from '@/components/Info/Info';
import Route from '@/components/Route/Route';
import Accommodation from '@/components/Accommodation/Accommodation';
import Gallery from '@/components/Gallery/Gallery';
import RSVP from '@/components/RSVP/RSVP';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Info />
      <Route />
      <Accommodation />
      <Gallery />
      <RSVP />
      <Footer />
    </main>
  );
}