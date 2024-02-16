import { useResources } from "../Contexts/ResourceContext";
import Dashboard from "./Dashboard";

function Main() {
  let money = useResources().money;
  let metal = useResources().metal;
  
  return (
    <div className='main-content'>
      <h2 className='section-title'>Dashboard</h2>
      <div className='resources'>
        <p>${money}</p> 
        <p>Metal: {metal}</p>
      </div>
      <Dashboard />
    </div>
  );
}

export default Main;