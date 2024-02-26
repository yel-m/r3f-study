import * as THREE from 'three';

export default function InteractionTest() {

    function clickFunc(e:any) {
        console.log("clickFunc e : ", e);
        e.object.material.color = new THREE.Color('green');
    }
    
    return(
        <>
            <ambientLight />
            <directionalLight intensity={5} />
            <mesh
                onClick={(e) => clickFunc(e)}
            >
                <boxGeometry />
                <meshStandardMaterial />
            </mesh>

        </>
    )
}