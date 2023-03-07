import React, { useState } from 'react'

function Slides({ slides }) {
  const [numSlide, setNumSlide] = useState(0)

  return (
    <div>
      <div id='navigation' className='text-center'>
        <button
          data-testid='button-restart'
          className='small outlined'
          onClick={() => setNumSlide(0)}
          disabled={numSlide === 0}
        >
          Restart
        </button>
        <button
          data-testid='button-prev'
          className='small'
          onClick={() => setNumSlide(numSlide - 1)}
          disabled={numSlide === 0}
        >
          Prev
        </button>
        <button
          data-testid='button-next'
          className='small'
          onClick={() => setNumSlide(numSlide + 1)}
          disabled={numSlide === slides.length - 1}
        >
          Next
        </button>
      </div>
      <div id='slide' className='card text-center'>
        <h1 data-testid='title'>{slides[numSlide].title}</h1>
        <p data-testid='text'>{slides[numSlide].text}</p>
      </div>
    </div>
  )
}

export default Slides
