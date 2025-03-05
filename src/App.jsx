import Navbar from './components/Navbar';
import PageContent from './components/PageContent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header><Navbar/></header>
      <main><PageContent/></main>
      <Footer/>
    </div>
  );
}

export default App;
