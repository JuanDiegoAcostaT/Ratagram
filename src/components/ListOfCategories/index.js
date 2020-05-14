import React, { useState, useEffect } from 'react'
import { Category } from '../Category/index'
import { List, Item } from './styles'
import { Loading } from '../Loading/index'

// import { categorie as mockCategories } from '../../../api/db.json'
// LO DE ABAJO CON EL USEEFFECT Y EL USESTATE REEMPLAZA ESTE PEDAZITO DE CODIGO DE ARRIBA (CUSTON HOOK)

// AQUI HAGO UN CUSTOM HOOK QUE REEMPLAZA LA FUNCION DE TRAER LOS DATOS

const useCategorieData = () => {
  const [categories, setCategories] = useState([])
  // ESTE ES EL ESTADO INICIAL DEL HOOK EL CUAL PARTE DE LISTOFCATEGORIES

  const [isLoading, setIsLoading] = useState(false)

  // Cuando empecemos a pedir los datos setIsLoading sera true
  useEffect(function () {
    // Y AQUI ABAJO HAGO EL FETCH DE DATOS
    setIsLoading(true)
    window.fetch('https://ratagram-server.now.sh/categories')
      .then(response => response.json())
      .then(response => {
        setCategories(response)
        setIsLoading(false)
        // Cuando tengamos los datos el setIsLoading sera false
      })
  }, [])
  return { categories, isLoading }
  // TODOS LOS HOOKS TIENE QUE DEVOLVER ALGO
}

const ListOfCategoriesComponent = () => {
// VOY HA HACER USO DEL HOOK DE ARRIBA

  const { categories, isLoading } = useCategorieData()

  const [showFixed, setShowFixed] = useState(false)

  //                     ESTO DE ABAJO LO PUSE EN UN CUSTON HOOK QUE ESTA ARRIBA NOMBRADO COMO USE CATEGORIEDATA

  // const [categories, setCategories] = useState([])
  // SE PONE UN ARRAY VACIO PORQUE SE DA POR HECHO QUE LOS DATOS VAN A VENIR EN  UN ARRAY ENTONCES ASI , NO SE ROMPE EL CODIGO CUANDO SE IMPRIMEN LOS DATOS EN PANTALLA
  // ESTO DE ACA ARRIBA ES PARA HACER LA FUNCION DE ESCUCHAR EL SCROLL DEL USUARIO CUANDO BAJE POR LA PANTALLA
  // useEffect(function () {
  //   window.fetch('https://ratagram.now.sh/categories')
  //     .then(response => response.json())
  //     .then(response => {
  //       setCategories(response)
  //     })
  // }, [])
  // EL ARRAY VACIO ARRIBITA QUIERE DECIR QUE ESA FUNCION SE EJECUTARA JUSTAMENTE CUANDO EL COMPOENENTE SE MONTE
  // CUANDO LE PONEMOS ESO , SE HACEME AL componentDidMount() en clases.

  useEffect(function () {
    const onScroll = (event) => {
      // LLAMAMOS LA FUNCION ONSCROLL QUE DETECTA UN EVENTO PARA DESPUES SER LLAMADO
      const newShowFixed = window.scrollY > 200
      // ESTAMOS HACIENDO LA LOGICA DE EL SCROLL QUE NOS DICE QUE DESPUES DE 200 ESPACIOS SE VA A EJECUTAR LA FUNCION DE ABAJO
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
      // INTERSECTION OBSERVER QUE NOS DICE QUE SI SHOWFIXED ES FALSO ENTONCES ACTIVA EL INTERSECTION OBSERVER DE ARRIBA Y CAMBIA EL STATE DEL SHOWFIXED PARA ACTIVARLO
    }

    document.addEventListener('scroll', onScroll)
    // AQUI ACTIVAMOS LA FUNCION ONSCROLL POR MEDIO DE JS

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])
  // ESTO DE ACA ARRIBA ES PARA EVITAR QUE LA FUNCION SE SIGA EJECUTANDO Y LIMPIAR EL STACK cada que se renderize Y SE LE AGREGA LA DEPENDENCIA PARA HACER QUE EL EFECTO SE SIGA EJECUTANDO NORMAL

  // const renderList = (fixed) => (
  //   // ESTO DE ACA ABAJO QUIERE DECIR QUE SI FIXED ES TRUE ENTONCES EN EL CLASSNAME COLOCALE (FIXED), PERO SI NO ES TRUE, ENTONCES COLOCALE UN STRING VACIO('')
  //   <List className={fixed ? 'fixed' : ''}>
  //     {categories.map((category) => <Item key={category.id}><Category {...category} /></Item>)}
  //   </List>
  // )
  // NO UTILIZO LA DE ARRIBA PORQUE USANDO STYLECOMPONENTS ES MEJOR USAR PROPS COMO ABAJO
  const renderList = (fixed) => (

    <List fixed={fixed}>
      {
        isLoading
          ? <Item key='isLoading'><Loading /><Category /></Item>
          : categories.map((category) => <Item key={category.id}><Category {...category} path={`/pet/${category.id}`} /></Item>)
      }

    </List>
  )

  // if (isLoading) {
  //   return 'cargando...'
  // }
  // ESTO DE AQUI ARRIBA LO HAGO MEJOR EN  RENDERLIST

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
      {/* //AQUI LE DECIMOS A RENDERLIST() QUE SI SHOWFIXED ES VERDAD ENTONCES MUESTRAME EL RENDERLIST CON ESE VALOR TRUE QUE ES PARA MOSTRAR LAS CATEGORIAS FIJAS EN LA PANTALLA */}
    </>
  )
}

export const ListOfCategories = React.memo(ListOfCategoriesComponent)
// Esto de memo es para evitarque se rendericen las categories si las props que recibe no son diferentes, eso lo podemos evr cuando nso emtemos en modo desarrollo
