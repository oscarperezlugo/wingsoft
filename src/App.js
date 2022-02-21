import logo from './logo.svg';
import './App.css';
import { useState } from 'react';





function App() {
  const [arr, setArr] = useState('');
  const [arr2, setArr2] = useState('');
  const [sizearr, setSizeArr] = useState('');
  var arrtwo = Array.from(arr);
  var arrthree = Array.from(arr2);
  var matrixtwo = printMatrix(arrtwo, sizearr);
  var matrixthree = printMatrix(arrthree, sizearr);
  var num = printPrimes(arr);
  var intersection = (arr2)
  function testfunc(){
   
    
    
    
  }
  function printMatrix(list, elementsPerSubArray) {
    var matrix = [], i, k;
    for (i = 0, k = -1; i < list.length; i++) {
        if (i % elementsPerSubArray === 0) {
            k++;
            matrix[k] = [];
        }
        matrix[k].push(list[i]);
    }
    return (
      <div>
      <ul>
        {matrix.map((printMatrix) => (
          <li>{printMatrix}</li>
        ))}
      </ul>
      </div>
    );
  }

  function printPrimes(num) {
    for (let i = 2; i * i <= num; i++)
        if (num % i === 0)
          return false; 
    return num > 1;
  }

  function findCircleCollisions(a, b) {
    var setA = new Set(a);
    var setB = new Set(b);
    var intersection = new Set([...setA].filter(x => setB.has(x)));
    return Array.from(intersection);
  }



  

  return (
    <div className="App">
      <header className="App-header">
        
        <form>
          <label>
            Values Array 1:
            <input type="text" name="arrayvalues" onChange={e => setArr(e.target.value)}/><br></br>
            Values Array 2:
            <input type="text" name="matrixsize"  onChange={e => setArr2(e.target.value)}/>
            <br></br>
            Size:
            <input type="text" name="matrixsize"  onChange={e => setSizeArr(e.target.value)}/>
            </label><br></br>
            
   
            <button onClick={testfunc} >Click me</button>
      
        </form>
        
      </header>
      <section>
      {matrixtwo}
      {matrixthree}
      {num}
      {intersection}
      </section>
   
    </div>
  );
}

export default App;
