/* eslint-disable react/jsx-closing-tag-location */
import React, { useState, useEffect } from 'react'
import { Div, Adv } from './styles'

export const IfOffline = () => {
  const [onLine, setOnLine] = useState(true)

  const goOffline = () => setOnLine(false)
  const goOnline = () => setOnLine(true)

  useEffect(() => {
    if (!window) return
    window.addEventListener('online', goOnline)
    window.addEventListener('offline', goOffline)
  },
  window.removeEventListener('online', goOnline),
  window.removeEventListener('offline', goOffline)
  )

  if (onLine) {
    return null
  } else {
    return <Div>
      <Adv>Estas usando la aplicaion en modo Offline</Adv>
    </Div>
  }
}
