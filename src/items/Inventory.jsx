import { useMemo, useRef } from 'react';
import { Scene, Matrix4 } from 'three';
import { useFrame, useThree, createPortal } from '@react-three/fiber';
import { OrthographicCamera, useCamera } from '@react-three/drei';
import { useStore } from '../state';
import { InvPuzzleBox } from './InvPuzzleBox';
import SDCard from './SDCard';

export default function Inventory() {
  const { gl, scene, camera, size } = useThree();
  const virtualScene = useMemo(() => new Scene(), []);
  const virtualCam = useRef();
  const matrix = new Matrix4();
  const sdCard = useStore((state) => state.sdCard);

  useFrame(() => {
    matrix.copy(camera.matrix).invert();
    gl.autoClear = true;
    gl.render(scene, camera);
    gl.autoClear = false;
    gl.clearDepth();
    gl.render(virtualScene, virtualCam.current);
  }, 1);

  return createPortal(
    <>
      <OrthographicCamera
        ref={virtualCam}
        makeDefault={false}
        position={[0, 0, 500]}
        far={5000}
      />

      <InvPuzzleBox
        matrix={matrix}
        cam={virtualCam}
        position={[size.width / 2 - 100, size.height / 2 - 100, -200]}
        rotation={[0.2, 0.5, 0]}
      />
      <SDCard
        matrix={matrix}
        cam={virtualCam}
        position={[size.width / 2 - 100, size.height / 2 - 360, -200]}

        visible={sdCard.collected && !sdCard.installed}
      />

      <ambientLight intensity={2} />
      <directionalLight position={[10, 100, 10]} intensity={3} />
    </>,
    virtualScene
  );
}
