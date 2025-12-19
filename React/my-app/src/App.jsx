import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

function App() {
  const [openIndex, setOpenIndex] = useState(null) 

  const faq = [
    { q: "Who are you?", a: "Honestly, I don't know who I am anymore. People call me alfi with each perception of myself from people being different" },
    { q: "Where am I from?", a: "I was born in Indonesia but moved to sydney for higher education" },
    { q: "What do you like to do for fun?", a: "Well I have plenty of hobbies actually which ranges from playing basketball, drawin, playing bass and coding." },
  ]

  return (
    <div className="box">
      <h1 className="title">FAQ About Me!!</h1>

      {faq.map((item, index) => (
        <div key={index} className='key_box'>
          {/* Question */}
          <div
            className="questions"
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
          >
            <h1 className="title_question">{item.q}</h1>
          </div>


          {openIndex === index && (
            <DropdownBox insideText={item.a} />
          )}
        </div>
      ))}
    </div>
  )
}

// Component names must be Capitalized
function DropdownBox({ insideText }) {
  return <div className="answear_box">{insideText}</div>
}

export default App

