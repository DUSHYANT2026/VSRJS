import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){               //  we can render this function
    return (
        <div>
            <h1>king of kings </h1>
        </div>
    )
}


const reactelement = {                             // normal we rander function through react in < function name /> , but we can also rendar the object  
  type: 'a',
  props: {                                         //  this will not work because it is custom and not in react working format
      href: 'https://www.youtube.com/',
      target: '_blank'
  },
  children: 'click here to open the youtube'
}



const anotherElement = (                                                  // this is the format that react ordered or working
    <a href="https://youtube.com" target='_blank'>open youtube</a>
)


const newElement = React.createElement(
    'a',
    {href: 'https://youtube.com',target: '_blank' },
    'click me to visit youtube'
)

ReactDOM.createRoot(document.getElementById('root')).render(

  newElement

)

