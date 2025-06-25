import MyComponent from './Portfolio';
import { useEffect } from 'react';

function App() {
  
  useEffect(() => {
    document.title = 'Portfolio Jonathan Patta';
  }, []);
  return <MyComponent/>
}

export default App;
