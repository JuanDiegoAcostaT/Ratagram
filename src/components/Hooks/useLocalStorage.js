import { useState } from 'react'

export function useLocalStorage (key, initialValue) {
  const [storedValue, setValue] = useState(() => {
    // AQUI ABAJITO ESTAMOS EXTRALLENDO LOS DATOS DEL LOCALSTORAGE PARA PODER SETEAR EL ESTADO DEL LIKE

    try {
      const item = window.localStorage.getItem(key)
      console.log(key)
      return item !== null ? JSON.parse(item) : initialValue
    } catch (e) {
      return initialValue
    }
  })
  // ACA ABAJITO ESTAMOS GUARDANDO EL LIKE EN EL LOCALSTORAGE PARA QUE CUANDO SE RECARGUE LA PAGINA NO SE QUITE LA FUNCION DEL LIKED

  const setLocalStorage = value => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      setValue(value)
    } catch (e) {
      console.error(e)
    }
  }

  return [storedValue, setLocalStorage]
}
