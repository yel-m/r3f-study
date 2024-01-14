import * as THREE from "three";
import { useEffect, useRef } from "react";
import { useHelper, useTexture } from "@react-three/drei";

export default function ThreeElement() {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  const matcap = useTexture("./imgs/matcap1.jpg");
  const tone = useTexture("./imgs/fiveTone.jpg");
  tone.minFilter = THREE.NearestFilter;
  tone.magFilter = THREE.NearestFilter;

  useEffect(() => {
    const meshLength = groupRef.current!.children.length;
    for (let i = 0; i < groupRef.current!.children.length; i++) {
      const mesh = groupRef.current!.children[i] as THREE.Mesh;
      mesh.geometry = meshRef.current!.geometry;
      mesh.position.x = (i % (meshLength / 2)) * 2 - 2;
      mesh.position.z = 0;
      if (i >= meshLength / 2) {
        mesh.position.z = 2;
      }
    }
  }, []);

  const dLight = useRef<THREE.DirectionalLight>(null!);
  useHelper(dLight, THREE.DirectionalLightHelper);

  return (
    <>
      {/* <ambientLight color={'blue'} intensity={1} /> */}
      {/* <hemisphereLight args={['blue', 'yellow', 2]} /> */}
      <directionalLight
        ref={dLight}
        color={"fff"}
        position={[0,5,0]}
        intensity={5}
        target-position={[0,0,2]}
      />
      <mesh rotation-x={[THREE.MathUtils.degToRad(-90)]} position-y={-1}>
        <planeGeometry args={[15, 15]} />
        <meshStandardMaterial color={"#020059"} side={THREE.DoubleSide} />
      </mesh>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <torusKnotGeometry args={[0.5, 0.2]} />
        <meshBasicMaterial visible={false} color="green" />
      </mesh>
      <group ref={groupRef}>
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
            thickness={0.5}
            ior={2.33}
          />
        </mesh>
        <mesh>
          <meshToonMaterial gradientMap={tone} color="pink" />
        </mesh>
      </group>
    </>
  );
}
