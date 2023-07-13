import { GetStaticProps } from 'next';
import bg from '../assets/images/bg.jpg';
import { 
  Navbar,
  HeroSection,
  AboutSection,
  SkillsSection,
  PortofolioSection,
  ContactSection,
  Footer
 } from '@/components';

 const Home = () => {

  return (
    <main className="w-full min-h-screen">
      <div style={{ backgroundImage:`linear-gradient(to left,rgba(10,10,10,0.5),rgba(0,0,0,0.4)),url(${bg.src})` }} id="hero" className="w-full h-screen flex items-center justify-center relative">
         <Navbar/>
         <HeroSection/>
      </div>
      <section id="about" className='w-full bg-gray-100 pt-12 pb-16'>
        <AboutSection/>
      </section>
      <section id="skills" className='w-full bg-white py-16'>
        <SkillsSection/>
      </section>
      <section id="portofolio" className="bg-gray-100 py-16">
        <PortofolioSection/>
      </section>
      <section id="feedback" className="bg-white w-full py-16">
        <ContactSection/>
      </section>
      <Footer/>
    </main>
  )
}


export default Home;