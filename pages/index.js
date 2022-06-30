import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Main from '../components/Main'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Casey O'Neil Software Engineer</title>
      </Head>
      <Main />
      <About />
      <Projects />
      <Skills />
      <Contact />



    </div>
  )
}
