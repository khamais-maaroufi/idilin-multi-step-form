import React, { useState, useEffect } from "react";
import dropdownOptions from "./activitySectorData";
import Select from "../select/Select";
import styles from "../stepOneForm/stepOneForm.module.css";
export default function StepOneForm() {
  useEffect(() => {});

  const props = {
    label: "secteur d'activité",
    options: dropdownOptions,
    name: "activity-sector",
  };
  const stepOneSubmit = () => {};
  return (
    <div className="">
      <form onSubmit={stepOneSubmit} className={styles.formControl}>
        <Select {...props} />
        <div>
          <label htmlFor="social-reason" className={styles.label}>
            Raison Social
          </label>
          <input id="social-reason" className={styles.input} type="text" />
        </div>
        <div>
          <label htmlFor="forme-juridique" className={styles.label}>
            Forme juridique*
          </label>
          <input id="forme-juridique" className={styles.input} type="text" />
        </div>
      </form>
    </div>
  );
}
