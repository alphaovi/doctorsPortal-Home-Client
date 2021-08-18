import React from 'react';
import featured from '../../../images/Featured.png'

const FeaturedService = () => {
    return (
        <section className="features-service pb-0 pb-md-5 my-5">
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-5 mb-4 m-mb-0">
                        <img className="img-fluid" src={featured} alt="" />
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h1> Exceptional Dental Care</h1>
                        <p className="text-secondary my-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis exercitationem ipsum neque corrupti mollitia reprehenderit?</p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;