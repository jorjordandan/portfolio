import { useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useCamera } from "@react-three/drei";
import React, { useRef } from "react";
import { useGesture } from "@use-gesture/react";
import { useGLTF } from "@react-three/drei";
import { useSpring, animated, config } from "@react-spring/three";
import { useStore } from "../state";

const RingOne = ({ cam }) => {
  const { nodes, materials } = useGLTF("/lower_disk.glb");

  const startDragging = useStore((state) => state.startDragging);
  const stopDragging = useStore((state) => state.stopDragging);
  const ringOne = useStore((state) => state.ringOne);

  const { size } = useThree();
  const initialScale = [100, 100, 100];
  const initialPos = [size.width / 2 - 100, size.height / 2 - 260, -10];
  const initialRot = [0.4, 0.5, 0.4];

  const [spring, set] = useSpring(() => ({
    scale: [100, 100, 100],
    position: initialPos,
    rotation: initialRot,
    config: { friction: 10 },
  }));

  const bind = useGesture(
    {
      onDrag: ({ offset: [xa, ya] }) => {
        startDragging("RingOne");
        set({
          position: [
            xa + size.width / 2 - 100,
            -ya + size.height / 2 - 260,
            300,
          ],
          rotation: [-ya / size.height, -xa / size.width, 0],
          scale: [240, 240, 240],
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
    <animated.mesh
      {...spring}
      {...bind()}
      raycast={useCamera(cam)}
      castShadow
      receiveShadow
      geometry={nodes.lower_Disk.geometry}
      material={materials.Gray}
      visible={ringOne.collected && !ringOne.installed}
      // position={[0, 0.51, 1]}
      // position={[size.width / 2 - 100, size.height / 2 - 300, -200]}
      // rotation={[0.4, 0.5, 0.4]}
    />
  );
};

const RingTwo = ({ cam }) => {
  const { nodes, materials } = useGLTF("/InvPuzzlebox.glb");

  const startDragging = useStore((state) => state.startDragging);
  const stopDragging = useStore((state) => state.stopDragging);
  const ringTwo = useStore((state) => state.ringTwo);

  const { size } = useThree();
  const initialScale = [100, 100, 100];
  const initialPos = [size.width / 2 - 100, size.height / 2 - 330, -10];
  const initialRot = [0.4, 0.5, 0.4];

  const [spring, set] = useSpring(() => ({
    scale: [100, 100, 100],
    position: initialPos,
    rotation: initialRot,
    config: { friction: 10 },
  }));

  const bind = useGesture(
    {
      onDrag: ({ down, offset: [xa, ya] }) => {
        startDragging("RingTwo");
        set({
          position: [
            xa + size.width / 2 - 100,
            -ya + size.height / 2 - 330,
            300,
          ],
          rotation: [-ya / size.height, -xa / size.width, 0],
          scale: [240, 240, 240],
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
    <animated.mesh
      {...spring}
      {...bind()}
      raycast={useCamera(cam)}
      castShadow
      receiveShadow
      geometry={nodes.upper_disk.geometry}
      material={materials["Gray.001"]}
      visible={ringTwo.collected && !ringTwo.installed}
    />
  );
};

export const InvPuzzleBox = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("/InvPuzzlebox.glb");
  const lowerDisk = useGLTF("/lower_disk.glb");
  const [lowerRotation, setLowerRotation] = useState(2);
  const [upperRotation, setUpperRotation] = useState(2);
  const [boxOpen, setBoxOpen] = useState(false);

  const { cam } = props;
  const { size } = useThree();
  const hinge = useRef();

  const dragging = useStore((state) => state.dragging);
  const inventory = useStore((state) => state.inventory);
  const openInventory = useStore((state) => state.openInventory);
  const ringOne = useStore((state) => state.ringOne);
  const ringTwo = useStore((state) => state.ringTwo);
  const installRingOne = useStore((state) => state.installRingOne);
  const installRingTwo = useStore((state) => state.installRingTwo);
  const setText = useStore((state) => state.setText);
  const setWon = useStore((state) => state.setWon);
  const won = useStore((state) => state.won);
  const puzzle = useStore((state) => state.puzzle);
  const playSound = useStore((state) => state.playSound);
  const setWinWindowVisible = useStore((state) => state.setWinWindowVisible);

  const rotations = [0, Math.PI / 2, Math.PI, Math.PI + Math.PI / 2];

  if (lowerRotation + upperRotation === 0 && !won) {
    !boxOpen && setBoxOpen(true);
    !won && setWinWindowVisible(true);
    setWon();
    playSound('win');
    setText(["You did it :) Thanks for playing."]);
  }

  useFrame(() => {
    if (inventory.open && !dragging.inProgress) {
      group.current.quaternion.setFromRotationMatrix(props.matrix);
    }
  });

  const { scale, position, rotation } = useSpring({
    scale: inventory.open ? 250 : 45,
    position: inventory.open ? [0, 0, -300] : props.position,
    rotation: inventory.open ? [0.2, 0.5, 0] : [0.2, 0.5, 0],
    config: { mass: 0.2, friction: 2, tension: 23 },
  });

  const lowerRing = useSpring({
    rotation: [0, rotations[lowerRotation], 0],
    config: { mass: 0.2, friction: 2, tension: 23 },
  });

  const upperRing = useSpring({
    rotation: [0, rotations[upperRotation], 0],
    config: { mass: 0.2, friction: 2, tension: 23 },
  });

  const boxLid = useSpring({
    rotation: boxOpen ? [-2, 0, 0] : [0, 0, 0],
    config: { mass: 0.2, friction: 2, tension: 23 },
  });

  const sphere = useSpring({
    scale: inventory.open ? 10 : 1,
    position: inventory.open
      ? [0, 0, -500]
      : [size.width / 2 - 100, size.height / 2 - 100, -300],
    config: { mass: 0.2, friction: 2, tension: 23 },
  });

  const handleLowerRingClick = (e) => {
    e.stopPropagation();
    if (!ringOne.installed) return;
    if (lowerRotation === 3) {
      setLowerRotation(0);
      playSound("clickTwo");
    } else {
      setLowerRotation(lowerRotation + 1);
      playSound(lowerRotation % 2 === 1 ? "clickTwo" : "clickOne");
    }
  };

  const handleUpperRingClick = (e) => {
    e.stopPropagation();
    if (!ringTwo.installed) return;
    if (upperRotation === 3) {
      setUpperRotation(0);
      playSound("clickTwo");
    } else {
      setUpperRotation(upperRotation + 1);
      playSound(upperRotation % 2 === 1 ? "clickTwo" : "clickOne");
    }
  };

  const clickHandler = (e) => {
    e.stopPropagation();
    !inventory.open && openInventory();
    !inventory.open && setText(["I examine the box."]);
  };

  const hingeHandler = (e) => {
    e.stopPropagation();
  };

  const hoverHandler = () => {
    if (dragging.item === "RingOne") {
      installRingOne();
      playSound("click");
      setText(["hmm looks like something else needs to go here as well..."]);
    }

    if (dragging.item === "RingTwo" && ringOne.installed) {
      installRingTwo();
      playSound("click");
    } else if (dragging.item === "RingTwo" && !ringOne.installed) {
      setText(["Looks like something else needs to go on first...."]);
    }
  };

  return (
    <>
      <RingOne cam={cam} />
      <RingTwo cam={cam} />
      <animated.group
        {...props}
        scale={scale}
        position={position}
        dispose={null}
        ref={group}
        visible={puzzle.inInventory}
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
        <animated.mesh
          castShadow
          receiveShadow
          geometry={nodes.hingle.geometry}
          material={nodes.hingle.material}
          position={[-0.04, 0.92, -0.87]}
          rotation={boxLid.rotation}
        >
          <mesh
            castShadow
            receiveShadow
            raycast={useCamera(cam)}
            geometry={nodes.bottom_blocker.geometry}
            material={nodes.bottom_blocker.material}
            position={[0, 0.47, 1]}
            onPointerOver={hoverHandler}
          />

          <animated.mesh
            raycast={useCamera(cam)}
            castShadow
            receiveShadow
            geometry={nodes.upper_disk.geometry}
            material={materials["Gray.001"]}
            visible={ringTwo.installed}
            position={[0, 0.55, 1]}
            rotation={upperRing.rotation}
            onClick={(e) => handleUpperRingClick(e)}
          />

          <animated.mesh
            raycast={useCamera(cam)}
            castShadow
            receiveShadow
            geometry={lowerDisk.nodes.lower_Disk.geometry}
            material={materials.Gray}
            position={[0, 0.51, 1]}
            visible={ringOne.installed}
            rotation={lowerRing.rotation}
            onClick={(e) => handleLowerRingClick(e)}
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
        </animated.mesh>
      </animated.group>
      <animated.mesh
        scale={sphere.scale}
        position={sphere.position}
        raycast={useCamera(cam)}
        onClick={(e) => e.stopPropagation()}
        visible={puzzle.inInventory}
      >
        <sphereGeometry args={[-120, 16, 16]} />
        <meshStandardMaterial color={inventory.open ? "hotpink" : "white"} />
      </animated.mesh>
    </>
  );
};

useGLTF.preload("/InvPuzzlebox.glb");
