import Nav from './components/Nav'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import EducationCerts from './components/EducationCerts'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-brand-bg text-white">
      <Nav />
      <main className="container mx-w-7x1 mx-auto px-2 pt-3 sm:px-3">
        <Hero />
       

        <Skills />
   
        <Projects />
        <Experience />
        <EducationCerts />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
