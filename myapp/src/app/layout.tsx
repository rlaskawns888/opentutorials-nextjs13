import Link from 'next/link'
import type { Metadata } from 'next'
import { useEffect, useState } from 'react'

import './globals.css'
import { Control } from './Control'

export const metadata: Metadata = {
  title: 'Web tutorials',
  description: 'Generated by create next app',
}

type props = {
  children: React.ReactNode
}

export default async function RootLayout({ children } : props) {  
  // const resp = await fetch('http://localhost:9999/topics',{next: {revalidate: 0}});
  // const resp = await fetch('http://localhost:9999/topics',{ cache: 'no-store' });
  const resp = await fetch(`${process.env.API_URL}/topics`, {next: {revalidate: 0}});

  const topics = await resp.json();

  return (
    <html>
        <body>
          <p><Link href="/">WEB</Link></p>
          <ol>
            {
              topics.map((topic) => {
                  return <li key={topic.id}><Link href={`/read/${topic.id}`}>{topic.title}</Link></li>
              })
            }
          </ol>

          {children}
          
          <Control />

        </body>
    </html>
  )
}
