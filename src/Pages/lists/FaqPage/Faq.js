import React, { useState } from 'react';
import classes from './Faq.module.css';

const Faq = (props) => {
    let text = "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod."
    const data = [{
        heading : "Payments",
        questions: [
            {title: "Anim pariatur cliche reprehenderit?", description: text, isOpen: false},
            {title: "Parsnip lotus root celery?", description: text, isOpen: false},
            {title: "Beet greens peanut salad?", description: text, isOpen: false}
        ]
    },

    {
        heading : "Suggestion and tips",
        questions: [
            {title: "Anim pariatur cliche reprehenderit?", description: text, isOpen: false},
            {title: "Parsnip lotus root celery?", description: text, isOpen: false},
            {title: "Beet greens peanut salad?", description: text, isOpen: false}
        ]
    },

    {
        heading : "Travel reccomendations",
        questions: [
            {title: "Anim pariatur cliche reprehenderit?", description: text, isOpen: false},
            {title: "Parsnip lotus root celery?", description: text, isOpen: false},
            {title: "Beet greens peanut salad?", description: text, isOpen: false}
        ]
    },

    {
        heading : "Terms and conditions",
        questions: [
            {title: "Anim pariatur cliche reprehenderit?", description: text, isOpen: false},
            {title: "Parsnip lotus root celery?", description: text, isOpen: false},
            {title: "Beet greens peanut salad?", description: text, isOpen: false}
        ]
    },

    {
        heading : "Booking and vouchers",
        questions: [
            {title: "Anim pariatur cliche reprehenderit?", description: text, isOpen: false},
            {title: "Parsnip lotus root celery?", description: text, isOpen: false},
            {title: "Beet greens peanut salad?", description: text, isOpen: false}
        ]
    },

    {
        heading : "Transfers",
        questions: [
            {title: "Anim pariatur cliche reprehenderit?", description: text, isOpen: false},
            {title: "Parsnip lotus root celery?", description: text, isOpen: false},
            {title: "Beet greens peanut salad?", description: text, isOpen: false}
        ]
    },

    {
        heading : "Pricing",
        questions: [
            {title: "Anim pariatur cliche reprehenderit?", description: text, isOpen: false},
            {title: "Parsnip lotus root celery?", description: text, isOpen: false},
            {title: "Beet greens peanut salad?", description: text, isOpen: false}
        ]
    },

    {
        heading : "Privacy",
        questions: [
            {title: "Anim pariatur cliche reprehenderit?", description: text, isOpen: false},
            {title: "Parsnip lotus root celery?", description: text, isOpen: false},
            {title: "Beet greens peanut salad?", description: text, isOpen: false}
        ]
    }
        
    ]

    const [dataState, setDataState] = useState(data);
//   const [isOpen, setIsOpen] = useState(false);
//   let attachedClasses = [classes.content, classes.Open];
  
  const toggle = (index1, index2) => {

    let dataCopy = [...dataState]

    dataCopy[index1].questions[index2].isOpen = !dataCopy[index1].questions[index2].isOpen
    console.log(dataCopy[index1].questions[index2].isOpen)
    setDataState(dataCopy);
    
  };

  
  return (

   <div className={classes.container}>
        {
    dataState.map((category,index1)=>{

        return(
        <div key={index1} className={classes.category}>
        <h3>{category.heading}</h3>

        {
           
            category.questions.map((item, index2)=>(

                <div key={index1*100+index2} className={classes.wrapper}>
                    <button onClick={()=>toggle(index1, index2)} 
                            type="button" 
                            className={classes.collapsible}>{item.title}
                                <i className={["float-right",item.isOpen? "fas fa-minus": "fas fa-plus"].join(' ')}></i>
                    </button>
                    <div className={[classes.content, item.isOpen? classes.Open: classes.Close].join(' ')}>
                        <p>
                            {item.description}
                        </p>
                    </div>

                </div> 

                ) 
            )
        
        }
        <br></br><br></br>
        </div>
        )

        
    }

    )
}
    </div>
    
   

    
  )
}
export default Faq;