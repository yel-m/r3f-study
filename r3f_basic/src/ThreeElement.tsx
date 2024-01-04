import * as THREE from "three";
import { useThree, useFrame } from "@react-three/fiber"; // 내장 함수
import { useRef } from 'react';
import { useControls } from 'leva';

export default function ThreeElement() {
  const { size, gl, scene, camera } = useThree();
  const boxRef = useRef<THREE.Mesh>(null);

  const box = useControls({
    rotation: {value:0, min:-360, max:360, step:1},
  })

  useFrame((state, delta) => {
    // boxRef.current.rotation.x += delta;
    // boxRef.current.position.y -= 0.01;
    // boxRef.current.scale.z += 0.01;
  })
  return ( 
    <>
      <directionalLight position={[5, 5, 5]} />
      <mesh
        ref={boxRef}
        rotation={[
          THREE.MathUtils.degToRad(45),
          THREE.MathUtils.degToRad(box.rotation),
          0,
        ]}
        >
        <boxGeometry />
        <meshStandardMaterial color="red" />
      </mesh>
    </>
  );
}
