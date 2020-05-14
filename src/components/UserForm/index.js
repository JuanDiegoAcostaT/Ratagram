/* eslint-disable react/jsx-handler-names */
import React from 'react'
import { useInputValue } from '../../components/Hooks/useInputValue'
import { Form, Input, Button, Title, Error } from './styles'

export const UserForm = ({ onSubmit, title, error, disabled }) => {
//   const [email, SetEmail] = useState('')
//   const [password, SetPassword] = useState('')
// Esto de aca arriba lo quito porque estmos usando un CUSTOM HOOK abajo de los imports
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        {/* <input type='text' value={email.value} onChange={email.onChange} placeholder='Email' />
            <input type='password' value={password.value} onChange={password.onChange} placeholder='Password' /> */}

        {/* //Esto es un caso especila, dado a que lo de arriba esta usando el mismo valory el mismo prop, podemos usar rest operator y decirle a react que nos traiga todos los valores de ese CUSTOM HOOK  como hacemos abajo */}
        <Input disabled={disabled} type='text' {...email} placeholder='Email' />
        <Input disabled={disabled} type='password' {...password} placeholder='Password' />

        {/* <input type='text' value={email} onChange={e => SetEmail(e.target.value)} placeholder='Email' />
            <input type='password' value={password} onChange={e => SetPassword(e.target.value)} placeholder='Password' /> */}
        {/* //Eso de aca arriba es la forma en la que estaba antes de usar el custom hook */}
        <Button>
          {title}
        </Button>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  )
}
