import React from 'react'

export default function WindowTracker(){
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
  React.useEffect(() => {
    function setWidth(){
      // console.log('setting up...')
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', setWidth)
    return function(){
      // console.log('cleaning up...')
      window.removeEventListener('resize', setWidth)
    }
  }, [])
  return(
    <div>
      <h1>Window width: {windowWidth} px</h1>
    </div>
  )
}