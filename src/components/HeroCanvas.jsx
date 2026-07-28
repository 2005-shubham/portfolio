import { Canvas } from "@react-three/fiber"
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei"

function AnimatedShape() {
  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <Sphere args={[1.4, 100, 200]} scale={2}>
        <MeshDistortMaterial
          color="#a855f7"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.2}
          metalness={0.3}
        />
      </Sphere>
    </Float>
  )
}

function HeroCanvas() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
        <AnimatedShape />
      </Canvas>
    </div>
  )
}

export default HeroCanvas