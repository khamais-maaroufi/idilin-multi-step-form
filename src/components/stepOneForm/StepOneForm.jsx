import React, { useState, useEffect } from "react";
import dropdownOptions from "./activitySectorData";
import dropdownOptions1 from "./formJuridiqueData";
import Select from "../select/Select";
import styles from "../stepOneForm/stepOneForm.module.css";

export default function StepOneForm() {
  useEffect(() => {});

  const propsSA = {
    label: "secteur d'activité",
    options: dropdownOptions,
    name: "activity-sector",
  };
  const propsFJ = {
    label: "Forme juridique*",
    options: dropdownOptions1,
    name: "Forme-juridique",
  };
  const stepOneSubmit = () => {};
  return (
    <div className="">
      <form onSubmit={stepOneSubmit} className={styles.formControl}>
        <Select {...propsSA} />
        <div>
          <label htmlFor="social-reason" className={styles.label}>
            Raison Social
          </label>
          <input id="social-reason" className={styles.input} type="text" />
        </div>
        <br/>
        <Select {...propsFJ} />
      </form>
    </div>
  );
}
