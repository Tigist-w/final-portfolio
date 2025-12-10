import React from "react";
import { Sphere } from "@react-three/drei";

export default function Model3D() {
  return (
    <Sphere args={[1, 32, 32]} position={[0, 1, 0]}>
      <meshStandardMaterial color="#3b82f6" />
    </Sphere>
  );
}
