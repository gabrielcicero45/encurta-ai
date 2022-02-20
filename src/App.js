import { useAuth0 } from '@auth0/auth0-react';
import RoutesApp from './routes';


export default function App(){
  const {isLoading} = useAuth0();

  if(isLoading) {return <div>Carregando ...</div>  ;}
  return(
    <div className="app">
      <RoutesApp/>
    </div>
  )
}
