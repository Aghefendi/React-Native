import { Provider } from 'react-redux'
import Root from './Navigator/Root'
import store from './Context/Redux/store'
import AuthProvider from './Context/Redux/AuthProvider'

export default function App() {
  return (


    
    <AuthProvider>
          <Root/>
    </AuthProvider>


  )
}


