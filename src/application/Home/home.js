import * as React from 'react'
import { renderRoutes } from "react-router-config";

const Home = (props) => {
  
  const { route } = props

  return (
    <div>
      <div>Home</div>
      { renderRoutes (route.routes) }
    </div>
  )
}

export default React.memo(Home)