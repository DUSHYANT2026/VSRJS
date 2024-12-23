import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Codolio() {
    const data = useLoaderData();
  
    return (
      <div className='text-center m-4 bg-black rounded-2xl text-white p-4 text-3xl'>
        Codolio Total Question Solved: 
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

        <a href="https://Codolio.com/Dushyant2026/" className="hover:underline"> 
          <img src={data.avatar_url} alt="Codolio Profile" width={300} />
        </a>
      </div>
    );
  }
  


export default Codolio
export const githubInfoLoader2 = async () => {
  const response = await fetch('https://api.Codolio.com/Dushyant2026/');
  const html = await response.text();
  // Parse the HTML using a library like Cheerio (Node.js required)
  // Extract the necessary data
};
