import styled from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const Article = styled.article`
    min-height: 200px;
`
// LE PONEMOS ESTA ALTURA AL ARTICLE PARA QUE PUEDA LEERLO BIEN EL INTERSECTION OBSERVER

export const ImgWrapper = styled.div`
    border-radius : 10px;
    display: block;
    height: 0;
    overflow: hidden;
    padding: 56.25% 0 0 0;
    position: relative;
    width: 100%;
`

export const Img = styled.img`
     ${fadeIn()};
     box-shadow: 0px 10px 14px rgba(0, 0, 0, .2);
     height: 100%;
     object-fit: cover;
     position: absolute;
     top: 0;
     width: 100%;

`

export const Div = styled.div`
    display: flex;
    align-items:center;
    justify-content: space-evenly;
`

export const Share = styled.a`
    background-color: #b1a;
    color: #fff;
    width: 100px;
    text-align:center
`
