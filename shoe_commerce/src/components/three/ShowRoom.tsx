import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useLoader } from '@react-three/fiber'

export default function ShowRoom() {

    const obj = useLoader(OBJLoader, './models/custom.obj')

    return (
        <>
            <primitive object={obj} />
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