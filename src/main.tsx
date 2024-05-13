import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import { Score } from './components/Counter'
import styles from "./components/main.module.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <>
  <h2 style={{textAlign : "center",
    padding: "10px",
    color : "blue"

  }}
  >Quiz game</h2>

  <div className={styles.scores_container}>
    <Score teamName='A' counterName='Score'/>
    <Score teamName='B' counterName='Score'/>

  </div>
  </>
)
