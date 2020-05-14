import { useEffect, useState, useRef } from 'react'

export function useNearScreen () {
  // ESTO DE ACA ABAJO SE USA PARA SACAR LA REFERENCXIA DE UN ELEMENTO EN EL DOM
  const element = useRef(null)
  const [show, setShow] = useState(false)
  // De esta manera de abajo hacemos una key unica en el local storage , si quieres saber mas por favor ve el componente listOfCategories

  useEffect(function () {
    // ACA LO QUE HACEMOS ES VALIDAR SI EL NAVEGADOR SOPORTA O NO EL USO DE INTERSECTION OBSERVER PARA SI NO , APLICARLO CON UNA PROMESA QUE LLAMAMOS

    Promise.resolve(
    // ACA ABAJO LO METO EN ESE 'importDinamico' PARA PODER HACER QUE EL INTERECTION OBSERVER LO SOPORTEN VARIOS  NAVEGADORESY QUE TENGAN SOPORTE

      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      const observer = new window.IntersectionObserver(function (entries) {
        // aca abajo llamamos al isIntersecting que viene del console.log()

        const { isIntersecting } = entries[0]
        if (isIntersecting) {
          setShow(true)
          observer.disconnect()
          // ESTAMOS DICIENDOLE AL OBSERVADOR QUE DEJE DE OBSERVAR PORQUE SOLO QUEREMOS QUE SE ACTUALICE UNA VEZ
        }
      })
      observer.observe(element.current)
      // ASI ACTIVAMOS Y LLAMAMOS EL OBSERVER /// EL CURRENT ES PORQUE ASI SALE EN EL CONSOLE.LOG
    })
  }, [element])

  return [show, element]
}
