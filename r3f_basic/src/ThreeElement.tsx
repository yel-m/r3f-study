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
    scene.position.x += 0.01;
  })
  return ( 
    <>
      <directionalLight position={[5, 5, 5]} />
      <group
        position={[5,0,0]}  
      >
        <mesh
          ref={boxRef}
          position={[0,0,0]}
          scale={[1,1,1]}
          rotation={[
            THREE.MathUtils.degToRad(10),
            THREE.MathUtils.degToRad(10),
            THREE.MathUtils.degToRad(10),
          ]}
        >
          <boxGeometry />
          <meshStandardMaterial color="red" />
        </mesh>
      </group>
    </>
  );
}
