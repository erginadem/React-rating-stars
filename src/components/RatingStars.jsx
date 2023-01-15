import React from "react";
import { Card } from "react-bootstrap";
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';


const RatingStars = () => {
  let rate = 4;

  const stars = ({ rate }) => {
    return (
      <div>
        {[...new Array(5)].map((item, index) => (index < rate ? <AiFillStar /> : <AiOutlineStar />))}
      </div>
    );
  };

  return (
    <div className="ps-4 pt-4">
      <Card style={{width:"10rem"}}>
        <Card.Body className="text-center" >
          <h3 className="text-warning fs-4">{stars({ rate })}</h3>
        </Card.Body>
     </Card>
    </div>   
  );
};

export default RatingStars;





