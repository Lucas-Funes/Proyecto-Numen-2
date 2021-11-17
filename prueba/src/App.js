import Carrousel from './components/Carrousel/carrousel.js'
import Charity from './components/Charity/charity.js'
import Content from './components/Content/content.js'
import Features from './components/Features/features.js'
import Footer from './components/Footer/footer.js'
import Health from './components/Health/health.js'
import Navbar from './components/Navbar/navbar.js'
import Offers from './components/Offers/offers.js'
import Surprise from './components/Surprise/surprise.js'
import TellaFriend from './components/TellaFriend/tellafriend.js'
import './App.css';

function App() {
  return (
    <div>
      <Navbar/>
      <Content/>
      <Offers/>
      <Features/>
      <Health/>
      <Charity/>
      <Surprise/>
      <Carrousel/>
      <TellaFriend/>
      <Footer/>
    </div>
  );
}

export default App;



