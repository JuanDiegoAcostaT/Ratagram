import styled, { css } from 'styled-components'
import { fadeIn } from '../../styles/animation'

// export const List = styled.ul`
//     display:flex;
//     overflow: scroll;
//     width: 100%;
//     padding: 0px;
//     /* //ESTO DE ACA ABAJO QUIERE DECIR QUE CUANDO EL COMPOENENTE LIST TIENE LA CLASEFIXED LOS ESTILOS VAN A CAMBIAR COMO SE ESPECIFICAN */
//     &.fixed{
//         ${fadeIn()};
//         background: #fff;
//         border-radius: 60px;
//         box-shadow: 0 0 20px rgba(0, 0 , 0, 0.3);
//         left: 0;
//         margin: 0 auto;
//         max-width: 400px;
//         padding: 5px;
//         position: fixed;
//         right: 0;
//         top: -20px;
//         transform: scale(.5);
//         z-index: 1;
//     }
// `

// NO USO EL DE ARRIBA PORQUE LA PROPIEDAD FIXED LA ESTOY ENVIANDO POR PROPS ESNTONCES USO LA DE ABAJO

export const List = styled.ul`
    display:flex;
    overflow: scroll;
    width: 100%;
    padding: 0px;
    /* COLOCO LOS ESTILOS DE ESTA FORMA PORQUE VA A AFECTAR A LA LISTA DE CATEGORIAS QUE TIENE  LA PROPIEDAD FIXED EN TRU ENTONCES ESTA ES LA FORMA DE COLOCAR ESO CON STYLED COMPONENTS */
    ${props => props.fixed && css`
    {
         ${fadeIn()};
         background: #fff;
         border-radius: 60px;
        box-shadow: 0 0 20px rgba(0, 0 , 0, 0.3);
         left: 0;
         margin: 0 auto;
         max-width: 400px;
         padding: 5px;
         position: fixed;
         right: 0;
         top: -20px;
         transform: scale(.5);
         z-index: 1;
     }
    `}
`

export const Item = styled.li`
    padding: 0 8px;
`
