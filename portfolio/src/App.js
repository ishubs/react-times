import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Body from './components/body'
import Footer from './components/footer'

function App() {
  const [tab, settab] = useState("books");
  function settingtab(e) {
    settab(e);
    
  }
  return (
    <div className="App">
      <Header settab={settingtab}/>
      <Body section={tab}/>
      <Footer />
    </div>
  );
}

export default App;
