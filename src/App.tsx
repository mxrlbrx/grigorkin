import '@/App.css'
import { Layout } from '@/components/Layout';
import { Header } from './layout/Header/Header';
import { Hero } from './sections/Hero';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';

export function App() {
  return (
    <Layout>
      <header>
        <Header image='/myLogo.svg' />
      </header>
      
      <main className="mt-20">
        <Hero />
        <Skills />
        <Projects />
      </main>
    </Layout>
  )
}