import React from 'react'

const Home = () => {
  return (
    <div >
      <img src={`${process.env.PUBLIC_URL}/Food.jpg`} alt="Food" style={{ width: '100%', height : "750px", padding : '10px'}} />
      <h1 
        style={{
          position: 'absolute',
          top: '50%', // Center vertically
          left: '50%', // Center horizontally
          transform: 'translate(-50%, -50%)', // Adjust for perfect centering
          fontFamily: '"Concert One", sans-serif',
          fontSize: '70px',
          color: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background
          fontWeight : "bolder",
          padding: '10px 20px',
          borderRadius: '10px',
          textAlign: 'center'
        }}
      >
        Satisfy Your Cravings with BiteQ!
      </h1>
    </div>
  )
}

export default Home
