import './App.css'
import { Canvas } from '@react-three/fiber'
import ThreeElement from './ThreeElement';

function App() {

  return (
    <>
      <Canvas
        orthographic
        camera={{
          zoom: 50,
          near:1,
          far:20,
          fov:75,
          position:[5,5,0],
        }}
      >
        <ThreeElement />
      </Canvas>
      R3F Basic
    </>
  )
}

export default App
