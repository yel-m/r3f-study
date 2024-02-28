import './App.css'
import Home from './components/Home';
import { RecoilRoot } from 'recoil';

function App() {

  return (
    <>
      <RecoilRoot>
        <Home />
      </RecoilRoot>
    </>
  )
}

export default App
