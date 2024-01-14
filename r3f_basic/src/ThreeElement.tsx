import * as THREE from "three";
import { useEffect, useRef } from "react";
import { useControls } from 'leva';
import { useTexture } from "@react-three/drei";

export default function ThreeElement() {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  const controls = useControls({
    thickness : {value: 0.1, min: 0.1, max: 10, step: 0.1 }
  })

  const matcap = useTexture('./imgs/matcap1.jpg');


  useEffect(() => {
    const meshLength = groupRef.current!.children.length;
    for (let i = 0; i < groupRef.current!.children.length; i++) {
      const mesh = groupRef.current!.children[i] as THREE.Mesh;
      mesh.geometry = meshRef.current!.geometry;
      mesh.position.x = i % (meshLength/2) * 2 - 4;
      mesh.position.z = 0;
      if(i >= meshLength / 2) {
        mesh.position.z = 2;
      }
    }

  }, []);

  return (
    <>
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[0.5, 0.2]}/>
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
        <mesh>
          <meshNormalMaterial />
        </mesh>
        <mesh>
          <meshStandardMaterial
              color="red"
              visible={true}
              transparent={false}
              opacity={1}
              side={THREE.FrontSide}
              alphaTest={1}
              depthTest={true}
              depthWrite={true}

              emissive={"black"}
              roughness={1}
              matalness={0}
            />
        </mesh>
        <mesh>
          <meshPhysicalMaterial
              color="#fff"
              visible={true}
              transparent={true}
              opacity={1}
              side={THREE.FrontSide}
              alphaTest={1}
              depthTest={true}
              depthWrite={true}
              fog={true}

              emissive={"black"}
              roughness={0}
              matalness={0}
              clearcoat={0}
              clearcoatRoughness={0}

              transmission={0.5}
              thickness={controls.thickness}
              ior={2.33}
            />
        </mesh>
        <mesh>
          <meshDepthMaterial/>
        </mesh>
        <mesh>
          <meshMatcapMaterial matcap={matcap}/>
        </mesh>
        <mesh>
          <meshBasicMaterial />
        </mesh>
      </group>
    </>
  );
}
