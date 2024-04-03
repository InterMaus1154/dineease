import {FC} from 'react';


const Loading :FC  = () =>{
  return (
      <div className="Loading">
          <div className="Loading-spin"></div>
          <span>Loading...</span>
      </div>
  );
};

export default Loading;