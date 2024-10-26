import React from "react";
import { generateFakeData } from "./data";
const Form = () => {
    const fakeData = generateFakeData(12); // Generate 12 entries
  
    return (
        <div style={{color:'white', backgroundColor:"#12193B",
            borderRadius:"10px",
      padding:"5px",
    color:"white",border:"1px solid #7b8bf4"
        }}>
             <div style={{display:"flex",width:"100%", 
             borderBottom:"0.5px solid #f5f5f5",alignItems:"center",
                fontSize:"12px", justifyContent:"space-between"}}>
                <div>
                    Top Customers
                </div>
                <div style={{border:"1px solid white", borderRadius:"20px", padding:"5px",
                    backgroundColor:"black",
                    margin:"5px"

                }}>
                    View All
                </div>
            </div>
            <div style={{display:"flex",width:"100%",marginBottom:"10px", marginTop:"10px",
            
                fontSize:"12px", justifyContent:"space-between"}}>
                <div>
                    Customer
                </div>
                <div>
                    Total Spending
                </div>
            </div>
        {fakeData.map((item, index) => (
          <div key={index} style={{ marginBottom: '10px',display:"flex",alignItems:"center", columnGap:"10px",
          borderBottom:"0.5px solid #f5f5f5", borderBottom: '0.1px solid #f5f5f5',padding: '10px' }}>
             <img src='/images/whiteman.png' alt='Profile' style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
            <div style={{display:"flex",flexDirection:"column",width:"100%"}}>
            <div style={{ display: 'flex', justifyContent: 'space-between' ,
                width:"100%", alignItems:"center", fontSize:"11px"}}>
              <span>{item.name}</span> {/* Combine name and amount */}
              <span>${item.amount.toFixed(2)}</span>
            </div>
            <div style={{ fontSize:"10px"}}>
              <span>{item.email}</span>
            </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Form;