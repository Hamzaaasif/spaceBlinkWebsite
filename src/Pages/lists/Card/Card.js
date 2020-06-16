import React from 'react'
//import {withRouter} from 'react-router-dom'; 
import resort from './alexander.jpg';
import './Card.css';

const card = (props) => {
    
    // console.log(props);
    return(
        // <div classNameName={"wrapper"}>
        //     <div classNameName={"outerDiv"}>
                
        //         <div classNameName={"card"}>
        //             <img src={resort} alt="Denim Jeans" style={{}}></img>
        //         </div>
                
        //         <div classNameName={'textBox'}>
        //             <h1>{props.ProductName}</h1>
        //             <p classNameName={"price"}>{props.price}</p>
        //             <p>{props.text}</p>
        //             <p><button>Details</button></p>
        //         </div>
                
        //     </div>
        // </div>
        ///////////////////////////////////////////////////////////////
        <div className="wrapper">
            <div className="product-img">
            <img src={resort} alt="Denim Jeans" height="420" width="327"></img>
            </div>
            <div className="product-info">
            <div className="product-text">
                <h1>{props.productName}</h1>
                <h2>by studio and friends</h2>
                <p>{props.text}</p>
            </div>
            <div className="product-price-btn">
                <p><span>{props.price}</span></p>
                <button type="button">Details</button>
            </div>
            </div>
        </div>
                //////////////////////////////////////////////
        );
};

export default card;
// export default withRouter(post);