
import './App.css';

import Client from './MyComponent/Client'

import AccountProvider from './context/AccountProvider';
import { Templateprovider } from './theme/Templateprovider';
import UserProvider from './context/UserProvider';

function App() {
  return (
    <Templateprovider>
      <UserProvider>
        <AccountProvider>
        <Client/>
        </AccountProvider>
       </UserProvider> 
    </Templateprovider>

  )  
   
}

export default App;
