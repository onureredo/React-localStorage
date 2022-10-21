import React from 'react';

class Local extends React.Component {

    setData() {

      const person = {firstName: 'John', lastName: 'Doe', age: 26, eyeColor: 'Blue'};

        // set data on localstorage       
        localStorage.setItem('person', JSON.stringify(person));
        console.log(`Saved in Local Storage`);
    
      }
    
      getData() {  

        const getData = localStorage.getItem('person');
        console.log(JSON.parse(getData));
    
      }
      
      clearData() {
        const clearData = localStorage.removeItem('person');
        console.log('Local Storage has been cleared!');
      }

      render() {  
        return (
          <div className="App">            
    
              <button className='btn' onClick={ () => this.setData() }>Set Data</button>
              <button className='btn' onClick={ () => this.getData() }>Get Data</button>
              <button className='btn' onClick={ () => this.clearData() }>Clear Data</button>
    
          </div>
          
      );
    }
}

export default Local