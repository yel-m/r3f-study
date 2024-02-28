import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader , useThree, useFrame } from '@react-three/fiber'
import { CameraControls, ContactShadows } from '@react-three/drei'
import { useRef, useEffect, useState } from 'react';
import { selectedColorState } from '@src/atoms/Atoms';
import { useRecoilState } from 'recoil';
import Constants from '@src/Constants';

export default function ShowRoom() {

    const [selectedColorIdx, setSelectedColorIdx] = useRecoilState(selectedColorState);
    const { raycaster, camera } = useThree();
    const cameraControlsRef = useRef<CameraControls>(null!);
    const gltf = useLoader(GLTFLoader, './models/custom.glb')
    
    const [ isFitting, setIsFitting ] = useState(false);

    console.log("gltf : ", gltf);

    window.addEventListener("keydown", (e) => {
        console.log("e.key : ", e.key);

        switch(e.key) {
            case 'a':
                cameraControlsRef.current.setLookAt(
                    -2, 0, 2,
                    0,0,0,
                    true
                )
                break;
            case 'b':
                cameraControlsRef.current.setLookAt(
                    0, 3, 0,
                    0,0,0,
                    true
                )
                break;
        }
    })

    useEffect(() => {
        gltf.scene.children.forEach(shoes => {
            shoes.castShadow = true;
            shoes.children.forEach((mesh) => {
                mesh.castShadow = true;
            })
        })
        cameraControlsRef.current.setTarget(0, 0, 0, false);
        cameraControlsRef.current.addEventListener( 'control', () => {
            console.log("control")
            setIsFitting(true)
        })
        cameraControlsRef.current.addEventListener( 'sleep', () => {
            console.log("sleep")
            setIsFitting(false)
        })
    })
    let angle = 0;
    let dis = 2.0;
    useFrame(() => {
        console.log("isFitting : ", isFitting);
        cameraControlsRef.current.setPosition(
            dis * Math.sin(angle),
            0.8,
            dis * Math.cos(angle),
            true
        )
        // angle = angle + 0.01;
        
        const rightShoes = gltf.scene.children[0];
        const leftShoes = gltf.scene.children[1];

        leftShoes.rotation.y = THREE.MathUtils.degToRad(300);
        leftShoes.position.z = 0.3;

        rightShoes.rotation.y = THREE.MathUtils.degToRad(10);
        leftShoes.rotation.y = THREE.MathUtils.degToRad(325);
        leftShoes.rotation.z = THREE.MathUtils.degToRad(-30);
        leftShoes.position.x = -0.25;
        leftShoes.position.z = 0.37;
        leftShoes.position.y = 0.44;

    })

    const shoesClick = () => {

        console.log("shoesClick");
        const intersects = raycaster.intersectObjects(gltf.scene.children, true);
        console.log("intersects: ", intersects);

        if (intersects.length > 0) {
            const firstObj = intersects[0].object as THREE.Mesh;
            console.log("firstObj.name : " + firstObj.name);
            const firstMat = firstObj.material as THREE.MeshStandardMaterial;
            const cloneMat = firstMat.clone();

            firstObj.material = cloneMat;
            const mat = firstObj.material as THREE.MeshStandardMaterial;
            // mat.color = new THREE.Color('red');

            mat.color = new THREE.Color(Constants.COLOR_ARR[selectedColorIdx].color);
            setIsFitting(true);
            cameraControlsRef.current.fitToBox(
                firstObj,
                true,
            )
        }
    }
    return (
        <>
            <directionalLight 
                position={[3, 3, 3]}
            />
            <pointLight
                position={[0,1,0]}
                intensity={3}
            />
            <CameraControls 
                ref={cameraControlsRef}
                enabled={true}
                dollyToCursor={true}
                minDistance={2}
                maxDistance={10}
                infinityDolly={false}
                onChange={(e:any) => {
                    console.log("onChange e : ", e);
                    
                }}
            />
            <mesh
                receiveShadow
                castShadow
                scale={5}
                position={[0, -0.51, 0]}
            >
                <cylinderGeometry 
                    args={[0.4, 0.2, 0.2, 50]}
                />
                <meshStandardMaterial />
            </mesh>
            <primitive
                object={gltf.scene}
                onClick={shoesClick}
            />

            <ContactShadows 
                position={[0,0,0]}
                scale={10}
                color="#000000"
                resolution={512}
                opacity={0.8}
                blur={0.5}
            />
        </>
    )
}