import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/NavBar'
import About from '../components/About'
import Main from '../components/Main'
import Skills from '../components/Skills'
import Projects from '../components/Projects'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Casey O&apos;Neil Software Engineer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main/>
      <Projects/>
      <About/>
      <Skills/>

    </div>
  )
}



//http://localhost:60164
