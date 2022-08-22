import './App.css';
import MailchimpForm from './Components/MailchimpForm/MailchimpForm';
import { GlobalProvider } from './Context/GlobalContext';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './Components/HomePage';

function App() {
  return (
  <BrowserRouter>
    <GlobalProvider >
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="join" element={<MailchimpForm />} />
        </Routes>
        {/* <IntroPage />
        <About />
        <Footer /> */}
      </div>
    </GlobalProvider>
  </BrowserRouter> 
  );
}

export default App;
