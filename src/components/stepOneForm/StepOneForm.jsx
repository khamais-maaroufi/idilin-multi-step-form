import React, { useState, useEffect } from "react";
import dropdownOptions from "./activitySectorData";
import dropdownOptionsFJ from "./formJuridiqueData";
import Select from "../select/Select";
import SelectJF from "../select/SelectJF";
import styles from "../stepOneForm/stepOneForm.module.css";

export default function StepOneForm() {

  

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
    options: [
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
    options: [
    { key: "SCI", value: "SCI" }],
    name: "Forme-juridique",
  };

  const propsFJ2 = {
    label: "Forme juridique*",
    options: [
    { key: "SASU", value: "SASU" }],
    name: "Forme-juridique",
  };

  const propsFJ3 = {
    label: "Forme juridique*",
    options: [
    { key: "SELASU", value: "SELASU" }],
    name: "Forme-juridique",
  };

  const propsFJ4 = {
    label: "Forme juridique*",
    options: [
    { key: "EURL", value: "EURL" }],
    name: "Forme-juridique",
  };

  const propsFJ5 = {
    label: "Forme juridique*",
    options: [
    { key: "SELEURL", value: "SELEURL" }],
    name: "Forme-juridique",
  };

  //usestate of conditional selector related to juridical forme select
  const [NbrAssocie, setNbrAssocie] = useState("");
  const handleNbAssocie = (e) => {
    setNbrAssocie(e.target.value);
  }
  console.log("NOMBRE ASSOCIES: ", NbrAssocie);

  const [NbrActionnaire, setNbrActionnaire] = useState("");
  const handleNbrActionnaire = (e) => {
  setNbrActionnaire(e.target.value);
  };
  console.log("NbrActionnaire: ", NbrActionnaire);
  
  const stepOneSubmit = () => {};
  return (
    <div>
      <form onSubmit={stepOneSubmit}  className={styles.formControl}>
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
        
        {((NbrAssocie === "1") && (Fj === "SARL")) ? <SelectJF {...propsFJ4} changeFJ={Fj => setFj(Fj)} /> :
        ( ((NbrAssocie === "1") && (Fj === "SELARL")) ?
        <SelectJF {...propsFJ5} changeFJ={Fj => setFj(Fj)} /> : 
        (((NbrActionnaire === "1") && (Fj === "SAS")) ? <SelectJF {...propsFJ2} changeFJ={Fj => setFj(Fj)} /> : (
        ((NbrActionnaire === "1") && (Fj === "SELAS")) ? <SelectJF {...propsFJ3} changeFJ={Fj => setFj(Fj)} /> : (
        (Sa ==="Immobilier") ? <SelectJF {...propsFJ1} changeFJ={Fj => setFj(Fj)} /> :
        <SelectJF {...propsFJ} changeFJ={Fj => setFj(Fj)} />
        ))
        ))}

        {(Fj==="SARL" || Fj==="EURL" || Fj==="SAS" || Fj==="SASU" || Fj==="SCI"
          || Fj==="SELARL" || Fj==="SELEURL" || Fj==="SELAS" || Fj==="SELASU") ? (<div>
          <label htmlFor="input" className={styles.label}>
            Capital social indiqué sur votre Kbis ou vos statuts
          </label>
          <input id="Kbis" className={styles.input} type="text" />
        </div> ) : ("")}

        { (Fj === "SARL" || Fj === "SELARL" ) ? ( <div className={styles.formControl}>
          <label htmlFor="select" className={styles.label}>
            Nombre d'associés
          </label>
          <select
            className={styles.select}
            name="Ouvrir une fenêtre de choix pour l'activité "
            onChange={handleNbAssocie}
          >
            <option key="..." value={null}>
              ...
            </option>
            <option key="1" value={"1"}>
              1
            </option>

            <option key="p+" value={"Plusieurs"}>
              Plusieurs
            </option>
          </select>
        </div> ) : ("") }

        { (Fj === "SAS" || Fj === "SELAS" ) ? ( <div className={styles.formControl}>
          <label htmlFor="select" className={styles.label}>
            Nombre d'actionnaires
          </label>
          <select
            className={styles.select}
            name="Ouvrir une fenêtre de choix pour l'activité "
            onChange={handleNbrActionnaire}
          >
            <option key="..." value={null}>
              ...
            </option>
            <option key="1" value={"1"}>
              1
            </option>

            <option key="p+" value={"Plusieurs"}>
              Plusieurs
            </option>
          </select>
        </div> ) : ("") }


      </form>
    </div>
  );
}
