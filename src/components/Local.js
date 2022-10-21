import React from 'react';

class Local extends React.Component {

    setData() {

      const person = {firstName: 'John', lastName: 'Doe', age: 26, eyeColor: 'Blue'};

        // set data on localstorage       
        localStorage.setItem('person', JSON.stringify(person));
        console.log(`saved in local storage`);
    
      }
    
      getData() {
    
        const gettingData = localStorage.getItem('person');
        console.log(JSON.parse(gettingData));
    
      }
      
      clearData() {
        const clearData = localStorage.removeItem('person');
        console.log('cleared');
      }

      render() {  
        return (
          <div className="App">            
    
              <button onClick={ () => this.setData() }>Set Data</button>
              <button onClick={ () => this.getData() }>Get Data</button>
              <button onClick={ () => this.clearData() }>Clear Data</button>
    
          </div>
          
      );
    }
}

export default Local