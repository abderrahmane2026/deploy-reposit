import React from 'react';
import { FaRegGem, FaGem,FaCrown ,FaStar } from 'react-icons/fa';
import './pricin.css';
import { Link,  } from 'react-router-dom';
export default function Pricing() {
    const plans = [
        {
            name: "6 Mounth",
            price: 30,
            icon: FaStar,
            features: [
                "Feature 1",
                "Feature 2",
                "Feature 3",
                "Feature 4",
            ]
        },
        {
            name: "1 Years",
            price: 50,
            icon: FaGem,
            features: [
                "Feature 1",
                "Feature 2",
                "Feature 3",
                "Feature 4",
            ]
        },
        {
            name: "VIP",
            price: 180,
            icon: FaCrown,
            features: [
                "Feature 1",
                "Feature 2",
                "Feature 3",
                "Feature 4",
            ]
        },
    ];

    return (
        <div className="pricing-page">
            <h1>Our <span>Pricing Plans</span> </h1>
            <div className="plans-container">
                {plans.map((plan, index) => (
                    <div key={index} className="plan">
                        <plan.icon size={50} style={{color:'#007bff', margin:"20px"}} />
                        <h2>{plan.name}</h2>
                        
                        <p className="price">${plan.price}</p>
                        <ul className="features">
                            {plan.features.map((feature, idx) => (
                                <li key={idx}>{feature}</li>
                            ))}
                        </ul>
                        <Link to="/paid" className="select-plan-link">
                        <button>
                            Select Plan
                        </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
