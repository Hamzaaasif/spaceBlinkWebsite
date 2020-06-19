import React from 'react';
import SidePanels from '../sidePanel/SidePanels';
import HotelsCard from '../Card/Cards';
import classes from './HotelsPage.module.css';

const AllHotels = () => {
    
    
        let sidePanels = [

            {'id':0,'name':' FACILITIES'},
            {'id':1,'name':' Pet allowed', 'icon':'fas fa-paw','icon1':'check'},
            {'id':2,'name':' Wifi' , 'icon':'fas fa-wifi','icon1':'check'},
            {'id':3,'name':' Spa' , 'icon':'fas fa-spa','icon1':'check'},
            {'id':4,'name':' Restaurant' , 'icon':'fas fa-concierge-bell','icon1':'check '},
            {'id':5,'name':' Pool', 'icon':'fa fa-swimming-pool','icon1':'check '},
            {'id':6,'name':' Parking', 'icon':'fas fa-parking','icon1':'check' },
            {'id':7,'name':' Fitness center', 'icon':'fas fa-dumbbell','icon1':'check '},
            
                
                ]

        let districtNames = [
            {'name':'Paris Center'},
            {'name':'La Defance'},
            {'name':'Latin Quarter'}
        ];

        let TitleName = 'District/Area';
        
       

        let cardData = [
            {'id':1,
            'productName': 'PARK HYATT HOTEL' ,'price':'$139',
            'text': 'Lorem ipsum dolor sit amet, quem convenire interesset ut vix, ad dicat sanctus detracto vis. Eos modus dolorum...',
            'imagesrc':'images/pic1.jpg'
            },
      
            {'id':2,
            'productName': 'MARIOTT HOTEL' ,'price':'$142',
            'text': 'Lorem ipsum dolor sit amet, quem convenire interesset ut vix, ad dicat sanctus detracto vis. Eos modus dolorum...',
            'imagesrc':'images/pic2.jpg'
            },
            
            {'id':3,
            'productName': 'LUMIERE HOTEL' ,'price':'$319',
            'text': 'Lorem ipsum dolor sit amet, quem convenire interesset ut vix, ad dicat sanctus detracto vis. Eos modus dolorum...',
            'imagesrc':'images/pic3.jpg'
            },
            {'id':4,
            'productName': 'CONCORDE HOTEL' ,'price':'$169',
            'text': 'Lorem ipsum dolor sit amet, quem convenire interesset ut vix, ad dicat sanctus detracto vis. Eos modus dolorum...',
            'imagesrc':'images/pic4.jpg'
                },
            {'id':5,
            'productName': 'CONCORDE HOTEL' ,'price':'$149',
            'text': 'Lorem ipsum dolor sit amet, quem convenire interesset ut vix, ad dicat sanctus detracto vis. Eos modus dolorum...',
            'imagesrc':'images/pic5.jpg'
            },
            
        ];

    return(
        <div className={classes.wrapper}> 
            <div className={classes.sidePanel}>
                <SidePanels 
                   
                    sidepanel={sidePanels} 
                    districtName={districtNames}
                    titleName={TitleName}
                    show={true}
                    />            
            </div>
            <div className={classes.resCard}>
                <HotelsCard CardData={cardData} lightName="HOTELS" />
            </div>
        </div>
    )
}

export default AllHotels;