import { Header } from './components/Header';
import { LearningTabs } from './components/LearningTabs';
import { LearningCards } from './components/LearningCards';
import { Footer } from './components/Footer';
import './App.scss';

function App() {
  return (
    <>
      <Header />
      <LearningTabs />
      <LearningCards />
      <Footer />
    </>
  );
}

export default App;
