import React from 'react';
import PriceDetails from '../../reuseableComponents/PriceDetails';
import FAQ from '../homeAll/faq/FAQ';
import '../price/price.css'

const Price = () => {
    return (
        <>
        <section className="price">
            <div className="container">
                <div className="priceTitle">
                    <h3>Our Pricing Plans</h3>
                    <p>When you’re ready to go beyond prototyping in Figma, Webflow is ready to help you bring your designs to life — without coding them.</p>
                </div>
                <div className="priceFlex">
                    <PriceDetails price = '299' design = 'Per Design' title = 'Landing Page'
                    titlePera = 'When you’re ready to go beyond prototyping in Figma,' />
                    <PriceDetails price = '399' design = 'Multi Design' title = 'Website Page'
                    titlePera = 'When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help.' />
                    <PriceDetails price = '499+' design = 'Per Design' title = 'Complex Page'
                    titlePera = 'When you’re ready to go beyond prototyping in Figma, ' />

                </div>
            </div>
        </section>

        <div className="priceFAQ">
            <FAQ/>
        </div>
        
        </>
    );
};

export default Price;