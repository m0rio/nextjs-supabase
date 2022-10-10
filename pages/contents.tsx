import { LogoutIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'
import React from 'react'
import { Layout } from '../components/Layout'
import { supabase } from '../utils/supabase'

const Contents = () => {
  const router = useRouter()
  const signOut = () => {
    supabase.auth.signOut()
  }
  return (
    <Layout title="Notes">
      <LogoutIcon
        className="mb-6 h-6 w-6 cursor-pointer text-blue-500"
        onClick={signOut}
      />
    <button className='mb-3 text-xs' onClick={() => router.push('/dashboard')}>
      dashboard →
    </button>
    <br/>
    <button className='mb-3 text-xs' onClick={() => router.push('/notes')}>
      notes →
    </button>
    </Layout>
  )
}

export default Contents