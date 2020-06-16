import React from 'react';
import SidePanels from '../sidePanel/SidePanels';
import TourCard from '../Card/Cards';
import classes from './TourPage.module.css';

const TourPage = () => {
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

export default TourPage;