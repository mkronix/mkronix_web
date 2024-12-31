import { EffectComposer } from '@react-three/postprocessing';
import { Fluid } from '../../lib/Fluid';
import { ThreeTunnel } from './tunnel';
import { Canvas as R3fCanvas } from '@react-three/fiber';
import { Suspense } from 'react';

const RainBowCursor = ({ children }) => {
    return (
        <>
            <div
                style={{
                    overflow: "hidden",
                    top: 0,
                    left: 0,
                    position: 'fixed',
                    height: '100vh',
                    width: '100vw',
                    zIndex: 1,
                    pointerEvents: 'auto',
                    background: 'transparent',
                }}
            >
                <R3fCanvas>
                    <Suspense fallback={null}>
                        <ThreeTunnel.Out />
                    </Suspense>
                    <ThreeTunnel.In>
                        <EffectComposer>
                            <Fluid rainbow={true} />
                        </EffectComposer>
                    </ThreeTunnel.In>
                </R3fCanvas>
            </div >

            <div>{children}</div>
        </>
    );
};

export default RainBowCursor;
