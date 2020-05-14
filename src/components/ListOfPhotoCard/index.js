import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { List } from './styles'

export const ListOfPhotoCardComponent = ({ data: { photos = [] } }) => {
  return (
    <List>
      {photos.map((photo) => <PhotoCard key={photo.id} {...photo} />)}
    </List>
  )
}
