import React, { useState, useEffect } from "react";
import dropdownOptions from "./activitySectorData";
import dropdownOptionsFJ from "./formJuridiqueData";
import Select from "../select/Select";
import SelectJF from "../select/SelectJF";
import styles from "../stepOneForm/stepOneForm.module.css";

export default function StepOneForm() {

  useEffect(() => {});

  //the outputs of the activity sector selector
  const [Sa, setSa] = useState("");
  console.log("here is the parent selected sa:", Sa);

  //the outputs of the juridical forme selector
  const [Fj, setFj] = useState("");
  console.log("here is the parent selected fj:", Fj);

  const propsSA = {
    label: "secteur d'activité",
    options: dropdownOptions,
    name: "activity-sector",
  };
  const propsFJ = {
    label: "Forme juridique*",
    options: dropdownOptionsFJ,
    name: "Forme-juridique",
  };
  const stepOneSubmit = () => {};
  return (
    <div>
      <form onSubmit={stepOneSubmit} className={styles.formControl}>
        <Select {...propsSA}  changeSA={Sa => setSa(Sa)} />
        <div>
          <label htmlFor="social-reason" className={styles.label}>
            Raison Social
          </label>
          <input id="social-reason" className={styles.input} type="text" />
        </div>
        <br/>
        <SelectJF {...propsFJ} changeFJ={Fj => setFj(Fj)} />
      </form>
    </div>
  );
}
