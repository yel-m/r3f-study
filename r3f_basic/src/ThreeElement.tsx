import * as THREE from "three";
import { useThree, useFrame } from "@react-three/fiber"; // 내장 함수
import { useRef } from 'react';

export default function ThreeElement() {
  const { size, gl, scene, camera } = useThree();
  const boxRef = useRef<THREE.Mesh>(null);


  useFrame((state, delta) => {
    // boxRef.current.rotation.x += delta;
    // boxRef.current.position.y += 0.01;
    // boxRef.current.scale.z += 0.01;
    // scene.position.x += 0.01;
    // scene.rotation.x += 0.01;
    // groupRef.current.rotation.x += delta;
  })

  return ( 
    <>
      <directionalLight position={[5, 5, 5]} />
      <mesh
        ref={boxRef}
        position={[0,0,0]}
      >
        <boxGeometry />
        <meshStandardMaterial wireframe/>
      </mesh>
    </>
  );
}
