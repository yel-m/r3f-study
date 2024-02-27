import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader , useThree } from '@react-three/fiber'

export default function ShowRoom() {

    const { raycaster, camera } = useThree();

    const gltf = useLoader(GLTFLoader, './models/custom.glb')
    
    console.log("gltf : ", gltf);

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

        }
    }
    return (
        <>
            <directionalLight position={[3, 3, 3]} />
            <CameraControls 
                ref={cameraControlsRef}
                enabled={true}
                dollyToCursor={true}
                minDistance={2}
                // maxDistance={10}
                infinityDolly={false}
                onChange={() => {
                    // console.log("onChange");
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