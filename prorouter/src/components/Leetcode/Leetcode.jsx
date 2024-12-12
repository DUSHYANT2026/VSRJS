import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Leetcode() {
    const data = useLoaderData();
  
    return (
      <div className='text-center m-4 bg-blue-300 text-white p-4 text-3xl'>
        Leetcode Total Question Solved: {/* Display total questions solved */}
        <a href="https://leetcode.com/Dushyant2026/" className="hover:underline"> 
          <img src={data.avatar_url} alt="Leetcode Profile" width={300} />
        </a>
      </div>
    );
  }
  


export default Leetcode
export const githubInfoLoader1 = async () => {
  const response = await fetch('https://leetcode.com/Dushyant2026/');
  const html = await response.text();
  // Parse the HTML using a library like Cheerio (Node.js required)
  // Extract the necessary data
};





