import React from 'react'
import { PhotoCard } from '../components/PhotoCard'

import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

const GET_SINGLE_PHOTO = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      liked
      userId
    }
  }
`

export const ListOfPhotoCardsWithQuery = ({ categoryId }) => (
  <Query query={GET_SINGLE_PHOTO} variables={{ categoryId }}>
    {
      ({ loading, error, data }) => {
        if (loading) return <p>Loading..</p>
        if (error) return <p>Error</p>
        const { photo = {} } = data
        return <PhotoCard {...photo} />
      }
    }
  </Query>
)
