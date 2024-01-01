import './App.css'
import { Canvas } from '@react-three/fiber'
import ThreeElement from './ThreeElement';
import { OrbitControls } from '@react-three/drei';

function App() {

  return (
    <>
      <Canvas
        camera={{
          fov:75,
          near:1,
          far:100,
          position:[3,3,0],
        }}
      >
        <OrbitControls
          minAzimuthAngle={-Math.PI / 4}
          maxAzimuthAngle={Math.PI / 4}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI - Math.PI / 6}
        />
        <axesHelper args={[6]}/>
        <gridHelper args={[10, 10]}/>
        <ThreeElement />
      </Canvas>
      R3F Basic
    </>
  )
}

export default App
