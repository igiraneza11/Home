
import React, { useState } from 'react';

const Home = () => {
 
const [selectedOption, setSelectedOption] = useState('');

const handleOptionClick = (option) => {
  setSelectedOption(option === selectedOption ? null : option);
};
const [tableData, setTableData] = useState([{ col1: '', col2: '', col3: '' }]);
const [currentRow, setCurrentRow] = useState({ col1: '', col2: '', col3: '' });

const handleInputChange = (e, columnName) => {
  setCurrentRow({
    ...currentRow,
    [columnName]: e.target.value
  });
};

const handleEnterPress = (e) => {
  if (e.key === 'Enter') {
    setTableData([...tableData, currentRow]);
    setCurrentRow({ col1: '', col2: '', col3: '' });
  }
};


  return (
    
    <div className='div1'>
      <div className='div2'>
      <h1>Home Page</h1>
      <p>Select an option from the dropdown:</p>
    
      <select className='dropdown'> 
        <option value="">SEND</option>
        <option value="">POST</option>
        <option value="">UPDATE</option>
      </select>
      <input type="text" className='input'/>
      <button className='button'>send</button><br></br>
       
      <input type="radio" name='radio' className='radio'      onClick={() => handleOptionClick('IGIRANEZA')}
          style={{ cursor: 'pointer', textDecoration: selectedOption === 'IGIRANEZA' ? 'underline' : 'none' }} /> 
        <label htmlFor="" className='radio'>Igiraneza</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      
       <input type="radio" name='radio' className='radio'  onClick={() => handleOptionClick('BAHIZI')}
          style={{ cursor: 'pointer', textDecoration: selectedOption === 'BAHIZI' ? 'underline' : 'none' }} /> 
        <label htmlFor="" className='radio'>Bahizi</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      
       <input type="radio" className='radio' name='radio'      onClick={() => handleOptionClick('SHALOM')}
          style={{ cursor: 'pointer', textDecoration: selectedOption === 'SHALOM' ? 'underline' : 'none' }} />
        <label htmlFor="" className='radio'>Shalom</label>


{selectedOption && (
  // <div> 
  //   <input type="textbox" name="textbox" id="" />
  // </div>
  
        
 <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.col1}</td>
              <td>{row.col2}</td>
              <td>{row.col3}</td>
            </tr>
          ))}
          <tr>
            <td>
              <input
                type="text" className='table'
                value={currentRow.col1}
                onChange={(e) => handleInputChange(e, 'col1')}
                onKeyPress={handleEnterPress}
              />
            </td>
            <td>
              <input
                type="text" className='table'
                value={currentRow.col2}
                onChange={(e) => handleInputChange(e, 'col2')}
                onKeyPress={handleEnterPress}
              />
            </td>
            <td>
              <input
                type="text" className='table'
                value={currentRow.col3}
                onChange={(e) => handleInputChange(e, 'col3')}
                onKeyPress={handleEnterPress}
              />
            </td>
          </tr>
        </tbody>
      </table> 
        
       )}
      </div>
      </div>
     );
     };

        export default Home;












// import React, { useState, useRef } from 'react';

// const ResizableDiv = () => {
//   const [height, setHeight] = useState(200); // Set an initial height
//   const [isResizing, setIsResizing] = useState(false);
//   const resizeStartY = useRef(0);

//   const handleResize = (newHeight) => {
//     setHeight(newHeight);
//   };

//   const startResize = (e) => {
//     setIsResizing(true);
//     resizeStartY.current = e.clientY;

//     // Set up event listeners for mouse move and mouse up
//     document.addEventListener('mousemove', handleMouseMove);
//     document.addEventListener('mouseup', endResize);
//   };

//   const endResize = () => {
//     setIsResizing(false);

//     // Remove event listeners when the long click is released
//     document.removeEventListener('mousemove', handleMouseMove);
//     document.removeEventListener('mouseup', endResize);
//   };

//   const handleMouseMove = (e) => {
//     if (isResizing) {
//       const deltaY = resizeStartY.current - e.clientY;
//       const newHeight = height + deltaY;
//       handleResize(newHeight);
//       resizeStartY.current = e.clientY;
//     }
//   };

//   return (
//     <div
//       style={{
//         height: `${height}px`,
//         overflow: 'auto',
//         border: '1px solid #ccc',
//         backgroundColor: 'black',
//         cursor: 'ns-resize',
//       }}
//       onMouseDown={startResize}
//     >
//       <div>
//         {/* Your resizable content goes here */}
//         <h1 style={{ color: 'white' }}>Resizable Div</h1>
//         <p style={{ color: 'white' }}>This is your resizable content.</p>
//       </div>
//     </div>
//   );
// };

// export default ResizableDiv;
