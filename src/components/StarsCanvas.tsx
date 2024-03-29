import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
//@ts-ignore
import * as random from 'maath/random';
import CanvasLoader from './Loader';

const Stars: React.FC = (props) => {
    const ref = useRef(null);

    const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 });

    useFrame((_state, delta) => {
        //@ts-ignore
        ref.current.rotation.x -= delta / 10;
        //@ts-ignore
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points
                ref={ref}
                positions={sphere as Float32Array}
                stride={3}
                frustumCulled
                {...props}>
                <PointMaterial
                    transparent
                    color="#f272c8"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

const StarsCanvas: React.FC = () => {
    return (
        <div className="w-full h-auto absolute inset-0 z-[-1]">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Suspense fallback={<CanvasLoader />}>
                    <Stars />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default StarsCanvas;
