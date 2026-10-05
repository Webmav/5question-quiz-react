import Navbar from './assets/components/NavBar';

import Details from './assets/components/Details';

import First from './assets/components/FirstQuestion';
import Second from './assets/components/SecondQuestion';
import Third from './assets/components/ThirdQuestion';
import Fourth from './assets/components/FourthQuestion';
import Fifth from './assets/components/FifthQuestion';

import Score from './assets/components/Score';
import Footer from './assets/components/Footer';

export default function App() {
  return(
    <>
            <Navbar />

            <Details />

            <First />
            <Second />
            <Third />
            <Fourth />
            <Fifth />

            <Score />
            <Footer />
    </>
  )
}