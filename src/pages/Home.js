/* eslint-disable no-unused-expressions */
import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'
import { Layout } from '../components/Layout'
// import { Helmet } from 'react-helmet'

const HomePage = ({ categoryId }) => (
  <>
    <Layout title='Tu app de Fotos de Ratas' subtitle='Con Ratagram puedes encontrar fotos de loos animales mas lindos del mundo'>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </Layout>
  </>
)

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.categoryId === props.categoryId
})
// LE ESTAMOS DICIENDO QUE LE TOCA RENDERICEZAR EN CASO DE QUE LAS NUEVAS PROPS NO SEAN IGUALES A LAS ACTUALES
// Esto de aca aarriba es para evitar que se renderice la home innecesaria mente.
