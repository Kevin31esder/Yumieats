import Categories from "./components/Categories";
import Delivery from "./components/Delivery";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Meals from "./components/Meals";
import NewsLetter from "./components/NewsLetter";
import TopNav from "./components/TopNav";
import TopPicks from "./components/TopPicks";

function App() {


  return (
   <>
    <TopNav/>
    <Featured/>
    <Delivery/>
    <TopPicks/>
    <Meals/>
    <Categories/>
    <NewsLetter/>
    <Footer/>
   </>
  )
}

export default App
