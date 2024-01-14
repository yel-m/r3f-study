import * as THREE from "three";
import { useEffect, useRef } from "react";
import { Environment, useHelper, useTexture } from "@react-three/drei";

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

  const sLight = useRef<THREE.SpotLight>(null!);
  useHelper(sLight, THREE.SpotLightHelper);

  return (
    <>
      <directionalLight
        castShadow
        // shadow-camera-top={10}
        // shadow-camera-bottom={-10}
        // shadow-camera-left={-10}
        // shadow-camera-right={10}
        shadow-mapSize = {[512, 512]}
        ref={dLight}
        color={"#fff"}
        position={[0, 5, 0]}
        intensity={5}
        target-position={[0, 0, 2]}
      />
      {/* <pointLight
        color={"#fff"}
        position={[0, 0, 2]}
        intensity={5}
        distance={5}
      /> */}
      {/* <spotLight
        ref={sLight}
        color={"#fff"}
        position={[0, 5, 0]}
        intensity={300}
        distance={10}
        angle={THREE.MathUtils.degToRad(40)}
        target-position={[0,0,0]}
        penumbra={0.5}
      /> */}
      <mesh
        rotation-x={[THREE.MathUtils.degToRad(-90)]}
        position-y={-1}
        receiveShadow
      >
        <planeGeometry args={[15, 15]} />
        <meshStandardMaterial color={"#020059"} side={THREE.DoubleSide} />
      </mesh>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <torusKnotGeometry args={[0.5, 0.2]} />
        <meshBasicMaterial visible={false} color="green" />
      </mesh>
      <group ref={groupRef}>
        <mesh castShadow receiveShadow>
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
        <mesh castShadow receiveShadow>
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
        <mesh castShadow receiveShadow>
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
        <mesh castShadow receiveShadow>
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
        <mesh castShadow receiveShadow>
          <meshToonMaterial gradientMap={tone} color="pink" />
        </mesh>
        <mesh castShadow receiveShadow>
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
        <mesh castShadow receiveShadow>
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
        <mesh castShadow receiveShadow>
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
        <mesh castShadow receiveShadow>
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
        <mesh castShadow receiveShadow>
          <meshToonMaterial gradientMap={tone} color="pink" />
        </mesh>
      </group>
    </>
  );
}
