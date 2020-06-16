import React , {Component} from 'react';
import SidePanels from '../sidePanel/SidePanels';
import TourCard from '../Card/Cards';
import classes from './TourPage.module.css';


class TourPage extends Component ()
{
    state = {
        sidePanels : [

            {'id':1,'name':' All Tours', 'icon':'fa fa-compass'},
            {'id':2,'name':' City Sightseeing' , 'icon':'fa fa-city'},
            {'id':3,'name':' Museum Tours' , 'icon':'fa fa-tree'},
            {'id':4,'name':' Historic Buildings' , 'icon':'fa fa-landmark'},
            {'id':5,'name':' Walking tours', 'icon':'fa fa-hiking'},
            {'id':6,'name':' Eat And Drink', 'icon':'fa fa-utensils'},
            {'id':7,'name':' Churches', 'icon':'fa fa-church'},
            {'id':8,'name':' Skyline Tour', 'icon':'fab fa-skyatlas'}
                
                ]
    }
    
    render()
    {
        return(

            <div className={classes.wrapper}>
            <div className={classes.sidePanel}>
                <SidePanels/>            
            </div>
            <div className={classes.tourCard}>
                <TourCard/>
            </div>
        </div>

        )
    }
}

export default TourPage;