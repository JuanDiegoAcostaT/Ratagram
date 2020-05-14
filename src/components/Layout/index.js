import React from 'react'
import { Div, Title, Subtitle } from './styles'
import { Helmet } from 'react-helmet'
import { IfOffline } from '../IfOffline/index'

export const Layout = ({ children, title, subtitle }) => {
  return (
    <>
      <Helmet>
        {title && <title>{title} | Ratagram</title>}
        {subtitle && <meta name='description' content={subtitle} />}
      </Helmet>
      <Div>
        <IfOffline />
        {title && <Title>{title}</Title>}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        {children}
      </Div>
    </>
  )
}
