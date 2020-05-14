import React from 'react'
import { FavsWithQuery } from '../container/GetFavorites'

import { Layout } from '../components/Layout/index'
// Le quitamos el nombre y lo exportamos asi para que pueda hacer que no renderize mientras no se usa, para mas informacion ir a app.js
export default () => (
  <>
    <Layout title='Favs' subtitle='Aqui puedes encontrar tus favoritos.'>
      <FavsWithQuery />
    </Layout>
  </>
)
