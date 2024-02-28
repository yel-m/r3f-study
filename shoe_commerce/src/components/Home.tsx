import { Canvas } from "@react-three/fiber"
import ShowRoom from '@components/three/ShowRoom'
import AppBar from '@components/AppBar'

export default function Home() {

    return (
        <>
            <AppBar />
            <Canvas
            >
                {/* <axesHelper args={[5]} />
                <gridHelper /> */}
                <color attach={'background'} args={['#b7f2f1']} />
                <ShowRoom />
            </Canvas>
        </>
    )
}