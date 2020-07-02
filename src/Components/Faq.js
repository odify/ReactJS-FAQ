import React from 'react';
import FaqData from './FaqData.js';
import FaqItem from './FaqItem.js';



const Faq = () => {
    return (
        <div className="faq-menu">

            {FaqData.map((data, i) => <FaqItem key={i} data={data} />)}
        </div>
        
    );
}

export default Faq;