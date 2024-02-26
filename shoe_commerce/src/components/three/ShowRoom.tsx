import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { useLoader } from '@react-three/fiber'

export default function ShowRoom() {

    const obj = useLoader(OBJLoader, './models/custom.obj')
    const fbx = useLoader(FBXLoader, './models/custom.fbx')

    return (
        <>
            {/* <primitive object={obj} /> */}
            <primitive object={fbx} />
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