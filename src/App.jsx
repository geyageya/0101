import { Header } from './components/Header';
import { Main } from "./components/Main";
import {Footer} from './components/Footer';

const App=()=> {
  console.log("Appレンダリング");

  return(
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  )
} //App

export default App;

