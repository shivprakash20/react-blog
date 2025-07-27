import './App.scss'
import './styles/main.scss'

import Header from './container/Header/Header';
import Main from './container/Main/Main';
import Footer from './container/Footer/Footer';

function App() {

  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
