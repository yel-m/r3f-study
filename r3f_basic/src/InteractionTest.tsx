import * as THREE from 'three';
import { useThree } from '@react-three/fiber';

export default function InteractionTest() {

    const { camera, scene, raycaster, pointer } = useThree();

    function groupClickFunc(e:any) {
        console.log("clickFunc e : ", e);

        raycaster.setFromCamera(pointer, camera);
        const intersects = raycaster.intersectObject(e.eventObject, true);
        console.log("intersects : ", intersects);

        if(intersects.length > 0) {
            console.log("intersects[0] : ", intersects[0]);

            const mesh = intersects[0].object as any;
            mesh.material.color = new THREE.Color('red');
        }
    }

    return(
        <>
            <ambientLight />
            <directionalLight intensity={5} />
            <group
                onClick={(e) => groupClickFunc(e) }
            >
                <mesh
                    // onClick={(e) => clickFunc(e)}
                    position={[-2,0,0]}
                >
                    <boxGeometry />
                    <meshStandardMaterial />
                </mesh>
                <mesh
                    // onClick={(e) => clickFunc(e)}
                    position={[0,0,0]}
                >
                    <boxGeometry />
                    <meshStandardMaterial />
                </mesh>
                <mesh
                    // onClick={(e) => clickFunc(e)}
                    position={[2,0,0]}
                >
                    <boxGeometry />
                    <meshStandardMaterial />
                </mesh>
            </group>
            
        </>
    )
}