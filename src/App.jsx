import "./App.scss";
import Test from "./Test";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return <div>
    <section id="Homepage"> 
      <Navbar />
    </section>
    <section id="Services">Parallax</section>
    <section>Services</section>
    <section id="Portfolio">Parallax</section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section> 
    <section id="Contact">Contact</section> 
      {/*
        <Test />
        <Test />
        
      </section> */}
  </div>;
};

export default App;
