import * as THREE from "three";
import { useFrame } from "@react-three/fiber"; // 내장 함수
import { useEffect, useRef } from "react";

export default function ThreeElement() {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  // const meshCopyRef1 = useRef<THREE.Mesh>(null);
  // const meshCopyRef2 = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {});

  useEffect(() => {
    // group의 children의 geometry를 meshRef의 geometry로 바꿔주는 작업
    for (let i = 0; i < groupRef.current!.children.length; i++) {
      const mesh = groupRef.current!.children[i] as THREE.Mesh;
      mesh.geometry = meshRef.current!.geometry;
      mesh.position.x = i * 2;
    }
    // meshCopyRef1.current!.geometry = meshRef.current!.geometry;
    // meshCopyRef2.current!.geometry = meshRef.current!.geometry;
  }, []);

  return (
    <>
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <mesh ref={meshRef}>
        <sphereGeometry args={[1,32,16]}/>
        <meshBasicMaterial visible={false} color="green" />
      </mesh>
      <group ref={groupRef}>
        <mesh>
          <meshBasicMaterial color="green" wireframe />
        </mesh>
        <mesh>
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
        <mesh>
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
            emissive={"black"}
          />
        </mesh>
        <mesh>
          <meshPhongMaterial
            color="red"
            visible={true}
            transparent={false}
            opacity={1}
            side={THREE.FrontSide}
            alphaTest={1}
            depthTest={true}
            depthWrite={true}
            fog={true}

            emissive={"black"}
            specular={"#fff"}
            shininess={200}
            flatShading={true}
          />
        </mesh>
      </group>
    </>
  );
}
