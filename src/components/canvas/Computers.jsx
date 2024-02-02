/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */


import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={ 3 } />
      <pointLight intensity={ 55 } />
      <spotLight position={ [-20, 50, 10] } intensity={ 1 } angle={ 0.12 } />
      <primitive

        object={ computer.scene }
        scale={ isMobile ? 2.8 : 3.5 }
        position={ isMobile ? [0, -3, 0] : [0, -3.5, 0] }
        rotation={ [0, 31, 0] }
        penumbra={ 1 }
        intensity={ 12 }
        castShadow


      />
    </mesh>
  );
};
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width:500px)')
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])

  return (
    <Canvas

      frameloop="demand"
      shadows
      camera={ { position: [-2, -4, 15], fov: 85 } }
      gl={ { preserveDrawingBuffer: true } }
    >
      <Suspense >
        <OrbitControls
          autoRotate
          autoRotateSpeed={1.2}
          enableZoom={ false }
          maxPolarAngle={ Math.PI / 2 }
          minPolarAngle={ Math.PI / 2 }
        />
        <Computers isMobile={ isMobile } />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};
export default ComputersCanvas;
