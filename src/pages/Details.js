import React from 'react'
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery'
// import { Router } from '@reach/router'
import { Layout } from '../components/Layout/index'

export const Details = ({ detailId }) => {
  return (
    <Layout title={`Fotografia ${detailId}`}>
      <PhotoCardWithQuery id={detailId} />
    </Layout>
  )
}
