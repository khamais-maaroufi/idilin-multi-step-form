import React, { useState } from "react";
import styles from "./select.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function SelectJF(props) {
    const { label, options, name } = props;

    //useState for the conditional Rendering
    
    //useState for the juridical forme selector

    // handle change in the side choices for juridical forme selector

    // handle change in the juridical form  select
    const handleChange = (e) => {
        
        let jf = e.target.value;
        console.log("SELECT JF",jf);
    
    }








    return (
        <>
          <label htmlFor="select" className={styles.label}>
            {label}
          </label>
          <select className={styles.select} name={name} onChange={handleChange}>
            {options.map((option) => {
              return (
                <option key={option.value} value={option.value}>
                  {option.key}
                </option>
              );
            })}
          </select>




          </>
            );
};

export default SelectJF;