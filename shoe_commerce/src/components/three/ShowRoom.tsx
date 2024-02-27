import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader , useThree, useFrame } from '@react-three/fiber'
import { CameraControls } from '@react-three/drei'
import { useRef, useEffect, useState } from 'react';

export default function ShowRoom() {

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
    let dis = 2;
    useFrame(() => {
        console.log("isFitting : ", isFitting);
        cameraControlsRef.current.setPosition(
            dis * Math.sin(angle),
            0.8,
            dis * Math.cos(angle),
            true
        )
        angle = angle + 0.01;
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
            mat.color = new THREE.Color('red');

            setIsFitting(true);
            cameraControlsRef.current.fitToBox(
                firstObj,
                true,
            ).then(() => {
                setIsFitting(false);
            })

            // cameraControlsRef.current.setLookAt(
            //     -2, 0, 2,
            //     firstObj.position.x,
            //     firstObj.position.y,
            //     firstObj.position.z,
            //     true
            // )
            // cameraControlsRef.current.fitToBox(
            //     firstObj,
            //     true,
            //     {
            //         paddingLeft: 3,
            //         paddingRight: 3,
            //         paddingTop: 3,
            //         paddingBottom: 3
            //     }
            // )

        }
    }
    return (
        <>
            <directionalLight position={[3, 3, 3]} />
            <CameraControls 
                ref={cameraControlsRef}
                enabled={true}
                dollyToCursor={true}
                // minDistance={2}
                // maxDistance={10}
                infinityDolly={false}
                onChange={(e:any) => {
                    // console.log("onChange e : ", e);
                    // console.log("onChange e.type", e.type);
                    // console.log("camera.zoom : ", camera.zoom);
                    // console.log("camera.position : ", camera.position);
                    
                }}
            />
            <primitive
                object={gltf.scene}
                onClick={shoesClick}
            />
            {/* <mesh rotation={
                [
                    THREE.MathUtils.degToRad(45),
                    THREE.MathUtils.degToRad(45),
                    0
                ]
            }>
                <boxGeometry />
                <meshStandardMaterial />
            </mesh> */}
        </>
    )
}