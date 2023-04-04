import React from 'react'

export default function MemeGenerator(){

  const [allMeme, setAllMeme] = React.useState([])
  React.useEffect(()=>{
    fetch('https://api.imgflip.com/get_memes')
      .then(data => data.json())
      .then(data => setAllMeme(data.data.memes))
  }, [])

  // get random img
  const [meme, setMeme] = React.useState({
    img: ''
  })
  function getRandomImg(){
    let randomNum = Math.floor(Math.random() * 100)
    setMeme(oldData => ({
      ...oldData,
      img: allMeme[randomNum].url
    }))
  }
  
  return(
    <div className="meme-page">
      <h1>Meme Generator</h1>
      <p className='meme-text'>one does not simply</p>
      <p className='meme-text'>walk into mordor</p>
      <div>
      <button className='get-meme-img-btn' onClick={getRandomImg}>Get a new meme image</button>
      </div>
      <div className="meme-img">
        <img src={meme.img} alt="" />
        <p className="meme-upperText">ONE DOES NOTE SIMPLY</p>
        <p>WALK INTO MORDOR</p>
      </div>
    </div>
  )
}