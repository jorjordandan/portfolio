import { useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useCamera } from '@react-three/drei';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useSpring, animated, config } from '@react-spring/three';

export const InvPuzzleBox = (props) => {
  const group = useRef();
  const [zoomed, setZoomed] = useState(false);
  const { nodes, materials } = useGLTF('/InvPuzzlebox.glb');
  const hinge = useRef();
  const { size } = props;

  useFrame(() => {
    if (zoomed) {
      group.current.quaternion.setFromRotationMatrix(props.matrix);
    }
  });

  const { scale, position, rotation } = useSpring({
    scale: zoomed ? 250 : 45,
    position: zoomed ? [0, 0, -300] : props.position,
    rotation: zoomed ? [0.2, 0.5, 0] : [0.2, 0.5, 0],
    config: { mass: 0.2, friction: 2, tension: 23 },
  });

  const sphere = useSpring({
    scale: zoomed ? 10 : 1,
    position: zoomed
      ? [0, 0, -400]
      : [size.width / 2 - 100, size.height / 2 - 100, -300],
    config: { mass: 0.2, friction: 2, tension: 23 },
  });

  const RingOne = () => {
    return (
      <mesh
        scale={100}
        castShadow
        receiveShadow
        geometry={nodes.lower_disk.geometry}
        material={materials.Gray}
        // position={[0, 0.51, 1]}
        position={[size.width / 2 - 100, size.height / 2 - 300, -200]}
        rotation={[0.4, 0.5, 0.4]}
      />
    );
  };

  const RingTwo = () => {
    return (
      <mesh
        scale={100}
        castShadow
        receiveShadow
        geometry={nodes.upper_disk.geometry}
        material={materials['Gray.001']}
        position={[size.width / 2 - 100, size.height / 2 - 400, -200]}
        rotation={[0.4, 0.5, 0.4]}
      />
    );
  };

  const clickHandler = (e) => {
    e.stopPropagation();
    console.log('clicked the box');
    setZoomed(!zoomed);
  };

  const hingeHandler = (e) => {
    e.stopPropagation();
    console.log('clicked the top');
  };
  const { cam } = props;

  return (
    <>
      <RingOne />
      <RingTwo />
      <animated.group
        {...props}
        scale={scale}
        position={position}
        dispose={null}
        ref={group}
      >
        <mesh
          castShadow
          receiveShadow
          raycast={useCamera(cam)}
          geometry={nodes.Cube001.geometry}
          material={nodes.Cube001.material}
          onClick={(e) => clickHandler(e)}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve021.geometry}
          material={nodes.Curve021.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve024.geometry}
          material={nodes.Curve024.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve027.geometry}
          material={nodes.Curve027.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve028.geometry}
          material={nodes.Curve028.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017.geometry}
          material={nodes.Cylinder017.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder018.geometry}
          material={nodes.Cylinder018.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.hingle.geometry}
          material={nodes.hingle.material}
          position={[-0.04, 0.92, -0.87]}
          // rotation={[-0.4, 0, 0]} //it works!
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.bottom_blocker.geometry}
            material={nodes.bottom_blocker.material}
            position={[0, 0.47, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.center_pin.geometry}
            material={nodes.center_pin.material}
            position={[0, 0.54, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Curve025.geometry}
            material={nodes.Curve025.material}
            position={[0.03, 0.48, 0.72]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Curve026_1.geometry}
            material={nodes.Curve026_1.material}
            position={[-0.03, 0.48, 1.71]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Curve031.geometry}
            material={nodes.Curve031.material}
            position={[-0.65, 0.48, 0.95]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Curve032_1.geometry}
            material={nodes.Curve032_1.material}
            position={[0.34, 0.48, 0.95]}
          />
          <mesh
            castShadow
            receiveShadow
            raycast={useCamera(cam)}
            geometry={nodes.lid.geometry}
            material={nodes.lid.material}
            position={[0, 0.24, 1]}
            ref={hinge}
            onClick={(e) => hingeHandler(e)}
          />

          <mesh
            castShadow
            receiveShadow
            geometry={nodes.rim.geometry}
            material={nodes.rim.material}
            position={[0, 0.51, 1]}
          />
        </mesh>
      </animated.group>
      <animated.mesh
        scale={sphere.scale}
        position={sphere.position}
        raycast={useCamera(cam)}
        onClick={(e) => e.stopPropagation()} //this works
      >
        <sphereGeometry args={[-100, 16, 16]} />
        <meshStandardMaterial color={zoomed ? 'hotpink' : 'white'} />
      </animated.mesh>
    </>
  );
};

useGLTF.preload('/InvPuzzlebox.glb');
