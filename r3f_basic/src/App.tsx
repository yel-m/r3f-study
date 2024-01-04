import './App.css'
import { Canvas } from '@react-three/fiber'
import ThreeElement from './ThreeElement';
import { OrbitControls } from '@react-three/drei';
import { useControls } from 'leva';

function App() {

  const color = useControls({
    value: 'white',
  })
  
  const grid = useControls({
    segment: {value:10, min:2, max:100, step:1},
  })

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
        <color attach="background" args={[color.value]} />
        <OrbitControls/>
        <axesHelper args={[6]}/>
        <gridHelper args={[10, grid.segment]}/>
        <ThreeElement />
      </Canvas>
      R3F Basic
    </>
  )
}

export default App
