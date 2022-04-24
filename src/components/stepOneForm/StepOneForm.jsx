import React, { useState, useEffect } from "react";
import dropdownOptions from "./activitySectorData";
import dropdownOptionsFJ from "./formJuridiqueData";
import Select from "../select/Select";
import SelectJF from "../select/SelectJF";
import styles from "../stepOneForm/stepOneForm.module.css";

export default function StepOneForm() {

  useEffect(() => {});

  //the outputs of the activity sector selector child component
  const [Sa, setSa] = useState("");
  console.log("here is the parent selected sa:", Sa);

  //the outputs of the juridical forme selector child component
  const [Fj, setFj] = useState("");
  console.log("here is the parent selected fj:", Fj);

  //props of activity sector
  const propsSA = {
    label: "secteur d'activité",
    options: dropdownOptions,
    name: "activity-sector",
  };
  const propsSA1 = {
    label: "secteur d'activité",
    options: [{ key: "Choisir une secteur d'activité", value: "" },
    { key: "Profession Libérale", value: "Profession Libérale" }],
    name: "activity-sector",
  };

  //props of juridical forme
  const propsFJ = {
    label: "Forme juridique*",
    options: dropdownOptionsFJ,
    name: "Forme-juridique",
  };
  const propsFJ1 = {
    label: "Forme juridique*",
    options: [{ key: "SCI", value: "SCI" }],
    name: "Forme-juridique",
  };

  const stepOneSubmit = () => {};
  return (
    <div>
      <form onSubmit={stepOneSubmit} className={styles.formControl}>
        { (Fj === "SELARL" || Fj === "SELEURL" || Fj === "SELAS" || Fj === "SELASU" ) ?
         <Select {...propsSA1}  changeSA={Sa => setSa(Sa)} /> :
         <Select {...propsSA}  changeSA={Sa => setSa(Sa)} />}
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
