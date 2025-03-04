import { useEffect, useState } from "react";
import WebApp from "@twa-dev/sdk";


function App() {
  const [bgColor, setBgColor] = useState('white');

  useEffect(()=> {
    if (WebApp.themeParams.bg_color) {
      setBgColor(WebApp.themeParams.bg_color)
    }
  },[])

  return (
    <div style={{
      backgroundColor: bgColor,
      color: WebApp.themeParams.text_color || 'black',
      padding: '20px',
      minHeight: '100vh'
    }}>
      <h1>Добро пожаловать в React mini App!</h1>
    </div>
  )
}

export default App
