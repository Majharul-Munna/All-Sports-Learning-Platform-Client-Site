import React from 'react';

import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Pdfg = () => {
    return (
        <div>
            <div className="App">
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button className='px-2 py-1 text-white rounded-md bg-green-700' onClick={toPdf}> Download </button>}
      </Pdf>
      <div ref={ref}>
       
      </div>
    </div>
        </div>
    );
};

export default Pdfg;