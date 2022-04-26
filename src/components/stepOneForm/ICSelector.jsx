import React, { useState } from "react";
import styles from "./select.module.css";

function ICSelector(props) {
 const {options} = props;

const handleChange = (e) => {
props.changeCI(e.target.value);
};	
	
return (
	<>
          <label htmlFor="select" className={styles.label}>
            Catégorie d'imposition*
          </label>
          <select className={styles.select} name="categorie-impo" onChange={handleChange}>
            {options.map((option) => {
              return (
                <option key={option.value} value={option.value}>
                  {option.key}
                </option>
              );
            })}
          </select>




          </>
)
};

export default ICSelector;
