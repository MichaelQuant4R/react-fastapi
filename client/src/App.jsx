function App() {
    
    const handleCall = e => {
        console.log(e);
        
        fetch("https://holistic-fastapi.herokuapp.com/api/data", {
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": "true"
            
        }
        })
        .then(resp => {
            
            if(!resp.ok){
                
                throw new Error(resp.status);
            }
            else{
                
                return resp.json();
            }
        })
        .then(json => {
            
            console.log("JSON!");
            console.log(json);
        })
        .catch(error => {
            console.log(error);
        });
    };
        
    
    
  return (
    <div className="App">
          <h1>This is FASTAPI</h1>
          <button onClick={handleCall}>Call</button>
    
    </div>
  );
}

export default App;
