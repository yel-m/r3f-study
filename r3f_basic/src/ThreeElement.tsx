import * as THREE from 'three';  // 내장 함수
export default function ThreeElement() {
    return(
        <>
            <directionalLight position={[5,5,5]}/>
            <mesh rotation={[0, THREE.MathUtils.degToRad(45), 0]}> 
                <boxGeometry />
                <meshStandardMaterial color="red" />
            </mesh>
        </>
    )
}