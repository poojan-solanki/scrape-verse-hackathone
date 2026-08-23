import * as THREE from "three";

/**
 * Converts Latitude and Longitude to 3D Cartesian coordinates (X, Y, Z)
 * using the exact vertex calculation formula from Three.js SphereGeometry.js.
 * Guarantees 100% pixel-perfect physical alignment with the Earth equirectangular texture.
 */
export function latLngToVector3(lat: number, lng: number, radius: number = 2.0): THREE.Vector3 {
  const phi = ((lng + 180) / 360) * (2 * Math.PI);
  const theta = ((90 - lat) / 180) * Math.PI;

  const x = -radius * Math.cos(phi) * Math.sin(theta);
  const y = radius * Math.cos(theta);
  const z = radius * Math.sin(phi) * Math.sin(theta);

  return new THREE.Vector3(x, y, z);
}
