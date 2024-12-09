import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
        <a href="https://github.com/DUSHYANT2026" className="hover:underline"> 
           <img src={data.avatar_url} alt="Git picture" width={300}  />
        </a>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/DUSHYANT2026')
    return response.json()
}