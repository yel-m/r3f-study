import * as THREE from "three";
import { useThree, useFrame } from "@react-three/fiber"; // 내장 함수
import { useRef } from 'react';

export default function ThreeElement() {
  const { size, gl, scene, camera } = useThree();
  const boxRef = useRef<THREE.Mesh>(null);

  // Three.js 방식
  const geometry = new THREE.BoxGeometry( 1, 1, 1 );
  const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  const cube = new THREE.Mesh( geometry, material );
  scene.add( cube );

  useFrame((state, delta) => {
    boxRef.current.rotation.x += delta;
    boxRef.current.position.y -= 0.01;
    boxRef.current.scale.z += 0.01;
  })
  return ( // R3F 방식
    <>
      <directionalLight position={[5, 5, 5]} />
      <mesh
        ref={boxRef}
        rotation={[
          THREE.MathUtils.degToRad(45),
          THREE.MathUtils.degToRad(45),
          0,
        ]}
        >
        <boxGeometry />
        <meshStandardMaterial color="red" />
      </mesh>
    </>
  );
}
