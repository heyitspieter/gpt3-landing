import Cta from "components/Cta/Cta";
import Blog from "components/Blog/Blog";
import Brand from "components/Brand/Brand";
import Header from "components/Header/Header";
import Navbar from "components/Navbar/Navbar";
import Footer from "components/Footer/Footer";
import Features from "components/Features/Features";
import WhatGpt3 from "components/WhatGpt3/WhatGpt3";
import Gradient from "components/UI/Gradient/Gradient";
import Possibility from "components/Possibility/Possibility";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Gradient>
        <Navbar />
        <Header />
      </Gradient>
      <Brand />
      <WhatGpt3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
