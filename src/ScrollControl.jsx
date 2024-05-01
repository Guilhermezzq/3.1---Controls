import { Scroll, ScrollControls } from "@react-three/drei";



const ScrollControl = () => {



  return (
    <>
    <ScrollControls
    pages={3} // Decidir quando podemos rolar usando esse atributo, valor padrão = 1
  
    >

        <Scroll>
            {/* Aqui podemos decidir se queremos adicionar conteúdo 3D, mash/malhas ou modelos, e conteúdo HTML com div e img */}

            


        </Scroll>
        
    </ScrollControls>
    </>
  )
}

export default ScrollControl;
