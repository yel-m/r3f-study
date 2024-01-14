import * as THREE from 'three';
import { useFrame } from "@react-three/fiber"; // 내장 함수
import { useEffect } from "react";

export default function ThreeElement() {
  useFrame((state, delta) => {});

  useEffect(() => {}, []);

  return (
    <>
      <directionalLight position={[5, 5, 5]}/>
      <mesh position={[0, 0, 0]}>
        <boxGeometry />
        <meshBasicMaterial color="green" />
      </mesh>
      <mesh position={[2, 0, 0]}>
        <boxGeometry />
        <meshBasicMaterial
          color="red"
          visible={true}
          transparent={false}
          opacity={1}
          side={THREE.FrontSide}
          alphaTest={1}
          depthTest={true} 
          depthWrite={true}
        />
      </mesh>
      <mesh position={[4, 0, 0]}>
        <boxGeometry />
        <meshLambertMaterial
          color="red"
          visible={true}
          transparent={false}
          opacity={1}
          side={THREE.FrontSide}
          alphaTest={1}
          depthTest={true} 
          depthWrite={true}
          fog={true}
          emissive={'black'}
        />
      </mesh>
    </>
  );
}
