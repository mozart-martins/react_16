import { useEffect, useState } from 'react'

function App() {
  const [alert, setAlert] = useState(false)

  const handleToggle = () => {
    setAlert((preState) => !preState)
  }

  return (
    <div>
      <button onClick={handleToggle}>toggle</button>
      {alert && <Alert />}
    </div>
  )
}

const Alert = () => {
  useEffect(() => {
    console.log("Interesssante!!!")
  }, []);

  return (
    <p style={{backgroundColor: 'red'}}>Estamos em alerta!!!</p>
  );
}

export default App;
