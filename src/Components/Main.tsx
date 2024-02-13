import Dashboard from "./Dashboard";

function Main() {
  return (
    <div className='main-content'>
      <h2 className='section-title'>Dashboard</h2>
      <div className='resources'>
        <p>$0.00</p> 
        <p>Metal: 0</p>
      </div>
      <Dashboard />
    </div>
  );
}

export default Main;