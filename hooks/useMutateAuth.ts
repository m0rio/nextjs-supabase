import { useState } from "react"
import { useMutation } from "react-query"
import { supabase } from "../utils/supabase"

export const useMutateAuth = () => {
  const [email, setEmail] = useState('')
  const [ password, setPassword] = useState('')
  const reset = () => {
      setEmail('')
      setPassword('')
  }
  const loginMutation = useMutation(
    async () => {
      const { error } = await supabase.auth.signIn({ email, password })
      if (error) throw new Error(error.message)
    },
    {
      onError: (err: any) => {
        alert(err.message)
        reset()
      }
    }
  )
  const registerMutaiton = useMutation(
    async () => {
      const { error } = await supabase.auth.signUp({ email, password })
      if (error) throw new Error(error.message)
    },
    {
      onError: (err: any) => {
        alert(err.message)
        reset()
      }
    }
  )
  return {
    email,
    setEmail,
    password,
    setPassword,
    reset,
    loginMutation,
    registerMutaiton
  }
}