import React from 'react'
import ReactDOM from 'react-dom/client'
import BallBeat from "./BallBeat";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <BallBeat color={"#000000"} loading={true} />
  </React.StrictMode>,
)
