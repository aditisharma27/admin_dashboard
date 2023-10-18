import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './featured.scss'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ChangingProgressProvider from "./ChangingProgressProvider";


// const Featured = () => {
//   return (
//    <div className="featured">
//     <div className="top">
//       <div className="title">
//         <h1>Overview</h1>
//         <h4>Monthly Earning</h4>
//         <KeyboardArrowDownIcon fontsize="small" />
//       </div>
//     </div>
//    <div className="bottom">
//     <div className="featuredChart"> </div>
//    </div>
//    </div>
//   )
// }

// export default Featured
const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Customers </h1>
        <KeyboardArrowDownIcon fontSize="small" />
      </div>
        <h4 className='title'>Customers that buy products</h4>
      <div className="bottom">
        <div className="featuredChart">
          <ChangingProgressProvider
            values={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
          >
            {(percentage) => (
              <CircularProgressbar
                value={percentage}
                text={`${percentage}% ` } 
                styles={buildStyles({
                  pathTransitionDuration: 0.95,
                  trailColor: "#d4c3e3",
                  pathColor: "#c71a65" ,
                  textColor: "#616161",
                })}
              />
            )}
          </ChangingProgressProvider>
        </div>
        
        </div>
      </div>
   
  );
};

export default Featured;