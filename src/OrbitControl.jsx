import { OrbitControls } from "@react-three/drei";


const OrbitControl = () => {



  return (
    <>
    <OrbitControls
    // enableDamping={true} // Quando para de girar a câmera demorará um pouco para parar como um delay
    // dampingFactor={0.05} // valor padrão = 0.05 , retarda o tempo de pausa do objeto
    // autoRotate={true} // valor padrão = false e gira o objeto automático quando true
    // autoRotateSpeed={8} // Velocidade de Rotação 

    // Fazer com que a câmera tenha limites no eixo horizontal
    maxAzimuthAngle={Math.PI / 2}
    minAzimuthAngle={-Math.PI / 2}

    // Limite inferior e superior a rotação vertical da câmera 
    maxPolarAngle={Math.PI / 4}
    minPolarAngle={-Math.PI / 4}
    />


    <mesh>
        <boxGeometry />
        <meshBasicMaterial color="red" />
    </mesh>
    </>
  )
}

export default OrbitControl;
