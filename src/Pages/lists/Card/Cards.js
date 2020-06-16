import React, { Component } from "react";

import Card from './Card';
// import {Link} from 'react-router-dom';

import './Cards.css';

class Cards extends Component {
    state = {
        cards : [{'id':1,
                  'productName': 'Jeans' ,'price':'$19.20',
                  'text': 'Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.'
                },
                {'id':2,
                  'productName': 'Jeans' ,'price':'$19.20',
                  'text': 'Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.'
                },
                {'id':3,
                  'productName': 'Jeans' ,'price':'$19.20',
                  'text': 'Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.'
                }

                
                ],
    }

  

     render () {
        let cards = <p >something went wrong!</p>
        if(!this.state.error){
            cards = this.state.cards.map(card => {
                console.log(card.price)
                return (
                        //  <Link to={'/' + post.id} key={post.id} >
                            
                            
                            <Card                               
                            key={card.id}
                            productName = {card.productName}
                            price={card.price} 
                            text={card.text}
                            />
                        // </Link>
                            )
            });
        }
         return(
            <section className="box">
            {cards}
            </section>
            
         );
     }
}


export default Cards;