import { useEffect, useState } from 'react';
import Body from './components/Body';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Loader from './components/Loader';




function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

 return isLoading ? <Loader />: (
   <>
      <Navbar/>
      <Body/>
     <Footer/>
    </>
  );
}

export default App;
