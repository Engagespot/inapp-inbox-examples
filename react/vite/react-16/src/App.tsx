import './App.css';
import { Engagespot } from '@engagespot/react-component';

function App() {
   return (
      <div
         style={{
            width: '100%',
            height: '10vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'fixed',
            top: '0',
            left: '0',
            background: 'black',
         }}
      >
         <Engagespot apiKey={'API_KEY'} userId={'USER_ID'} />
      </div>
   );
}

export default App;
