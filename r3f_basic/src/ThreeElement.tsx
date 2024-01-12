import * as THREE from "three";
import { useThree, useFrame } from "@react-three/fiber"; // 내장 함수
import { useRef, useEffect } from "react";
import { useControls } from "leva";

export default function ThreeElement() {
  const { size, gl, scene, camera } = useThree();
  const boxRef = useRef<THREE.Mesh>(null);
  const boxCopyRef = useRef<THREE.Mesh>(null);
  const boxControl = useControls({
    width: { value: 1, min: 0.1, max: 10, step: 0.1 },
    height: { value: 1, min: 0.1, max: 10, step: 0.1 },
    depth: { value: 1, min: 0.1, max: 10, step: 0.1 },
    widthSeg: { value: 1, min: 1, max: 10, step: 1 },
    heightSeg: { value: 1, min: 1, max: 10, step: 1 },
    depthSeg: { value: 1, min: 1, max: 10, step: 1 },
  });

  useFrame((state, delta) => {
    // boxRef.current.rotation.x += delta;
    // boxRef.current.position.y += 0.01;
    // boxRef.current.scale.z += 0.01;
    // scene.position.x += 0.01;
    // scene.rotation.x += 0.01;
    // groupRef.current.rotation.x += delta;
  });

  useEffect(() => {
    boxCopyRef.current.geometry = boxRef.current.geometry;
  }, [boxControl]);

  return (
    <>
      <directionalLight position={[5, 5, 5]} />
      <mesh ref={boxRef} position={[0, 0, 0]}>
        <boxGeometry
          args={[
            boxControl.width,
            boxControl.height,
            boxControl.depth,
            boxControl.widthSeg,
            boxControl.heightSeg,
            boxControl.depthSeg,
          ]}
        />
        <meshStandardMaterial wireframe />
      </mesh>
      <mesh ref={boxCopyRef}>
        <meshStandardMaterial color="red" />
      </mesh>
    </>
  );
}
