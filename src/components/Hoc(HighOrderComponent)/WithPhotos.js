import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'
// gql NOS MANDA LAS QUERYS COMO UN STRING PARA QUE APOLLO ENTIENDA

// DE ESTA MANERA DE ABAJO ESTAMOS ENTRANDO MAS ADENTRO DE LOS DATOS

const GET_PHOTOS = gql`
query getPhotos($categoryId: ID){
  photos(categoryId: $categoryId){
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`

export const withPhotos = graphql(GET_PHOTOS)
