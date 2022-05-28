import * as THREE from 'three';
import { useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useCamera } from '@react-three/drei';
import React, { useRef } from 'react';
import { useGesture } from '@use-gesture/react';
import { useGLTF } from '@react-three/drei';
import { useSpring, animated, config } from '@react-spring/three';
import { useStore } from '../state';

export default function sdcard(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/sdcard.glb');
  const cam = props.cam;

  const startDragging = useStore((state) => state.startDragging);
  const stopDragging = useStore((state) => state.stopDragging);

  const { size } = useThree();
  const initialScale = [30, 30, 30];
  const initialPos = [size.width / 2 - 100, size.height / 2 - 410, -300];
  const initialRot = [0.3, -4, -3];

  const [spring, set] = useSpring(() => ({
    scale: [30, 30, 30],
    position: initialPos,
    rotation: initialRot,
    config: { friction: 10 },
  }));

  const bind = useGesture(
    {
      onDrag: ({ down, offset: [xa, ya] }) => {
        startDragging('SDCard');
        set({
          position: [
            xa + size.width / 2 - 100,
            -ya + size.height / 2 - 410,
            -300,
          ],
          rotation: [-xa / 100, 0, xa / 300],
          scale: [40, 40, 40],
        });
      },
      onDragEnd: () => {
        stopDragging();
        set({
          position: initialPos,
          rotation: initialRot,
          scale: initialScale,
        });
      },
    },
    {
      drag: {
        from: () => {
          return [0, 0, 0]; //reset the offset
        },
      },
    }
  );

  return (
    <>
      <animated.group {...props} {...spring} {...bind()} dispose={null}>
        <group scale={[0.05, 1.45, 1]}>
          <mesh
            castShadow
            raycast={useCamera(cam)}
            receiveShadow
            geometry={nodes.Cube_1.geometry}
            material={materials.Material}
          />
          <mesh
            castShadow
            raycast={useCamera(cam)}
            receiveShadow
            geometry={nodes.Cube_2.geometry}
            material={materials['Material.001']}
          />
        </group>
      </animated.group>
    </>
  );
}

useGLTF.preload('/sdcard.glb');
