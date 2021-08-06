import React from "react";

const Card = ({ name, email, id }) => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}?200x200`} alt="robots" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

// Above we do this same component definition but with destructing instead of passing props itself

// const Card = (props) => {
//   return (
//     <div className="tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5">
//       <img src={`https://robohash.org/${props.id}?200x200`} alt="robots" />
//       <div>
//         <h2>{props.name}</h2>
//         <p>{props.email}</p>
//       </div>
//     </div>
//   );
// };

export default Card;
