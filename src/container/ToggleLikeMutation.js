/* eslint-disable react/jsx-closing-tag-location */
import React from 'react'
// import { FavButton } from '../components/FavButton'

import { gql } from 'apollo-boost'
import { Mutation } from 'react-apollo'

const TOGGLE_LIKE_MUTATION = gql`
mutation likePhoto($input: LikePhoto!) {
  likePhoto(input: $input) {
    id,
    liked,
    likes
  }
}`

export const ToggleLikeMutation = ({ children }) => {
  return <Mutation mutation={TOGGLE_LIKE_MUTATION}>
    {children}
  </Mutation>
}
