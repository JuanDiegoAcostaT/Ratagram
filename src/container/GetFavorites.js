import React from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import { ListOfFavs } from '../components/ListOfFavs'
import { Loading } from '../components/Loading/index'

const GET_FAVS = gql`
query getFavs {
    favs{
      categoryId
      src
      likes
      userId
    }
  }
`

const renderProp = ({ loading, error, data }) => {
  if (loading) return <Loading />
  if (error) return <p>Error!</p>
  const { favs } = data

  return <ListOfFavs favs={favs} />
}

export const FavsWithQuery = () => (
  <Query query={GET_FAVS} fetchPolicy='network-only'>
    {renderProp}
  </Query>
)
