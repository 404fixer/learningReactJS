import './App.css';
import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next'
const selflatex = require('node-latex-pdf');

function App() {
 
  selflatex(__dirname + '/src/document.tex', __dirname + '/src/', (err,msg) => {
      if(err)
        console.log(`Error, ${msg}`);
      else
        console.log(`Success! ${msg}`);
  });

  return (
    <div className="App">
      <h1>Landing Page</h1>
      <Latex>
        {/* \documentclass[12pt]{article}  
        \usepackage{mathtools}  
        \begin{document}   */}
        {/* \begin{equation}   */}
        x^2 +2x+ 6 = 0               
        {/* \end{equation}   */}
        {/* \end{document}  */}
      </Latex>
    </div>
  );
}

export default App;
