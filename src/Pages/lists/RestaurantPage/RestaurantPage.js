import React from 'react';
import SidePanels from '../sidePanel/SidePanels';
import RestaurantCard from '../Card/Cards';
import classes from './RestaurantPage.module.css';

const resturantPage = () => {
    
        let sidePanels = [

            {'id':1,'name':' All restaurants', 'icon':'fa fa-utensils','icon1':'chevron-right'},
            {'id':2,'name':' Pizza / italian' , 'icon':'fas fa-pizza-slice','icon1':'chevron-right'},
            {'id':3,'name':' Fast Food' , 'icon':'fas fa-hamburger','icon1':'chevron-right'},
            {'id':4,'name':' Japanese' , 'icon':'fa fa-landmark','icon1':'chevron-right'},
            {'id':5,'name':' Chinese', 'icon':'fa fa-hiking','icon1':'chevron-right'},
            {'id':6,'name':' International', 'icon':'fas fa-utensils','icon1':'chevron-right'},
            {'id':7,'name':' Coffee Bar', 'icon':'fas fa-coffee','icon1':'chevron-right'},
            {'id':8,'name':' Fish', 'icon':'fas fa-fish','icon1':'chevron-right'}
                
                ]
        
        let districtNames = [
            {'name':'Paris Center'},
            {'name':'La Defance'},
            {'name':'Latin Quarter'}
        ];

        let TitleName = 'District/Area';
        
       

        let cardData = [
            {'id':1,
            'productName': 'KING FOOD' ,'price':'$39',
            'text': 'Lorem ipsum dolor sit amet, quem convenire interesset ut vix, ad dicat sanctus detracto vis. Eos modus dolorum ex, qui adipisci maiestatis inciderint no, eos in elit dicat.....',
            'imagesrc':'images/pic1.jpg'
            },
      
            {'id':2,
            'productName': 'CATERINE' ,'price':'$42',
            'text': 'Lorem ipsum dolor sit amet, quem convenire interesset ut vix, ad dicat sanctus detracto vis. Eos modus dolorum ex, qui adipisci maiestatis inciderint no, eos in elit dicat.....',
            'imagesrc':'images/pic2.jpg'
            },
            
            {'id':3,
            'productName': 'BELLA NAPOLI' ,'price':'$39',
            'text': 'Lorem ipsum dolor sit amet, quem convenire interesset ut vix, ad dicat sanctus detracto vis. Eos modus dolorum ex, qui adipisci maiestatis inciderint no, eos in elit dicat.....',
            'imagesrc':'images/pic3.jpg'
            },
            {'id':4,
            'productName': 'DRAGON TOWER' ,'price':'$69',
            'text': 'Lorem ipsum dolor sit amet, quem convenire interesset ut vix, ad dicat sanctus detracto vis. Eos modus dolorum ex, qui adipisci maiestatis inciderint no, eos in elit dicat.....',
            'imagesrc':'images/pic4.jpg'
                },
            {'id':5,
            'productName': 'SEA FOOD' ,'price':'$49',
            'text': 'Lorem ipsum dolor sit amet, quem convenire interesset ut vix, ad dicat sanctus detracto vis. Eos modus dolorum ex, qui adipisci maiestatis inciderint no, eos in elit dicat.....',
            'imagesrc':'images/pic5.jpg'
            },
            
        ];

    return(
        <div className={classes.wrapper}> 
            <div className={classes.sidePanel}>
                <SidePanels 
                    sidepanel={sidePanels} 
                    districtName={districtNames}
                    titleName={TitleName}/>            
            </div>
            <div className={classes.resCard}>
                <RestaurantCard CardData={cardData} lightName="RESTAURANT" />
            </div>
        </div>
    )
}

export default resturantPage;