import { I18nProvider } from "./i18n";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Floors from "./components/Floors";
import Nights from "./components/Nights";
import Visit from "./components/Visit";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <I18nProvider>
      <Nav />
      <main>
        <Hero />
        <Floors />
        <Nights />
        <Visit />
      </main>
      <Footer />
    </I18nProvider>
  );
}
