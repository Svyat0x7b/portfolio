import React, { Suspense, useEffect, useState } from 'react';
//@ts-ignore
import { Canvas } from '@react-three/fiber';
//@ts-ignore
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

interface ComputerPropsType {
    isMobile: boolean;
}

const Computers: React.FC<ComputerPropsType> = ({ isMobile }) => {
    const computer = useGLTF('../../../public/desktop_pc/scene.gltf');
    return (
        <mesh>
            <hemisphereLight intensity={0.15} groundColor="black" />
            <pointLight intensity={1} />
            <spotLight
                position={[-3, 5, 1]}
                angle={1}
                penumbra={1}
                intensity={600}
                castShadow
                shadow-mapSize={1024}
            />
            <primitive
                object={computer.scene}
                scale={isMobile ? 0.5 : 0.75}
                position={isMobile ? [0, -2.6, -1.5] : [0, -3.25, -1.5]}
            />
        </mesh>
    );
};

const ComputersCanvas: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 500px)');

        setIsMobile(mediaQuery.matches);

        const handlerMediaQueryChange = (e: MediaQueryListEvent) => {
            setIsMobile(e.matches);
        };

        mediaQuery.addEventListener('change', handlerMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener('change', handlerMediaQueryChange);
        };
    }, []);

    return (
        <Canvas
            frameloop="demand"
            camera={{ position: [20, 3, 5], fov: 25 }}
            shadows
            gl={{ preserveDrawingBuffer: true }}>
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Computers isMobile={isMobile} />
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

export default ComputersCanvas;
