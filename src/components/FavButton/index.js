/* eslint-disable react/jsx-indent */
/* eslint-disable indent */

import React from 'react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { Button } from './styles'

import PropTypes from 'prop-types'

export const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder
  //   { /* //ESTO QUIERE DECIR QUE CUANDO LE DEN CLICK AL BOTON SE VA A CAMBIAR AL VALOR CONTRARIO DE LIKED QUE ES FALSE Y QUEDA EN TRUE RESPECTIVAMENTE  Y SE GURADARA EN EL LOCALSTORAGE */ }

  return <Button onClick={onClick}>
    <Icon size='32px' /> {likes} likes!
         </Button>
}

FavButton.propTypes = {
  liked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}
