import * as THREE from "three";
import { useThree, useFrame } from "@react-three/fiber"; // 내장 함수
import { useRef } from 'react';
import { Box, Sphere, Cone } from '@react-three/drei';

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
  // 1. Three.js 형식
  const geometry = new THREE.BoxGeometry( 1, 1, 1 ); 
  const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} ); 
  const cube = new THREE.Mesh( geometry, material ); 
  scene.add( cube );

  return ( 
    <>
      <directionalLight position={[5, 5, 5]} />
      {/* 3. drei 사용 */}
      <Box position={[-2,0,0]} >
        <meshStandardMaterial color="green" />
      </Box>
      {/* 2. mesh가 geometry를 감싸는 형태 */}
      <mesh geometry={new THREE.BoxGeometry(1, 1, 1)}>
        <meshStandardMaterial color="blue" />
      </mesh>
      <mesh
        ref={boxRef}
        position={[2,0,0]}
      >
        <boxGeometry />
        <meshStandardMaterial color="red" />
      </mesh>
    </>
  );
}
