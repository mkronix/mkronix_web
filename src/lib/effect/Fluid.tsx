import { forwardRef, useEffect, useMemo } from 'react';
import { EffectProps } from '../types';
import { FluidEffect } from './FluidEffect';

export const Effect = forwardRef(function Fluid(props: EffectProps, ref) {
    const effect = useMemo(() => new FluidEffect(props), []);

    useEffect(() => {
        effect.state = { ...props };
        effect.update();
    }, [effect, props]);

    useEffect(() => {
        return () => {
            effect.dispose?.();
        };
    }, [effect]);

    return <primitive ref={ref} object={effect} dispose={null} />;
});
