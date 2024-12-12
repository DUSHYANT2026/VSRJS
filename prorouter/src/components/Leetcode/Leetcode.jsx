import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Leetcode() {
    const data = useLoaderData();
  
    return (
      <div className='text-center m-4 bg-black rounded-2xl text-white p-4 text-3xl'>
        Leetcode Total Question Solved: 
        <ul>
          <li className='m-4'>
            Easy:
          </li>
          <li className='m-4'>
            Meduim:
          </li>
          <li className='m-4'>
            Hard:
          </li>
          <li className='m-4'>
            Total Number of Questions:
          </li>
        </ul>

        <a href="https://leetcode.com/Dushyant2026/" className="hover:underline"> 
          <img src={data.avatar_url} alt="Leetcode Profile" width={300} />
        </a>
      </div>
    );
  }
  


export default Leetcode
export const githubInfoLoader1 = async () => {
  const response = await fetch('https://api.leetcode.com/Dushyant2026/');
  const html = await response.text();
  // Parse the HTML using a library like Cheerio (Node.js required)
  // Extract the necessary data
};




