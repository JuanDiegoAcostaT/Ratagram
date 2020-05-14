/* eslint-disable handle-callback-err */
/* eslint-disable no-undef */
import React from 'react'
import { ImgWrapper, Img, Article, Div, Share } from './styles'
// import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
// import { useLocalStorage } from '../Hooks/useLocalStorage'
import { useNearScreen } from '../Hooks/useNearScreen'
import { FavButton } from '../FavButton/index'
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'
import { Link } from '@reach/router'

import PropTypes from 'prop-types'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  // ESTO DE ABAJO SE FUE PARA UN CUSTOM HOOK LLAMADO NEAR SCREEN

  // const element = useRef(null)

  // const [show, setShow] = useState(true)
  // De esta manera de abajo hacemos una key unica en el local storage , si queires saber mas por favor ve el componente listOfCategories

  //                         TODO ESTODE ABAJITO PERTENECE A LA CARPETA HOOKS
  // const key = `like-${id}`
  const [show, element] = useNearScreen()
  // const [liked, setLiked] = useLocalStorage(key, false)
  // const [liked, setLiked] = useState(() => {
  //   // AQUI ABAJITO ESTAMOS EXTRALLENDO LOS DATOS DEL LOCALSTORAGE PARA PODER SETEAR EL ESTADO DEL LIKE
  //   try {
  //     const like = window.localStorage.getItem(key)

  //     if (like === 'true') {
  //       return like
  //     }
  //     return false
  //   } catch (e) {
  //     return false
  //   }
  // })

  // ETO DE ARRIBA Y DE ABAJO SE VA PARA UN HOOK INDEPENDIENTE

  // useEffect(function () {
  //   // ACA LO QUE HACEMOS ES VALIDAR SI EL NAVEGADOR SOPORTA O NO EL USO DE INTERSECTION OBSERVER PARA SI NO , APLICARLO CON UNA PROMESA QUE LLAMAMOS
  //   Promise.resolve(
  //   // ACA ABAJO LO METO EN ESE 'importDinamico' PARA PODER HACER QUE EL INTERECTION OBSERVER LO SOPORTEN VARIOS  NAVEGADORESY QUE TENGAN SOPORTE
  //     typeof window.IntersectionObserver !==
  //      'undefined'
  //       ? window.IntersectionObserver
  //       : import('intersection-observer')
  //   ).then(() => {
  //     const observer = new window.IntersectionObserver(function (entries) {
  //       // aca abajo llamamos al isIntersecting que viene del console.log()
  //       const { isIntersecting } = [0]
  //       if (isIntersecting) {
  //         setShow(true)
  //         observer.disconnect()
  //         // ESTAMOS DICIENDOLE AL OBSERVADOR QUE DEJE DE OBSERVAR PORQUE SOLO QUEREMOS QUE SE ACTUALICE UNA VEZ
  //       }
  //     })

  //     // ASI ACTIVAMOS Y LLAMAMOS EL OBSERVER /// EL CURRENT ES PORQUE ASI SALE EN EL CONSOLE.LOG
  //     observer.observe(element.current)
  //   })
  // }, [element])
  const compartir = (e) => {
    e.preventDefault()
    if (!navigator.share) {
      alert('Tu browser no soporta la Web Share API')
      return
    }

    navigator.share({
      text: `${id}`,
      image: `${src}`,
      url: document.location.href
    })
      .then(() => alert('Contenido compartido!'))
      .catch((error) => alert('Hubo un error'))
  }

  return (
    <Article ref={element}>
      {
        show &&
          <>
            <Link to={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </Link>
            <Div>
              <ToggleLikeMutation>
                {

                  (toggleLike) => {
                    const handleFavButton = () => {
                      toggleLike({
                        variables: {
                          input: { id }
                        }
                      })
                    }
                    return <FavButton liked={liked} likes={likes} onClick={handleFavButton} />
                  }
                }
              </ToggleLikeMutation>

              <Share onClick={compartir}>Compartir</Share>
            </Div>
          </>
      }

    </Article>

  )
}

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: function (props, propName, componentName) {
    const propValue = props[propName]

    if (propValue === undefined) {
      return new Error(`${propName} value must be defined`)
    }

    if (propValue < 0) {
      return new Error(`${propName} value must be greater than 0`)
    }
  }
}
