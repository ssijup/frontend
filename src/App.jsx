import './styles/App.scss'
import './assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import NetmagicsRoutes from './routes/netmagicsroutes/NetmagicsRoutes'
// import RegistrarRoutes from './routes/netmagicsroutes/RegistrarRoutes'
import AdvocateRoutes from './routes/advocateroutes/AdvocateRoutes'
import AssociationRoutes from './routes/associationroutes/AssociationRoutes'
// import BlankPage from './pages/RegistrarDashboard/BlankPage'
// import BlankPageId from './pages/AssociationDashboard/BlankPageId'

function App() {

const user='netmagics'
  return (
    <div className="App">
  {
    user==='netmagics'?(
      <NetmagicsRoutes/>
    ):(
     <AdvocateRoutes />
    // <BlankPageId/>
    // <AssociationRoutes/>
    )
  }
  
      
    </div>
  );
}

export default App;
