import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Menu } from './components/Menu';
import { Catering } from './components/Catering';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <Menu />
          <Catering />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
