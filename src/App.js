import React from 'react';
import './App.css';


import Information from "./components/information/Information";
import Section1 from "./components/section1/Section1";
import Section2 from './components/section2/Section2';
import Section3 from './components/section3/Section3';
import Section4 from './components/section4/Section4';
import Section5 from './components/section5/Section5';
import Footer from './components/footer/Footer';

import { MathJaxContext } from 'better-react-mathjax';

const config = {
  loader: { load: ["[tex]/html"] },
  tex: {
    packages: { "[+]": ["html"] },
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"]
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"]
    ]
  }
};

function App() {
  return (
    <MathJaxContext version={3} config={config}>
    <div>
      <Information />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section5 />
      <Section4 />
      <Footer />
    </div>
    </MathJaxContext>
  );
}

export default App;


