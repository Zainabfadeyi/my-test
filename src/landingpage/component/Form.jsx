import React from "react";
import { generateFakeData } from "./data";
import '../pages/homePage/dashboard.css'

const Form = () => {
    const fakeData = generateFakeData(12); // Generate 12 entries
  
    return (
        <div className="formPage">
            <div className="form-header">
                <div>Top Customers</div>
                <div className="view-all-btn">View All</div>
            </div>
            <div className="form-subheader">
                <div>Customer</div>
                <div>Total Spending</div>
            </div>
            {fakeData.map((item, index) => (
                <div key={index} className="customer-row">
                    <img src='/images/whiteman.png' alt='Profile' className="profile-image" />
                    <div className="customer-info">
                        <div className="customer-details">
                            <span>{item.name}</span>
                            <span>${item.amount.toFixed(2)}</span>
                        </div>
                        <div className="customer-email">
                            <span>{item.email}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
  
export default Form;
