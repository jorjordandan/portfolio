/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Office(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/office_base.glb");

  return (
    <group ref={group} {...props} dispose={null}>
      <group
        position={[-1.25, 0.01, -0.6]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.12, 0.12, 0.01]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bin_Bin_Shader_0_1.geometry}
          material={materials.Bin_Shader}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bin_Bin_Shader_0_2.geometry}
          material={materials.Bin_Metal}
        />
      </group>
      <group position={[-0.32, 1.37, -1.23]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Poster_#2_Poster_Border_Black_0"].geometry}
          material={materials.Poster_Border_Black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Poster_#2_Poster_White_Border_0"].geometry}
          material={materials.Poster_White_Border}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Poster_#2_Art_01_0"].geometry}
          material={materials.Art_01}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.desk_legs_bottom.geometry}
        material={materials.Black_Plastic}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.side_table.geometry}
        material={nodes.side_table.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Book_Shelf_Metal_Black_0.geometry}
        material={materials.Metal_Black}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Small_Plant_Plant_Shader_0.geometry}
        material={materials["Plant_Shader.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Large_Plant_Plant_Leaf_Shader_0.geometry}
        material={nodes.Large_Plant_Plant_Leaf_Shader_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Large_Plant_Plant_Leaf_Shader_0001.geometry}
        material={nodes.Large_Plant_Plant_Leaf_Shader_0001.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Book_Shelf_Desk_Oak_0.geometry}
        material={materials["Desk_Oak.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube043.geometry}
        material={nodes.Cube043.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube043_1.geometry}
        material={nodes.Cube043_1.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube045.geometry}
        material={nodes.Cube045.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube045_1.geometry}
        material={nodes.Cube045_1.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Large_Plant_Pot_Shader_0.geometry}
        material={nodes.Large_Plant_Pot_Shader_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Large_Plant_Pot_Shader_0001.geometry}
        material={nodes.Large_Plant_Pot_Shader_0001.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floorboards.geometry}
        material={nodes.floorboards.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.walls.geometry}
        material={nodes.walls.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor.geometry}
        material={materials.carpet}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Book051_Book_Procedural_Shader_0001.geometry}
        material={nodes.Book051_Book_Procedural_Shader_0001.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Book050_Book_Procedural_Shader_0001.geometry}
        material={nodes.Book050_Book_Procedural_Shader_0001.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Book049_Book_Procedural_Shader_0001.geometry}
        material={nodes.Book049_Book_Procedural_Shader_0001.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Book048_Book_Procedural_Shader_0.geometry}
        material={nodes.Book048_Book_Procedural_Shader_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Book047_Book_Procedural_Shader_0.geometry}
        material={nodes.Book047_Book_Procedural_Shader_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Book046_Book_Procedural_Shader_0.geometry}
        material={nodes.Book046_Book_Procedural_Shader_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Book045_Book_Procedural_Shader_0.geometry}
        material={nodes.Book045_Book_Procedural_Shader_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Book044_Book_Procedural_Shader_0.geometry}
        material={nodes.Book044_Book_Procedural_Shader_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Book043_Book_Procedural_Shader_0.geometry}
        material={nodes.Book043_Book_Procedural_Shader_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Book042_Book_Procedural_Shader_0.geometry}
        material={nodes.Book042_Book_Procedural_Shader_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Book041_Book_Procedural_Shader_0.geometry}
        material={nodes.Book041_Book_Procedural_Shader_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Book040_Book_Procedural_Shader_0.geometry}
        material={nodes.Book040_Book_Procedural_Shader_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Book039_Book_Procedural_Shader_0001.geometry}
        material={nodes.Book039_Book_Procedural_Shader_0001.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Book038_Book_Procedural_Shader_0001.geometry}
        material={nodes.Book038_Book_Procedural_Shader_0001.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Book037_Book_Procedural_Shader_0001.geometry}
        material={nodes.Book037_Book_Procedural_Shader_0001.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Book036_Book_Procedural_Shader_0001.geometry}
        material={nodes.Book036_Book_Procedural_Shader_0001.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Book035_Book_Procedural_Shader_0001.geometry}
        material={nodes.Book035_Book_Procedural_Shader_0001.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Book034_Book_Procedural_Shader_0001.geometry}
        material={nodes.Book034_Book_Procedural_Shader_0001.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Book033_Book_Procedural_Shader_0001.geometry}
        material={nodes.Book033_Book_Procedural_Shader_0001.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Book032_Book_Procedural_Shader_0001.geometry}
        material={nodes.Book032_Book_Procedural_Shader_0001.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Book031_Book_Procedural_Shader_0001.geometry}
        material={nodes.Book031_Book_Procedural_Shader_0001.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Book030_Book_Procedural_Shader_0001.geometry}
        material={nodes.Book030_Book_Procedural_Shader_0001.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Book029_Book_Procedural_Shader_0001.geometry}
        material={nodes.Book029_Book_Procedural_Shader_0001.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Book025_Book_Procedural_Shader_0.geometry}
        material={nodes.Book025_Book_Procedural_Shader_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Book024_Book_Procedural_Shader_0.geometry}
        material={nodes.Book024_Book_Procedural_Shader_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Book023_Book_Procedural_Shader_0.geometry}
        material={nodes.Book023_Book_Procedural_Shader_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Book022_Book_Procedural_Shader_0.geometry}
        material={nodes.Book022_Book_Procedural_Shader_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Book002_Book_Procedural_Shader_0.geometry}
        material={nodes.Book002_Book_Procedural_Shader_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Book001_Book_Procedural_Shader_0.geometry}
        material={nodes.Book001_Book_Procedural_Shader_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Books_Book_Procedural_Shader_0002.geometry}
        material={nodes.Books_Book_Procedural_Shader_0002.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Book_stack.geometry}
        material={nodes.Book_stack.material}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book029_Book_Procedural_Shader_0.geometry}
          material={nodes.Book029_Book_Procedural_Shader_0.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book030_Book_Procedural_Shader_0.geometry}
          material={nodes.Book030_Book_Procedural_Shader_0.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book031_Book_Procedural_Shader_0.geometry}
          material={nodes.Book031_Book_Procedural_Shader_0.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book032_Book_Procedural_Shader_0.geometry}
          material={nodes.Book032_Book_Procedural_Shader_0.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book033_Book_Procedural_Shader_0.geometry}
          material={nodes.Book033_Book_Procedural_Shader_0.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book034_Book_Procedural_Shader_0.geometry}
          material={nodes.Book034_Book_Procedural_Shader_0.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book035_Book_Procedural_Shader_0.geometry}
          material={nodes.Book035_Book_Procedural_Shader_0.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book036_Book_Procedural_Shader_0.geometry}
          material={nodes.Book036_Book_Procedural_Shader_0.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book038_Book_Procedural_Shader_0.geometry}
          material={nodes.Book038_Book_Procedural_Shader_0.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book039_Book_Procedural_Shader_0.geometry}
          material={nodes.Book039_Book_Procedural_Shader_0.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book049_Book_Procedural_Shader_0.geometry}
          material={nodes.Book049_Book_Procedural_Shader_0.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book050_Book_Procedural_Shader_0.geometry}
          material={nodes.Book050_Book_Procedural_Shader_0.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book051_Book_Procedural_Shader_0.geometry}
          material={nodes.Book051_Book_Procedural_Shader_0.material}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Books_Book_Procedural_Shader_0.geometry}
        material={nodes.Books_Book_Procedural_Shader_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Books_Book_Procedural_Shader_0001.geometry}
        material={nodes.Books_Book_Procedural_Shader_0001.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Book037_Book_Procedural_Shader_0.geometry}
        material={nodes.Book037_Book_Procedural_Shader_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.owl.geometry}
        material={materials.gufo02}
      />
    </group>
  );
}

useGLTF.preload("/office_base.glb");

// export default function Base(props) {
//   const group = useRef();
//   const { nodes, materials } = useGLTF("/office_base.glb");
//   const setText = useStore(state => state.setText);
//   return (
//     <group ref={group} {...props} dispose={null}>
//     <group
//       position={[-1.33, 0.59, -0.99]}
//       rotation={[-Math.PI / 2, 0, -0.52]}
//       scale={[0.64, 0.64, 0.64]}
//     >
//       <group position={[-0.09, -1.79, 0]}>
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Large_Plant_Plant_Leaf_Shader_0_1.geometry}
//           material={nodes.Large_Plant_Plant_Leaf_Shader_0_1.material}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Large_Plant_Plant_Leaf_Shader_0_2.geometry}
//           material={nodes.Large_Plant_Plant_Leaf_Shader_0_2.material}
//         />
//       </group>
//       <group position={[2.91, 1.07, 0]} rotation={[0, 0, 3.03]}>
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Large_Plant_Plant_Leaf_Shader_0001_1.geometry}
//           material={nodes.Large_Plant_Plant_Leaf_Shader_0001_1.material}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Large_Plant_Plant_Leaf_Shader_0001_2.geometry}
//           material={nodes.Large_Plant_Plant_Leaf_Shader_0001_2.material}
//         />
//       </group>
//     </group>

//     <group
//       position={[0.87, 0.86, -0.95]}
//       rotation={[-Math.PI / 2, -0.01, 0]}
//       scale={[0.95, 0.95, 0.95]}
//     >
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Books_Book_Procedural_Shader_0.geometry}
//         material={nodes.Books_Book_Procedural_Shader_0.material}
//         position={[-0.43, 0.08, 0.84]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Books_Book_Procedural_Shader_0001.geometry}
//         material={nodes.Books_Book_Procedural_Shader_0001.material}
//         position={[0, 0.08, 0.83]}
//         scale={[-1, 1, 1]}
//       />
//     </group>
//     <group position={[-0.32, 1.37, -1.23]} rotation={[-Math.PI / 2, 0, 0]}>
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes["Poster_#2_Poster_Border_Black_0"].geometry}
//         material={materials.Poster_Border_Black}
//         position={[0, 0, 0.37]}
//         onClick={() => setText(["It's my three daughters! They are the best."])}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes["Poster_#2_Poster_White_Border_0"].geometry}
//         material={materials.Poster_White_Border}
//         position={[0, 0, 0.37]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes["Poster_#2_Art_01_0"].geometry}
//         material={materials.Art_01}
//         position={[0, 0, 0.37]}
//       />
//     </group>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.desk_legs_bottom.geometry}
//       material={materials.Black_Plastic}
//     />
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.floor.geometry}
//       material={materials.carpet}
//     />
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.floorboards.geometry}
//       material={materials["Material.004"]}
//     />
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.side_table.geometry}
//       material={nodes.side_table.material}
//       position={[-1.37, 0.24, -0.83]}
//       scale={0.23}
//     />
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Plane003.geometry}
//       material={materials.wall}
//     />
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Plane003_1.geometry}
//       material={materials["wall.001"]}
//     />
//     <group position={[-1.71, 1.52, -1.12]} scale={2.58}>
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Cube043.geometry}
//         material={nodes.Cube043.material}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Cube043_1.geometry}
//         material={nodes.Cube043_1.material}
//       />
//     </group>
//     <group position={[0.25, 1.52, -1.12]} scale={2.58}>
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Cube045.geometry}
//         material={nodes.Cube045.material}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Cube045_1.geometry}
//         material={nodes.Cube045_1.material}
//       />
//     </group>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Book_stack.geometry}
//       material={nodes.Book_stack.material}
//       position={[-0.9, 1.65, -1.1]}
//       rotation={[1.57, 1.53, -3.14]}
//       scale={[1.4, 1.4, 1.4]}
//     >
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Book029_Book_Procedural_Shader_0.geometry}
//         material={nodes.Book029_Book_Procedural_Shader_0.material}
//         position={[0.01, 0.01, -0.26]}
//         scale={[0.85, 0.85, 0.85]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Book030_Book_Procedural_Shader_0.geometry}
//         material={nodes.Book030_Book_Procedural_Shader_0.material}
//         position={[0.01, 0, -0.23]}
//         scale={[0.93, 0.93, 0.93]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Book031_Book_Procedural_Shader_0.geometry}
//         material={nodes.Book031_Book_Procedural_Shader_0.material}
//         position={[0.01, 0, -0.21]}
//         scale={[0.89, 0.89, 0.89]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Book032_Book_Procedural_Shader_0.geometry}
//         material={nodes.Book032_Book_Procedural_Shader_0.material}
//         position={[0.01, 0, -0.18]}
//         scale={[0.71, 1, 1]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Book033_Book_Procedural_Shader_0.geometry}
//         material={nodes.Book033_Book_Procedural_Shader_0.material}
//         position={[0.01, 0.01, -0.16]}
//         scale={[0.94, 0.94, 0.94]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Book034_Book_Procedural_Shader_0.geometry}
//         material={nodes.Book034_Book_Procedural_Shader_0.material}
//         position={[0.01, 0, -0.14]}
//         scale={[0.74, 0.74, 0.74]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Book035_Book_Procedural_Shader_0.geometry}
//         material={nodes.Book035_Book_Procedural_Shader_0.material}
//         position={[0.01, 0, -0.12]}
//         scale={[0.72, 0.72, 0.72]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Book036_Book_Procedural_Shader_0.geometry}
//         material={nodes.Book036_Book_Procedural_Shader_0.material}
//         position={[0, 0, -0.1]}
//         scale={[0.77, 0.77, 0.77]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Book038_Book_Procedural_Shader_0.geometry}
//         material={nodes.Book038_Book_Procedural_Shader_0.material}
//         position={[0, 0, -0.05]}
//         scale={[0.93, 0.93, 0.93]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Book039_Book_Procedural_Shader_0.geometry}
//         material={nodes.Book039_Book_Procedural_Shader_0.material}
//         position={[0, 0, -0.03]}
//         scale={[0.89, 0.89, 0.89]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Book049_Book_Procedural_Shader_0.geometry}
//         material={nodes.Book049_Book_Procedural_Shader_0.material}
//         position={[-0.04, 0.03, -0.45]}
//         rotation={[0.01, 1.53, -0.33]}
//         scale={[0.88, 0.88, 0.88]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Book050_Book_Procedural_Shader_0.geometry}
//         material={nodes.Book050_Book_Procedural_Shader_0.material}
//         position={[-0.02, 0.03, -0.45]}
//         rotation={[0.01, 1.53, -0.14]}
//         scale={[0.85, 0.85, 0.85]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Book051_Book_Procedural_Shader_0.geometry}
//         material={nodes.Book051_Book_Procedural_Shader_0.material}
//         position={[0.01, 0.03, -0.46]}
//         rotation={[0.01, 1.53, -0.04]}
//         scale={[0.95, 0.95, 0.95]}
//       />
//     </mesh>
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.Book037_Book_Procedural_Shader_0.geometry}
//       material={nodes.Book037_Book_Procedural_Shader_0.material}
//       position={[-1.01, 1.65, -1.11]}
//       rotation={[1.57, 1.53, -3.14]}
//       scale={[1.19, 1.19, 1.19]}
//     />
//     <mesh
//       castShadow
//       receiveShadow
//       geometry={nodes.owl.geometry}
//       material={materials.gufo02}
//       position={[-0.83, 1.71, -1.08]}
//       rotation={[-Math.PI, 0, 0]}
//       scale={0.07}
//       onClick={() => setText(["Fifteen years ago I was housesitting and accidentally smashed this owl\'s mother."])}
//     />
//   </group>
//   );
// }

// useGLTF.preload("/office_base.glb");
