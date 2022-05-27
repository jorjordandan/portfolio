//cube imports
import { useMemo, useRef } from 'react';
import { Scene, Matrix4 } from 'three';
import { useFrame, useThree, createPortal } from '@react-three/fiber';
import { OrthographicCamera, useCamera } from '@react-three/drei';
// import { TestPlane } from './TestPlane';
import { InvPuzzleBox } from './InvPuzzleBox';

export default function Inventory() {
  const { gl, scene, camera, size } = useThree();
  const virtualScene = useMemo(() => new Scene(), []);
  const virtualCam = useRef();
  const ref = useRef();
  const matrix = new Matrix4();

  useFrame(() => {
    matrix.copy(camera.matrix).invert();
    // ref.current.quaternion.setFromRotationMatrix(matrix);
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
        // position={[(size.width / 10) * 8.5, (size.height / 10) * 8, 300]}
      />
      <InvPuzzleBox
        matrix={matrix}
        cam={virtualCam}
        position={[size.width / 2 - 100, size.height / 2 - 100, -200]}
        rotation={[0.2, 0.5, 0]}
      />

      {/* <mesh
        ref={ref}
        raycast={useCamera(virtualCam)}
        position={[size.width / 2 - 100, size.height / 2 - 100, -300]}
        onClick={() => console.log('sphere click')} //this works
      >
        {<sphereGeometry args={[-100, 16, 16]} />}
      </mesh> */}
      <ambientLight intensity={2} />
      <directionalLight position={[10, 100, 10]} intensity={3} />
    </>,
    virtualScene
  );
}
