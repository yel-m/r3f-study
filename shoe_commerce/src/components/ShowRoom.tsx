import * as THREE from 'three';

export default function ShowRoom() {

    return (
        <>
            <mesh rotation={
                [
                    THREE.MathUtils.degToRad(45),
                    THREE.MathUtils.degToRad(45),
                    0
                ]
            }>
                <boxGeometry />
                <meshStandardMaterial />
            </mesh>
        </>
    )
}