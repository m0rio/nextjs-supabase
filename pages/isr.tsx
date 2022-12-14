import Link from 'next/link'
import { useRouter } from 'next/router'
import { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { Layout } from '../components/Layout'
import { supabase } from '../utils/supabase'
import { Task, Notice } from '../types/types'

export const getStaticProps: GetStaticProps = async () => {
    console.log('getStaticProps/ssg invoke')

    const { data: tasks} = await supabase
        .from('todos')
        .select('*')
        .order('created_at', { ascending: true })
    const { data: notices} = await supabase
        .from('notices')
        .select('*')
        .order('created_at', { ascending: true })
    
    return{ props: { tasks, notices}, revalidate: 5 }
}

type StaticProps = {
    tasks: Task[]
    notices: Notice[]
}

const Isr: NextPage<StaticProps> = ({ tasks, notices }) => {
  return (
    <Layout title='ISR'>
            <p className='mb-3 text-indigo-500'>ISR</p>
            <ul className='mb-3'>
                {tasks.map((task) => {
                    return (
                        <li key={task.id}>
                            <p>{task.title}</p>
                        </li>
                    )
                })}
            </ul>
            <ul className='mb-3'>
                {notices.map((notices) => {
                    return (
                        <li key={notices.id}>
                            <p>{notices.content}</p>
                        </li>
                    )
                })}
            </ul>
        </Layout>
  )
}

export default Isr