import React, { useState, useEffect } from "react";
import dropdownOptions from "./activitySectorData";
import dropdownOptionsFJ from "./formJuridiqueData";
import Select from "../select/Select";
import SelectJF from "../select/SelectJF";
import styles from "../stepOneForm/stepOneForm.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {dropdownOptionsCI, dropdownOptionsCIa, dropdownOptionsCIb,
  dropdownOptionsCIc, dropdownOptionsCId, dropdownOptionsCIe,
  dropdownOptionsCIf, dropdownOptionsCIg, dropdownOptionsCIh} from "./CategorieImpoData";
import ICSelector from "./ICSelector";




export default function StepOneForm() {
  useEffect(() => {

  });
  //all the hooks of this step
  const [NbrAssocie, setNbrAssocie] = useState("");
  const [NbrActionnaire, setNbrActionnaire] = useState("");
  const [TVA, setTVA] = useState("");
  const [TI, setTI] = useState("");
  const [RM, setRM] = useState("");
	console.log("En REGIME MICRO?:",RM);
  console.log("TYPE DIMPO:", TI);
  console.log("TVA hook:", TVA);
  console.log("NbrActionnaire: ", NbrActionnaire);
  console.log("NOMBRE ASSOCIES: ", NbrAssocie);
  const [CI, setCI] = useState("");
  console.log("categorie impo:", CI);

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

  //props of IMPO category
  const propsCI = {
    options: dropdownOptionsCI,
};
const propsCIa = {
    options: dropdownOptionsCIa,
};
const propsCIb = {
    options: dropdownOptionsCIb,
};
const propsCIc = {
    options: dropdownOptionsCIc,
};
const propsCId = {
    options: dropdownOptionsCId,
};
const propsCIe = {
    options: dropdownOptionsCIe,
};
const propsCIf = {
    options: dropdownOptionsCIf,
};
const propsCIg = {
    options: dropdownOptionsCIg,
};
const propsCIh = {
    options: dropdownOptionsCIh,
};


  //handlechange 
  const handleNbAssocie = (e) => {
    setNbrAssocie(e.target.value);
    
  };
  const handleNbrActionnaire = (e) => {
  setNbrActionnaire(e.target.value);
  
  };
  
  const handleTVA = (e) => {
    setTVA(e.target.value);
    
  };

  const handleTI = (e) => {
    setTI(e.target.value);
    
    };
  
    const handleRM = (e) => {
      setRM(e.target.value);
      
      if (e.target.value === "true") {
        toast.error("Pour rappel, la tenue de comptabilité n'est pas obligatoire en régime micro ", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
          });	
    };
    };

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

        <div>
          <label htmlFor="input" className={styles.label}>
            Adresse du siège social
          </label>
          <input id="add-siege" className={styles.input} type="text" />
        </div>

        <div>
          <label htmlFor="input" className={styles.label}>
          Code postal
          </label>
          <input id="code-postal" className={styles.input} type="text" maxLength="5" minLength={5}/>
        </div>

        <div>
          <label htmlFor="input" className={styles.label}>
          Ville
          </label>
          <input id="Ville" className={styles.input} type="text" />
        </div>

        <div>
          <label htmlFor="input" className={styles.label}>
          Téléphone
          </label>
          <input id="Téléphone" className={styles.input} type="text" />
        </div>

        <div>
          <label htmlFor="input" className={styles.label}>
          SIRET (14 chiffres)
          </label>
          <input id="SIRET" className={styles.input} type="text" maxLength={14} minLength={14}/>
        </div>

        { ((Fj === "Association Loi 1901 non lucrative") || (Fj === " Association lucrative") ||
          (Fj === "Autoentrepreneur") || (Fj === "Assurance") ) ? (
          <div className={styles.formControl}>
          <label htmlFor="select" className={styles.label}>
            Êtes-vous en franchise en base de TVA? (pas de TVA)*
          </label>
          <select
            className={styles.select}
            name="TVA"
            onChange={handleTVA}
          >
            <option key="..." value={null}>
              ...
            </option>
            <option key="ouiTva" value={true}>
              oui
            </option>
          </select>
        </div>) : (<div className={styles.formControl}>
          <label htmlFor="select" className={styles.label}>
            Êtes-vous en franchise en base de TVA? (pas de TVA)*
          </label>
          <select
            className={styles.select}
            name="TVA"
            onChange={handleTVA}
          >
            <option key="..." value={null}>
              ...
            </option>
            <option key="ouiTva" value={true}>
              oui
            </option>

            <option key="nonTva" value={false}>
              non
            </option>
          </select>
        </div>)

        }

        { TVA === "false" ? (<div>
                  <label htmlFor="input" className={styles.label}>
                  Numéro de TVA intracommunautaire
                  </label>
                  <span styles={{position: "relative", right: "-3px", color: "grey"}}>FR </span><input
                   id="NumTVA" className={styles.input} styles={{pl: "50px", ml: "-50px"}}
                   type="text"  minLength={11}/>
                </div>
        ) : ("") }


{ ((Fj === "Association Loi 1901 non lucrative") || (Fj === " Association lucrative")) ? (
          <div className={styles.formControl}>
          <label htmlFor="select" className={styles.label}>
            Type d'imposition*
          </label>
          <select
            className={styles.select}
            name="TI"
            onChange={handleTI}
          >
            <option key="..." value={null}>
              ...
            </option>
            <option key="IS" value="IS">
              IS
            </option>
          </select>
        </div>) : ( ((Fj === "Entreprise individuelle") || (Fj === "Micro-entrepreneur")) ?
         (<div className={styles.formControl}>
          <label htmlFor="select" className={styles.label}>
            Type d'imposition*
          </label>
          <select
            className={styles.select}
            name="TI"
            onChange={handleTI}
          >
            <option key="..." value={null}>
              ...
            </option>
            <option key="IR" value="IR">
              IR
            </option>
          </select>
        </div>) : ( <div className={styles.formControl}>
          <label htmlFor="select" className={styles.label}>
            Type d'imposition*
          </label>
          <select
            className={styles.select}
            name="TI"
            onChange={handleTI}
          >
            <option key="..." value={null}>
              ...
            </option>
            <option key="IR" value="IR">
              IR
            </option>
	          <option key="IS" value="IS">
              IS
            </option>
          </select>
        </div> ))}

        { (Fj === "Autoentrepreneur") ? (<div className={styles.formControl}>
          <label htmlFor="select" className={styles.label}>
            Êtes-vous en régime micro ?*
          </label>
          <select
            className={styles.select}
            name="RM"
            onChange={handleRM}
          >
            <option key="..." value="">
              ...
            </option>
            <option key="ouiRM" value="true" >
              oui
            </option>
          </select>
        </div>): (<div className={styles.formControl}>
          <label htmlFor="select" className={styles.label}>
            Êtes-vous en régime micro ?*
          </label>
          <select
            className={styles.select}
            name="RM"
            onChange={handleRM}
          >
            <option key="..." value="">
              ...
            </option>
            <option key="ouiRM" value="true" >
              oui
            </option>
	          <option key="nonRM" value="false" >
              non
            </option>
          </select>
        </div> )}

        
        {
        ((Fj === "Association Loi 1901 non lucrative") || (Fj === "Association lucrative")) ? (
        <ICSelector {...propsCIa}  changeCI={CI => setCI(CI)} />) : (
        ((Fj === "SARL") || (Fj === "EURL")) ? (<ICSelector {...propsCIb}  changeCI={CI => setCI(CI)} />) :
        (
        (Sa === "Agricole Elevage") ? (<ICSelector {...propsCIc}  changeCI={CI => setCI(CI)} />) : (
        (Sa === "Profession Libérale") ? (<ICSelector {...propsCId}  changeCI={CI => setCI(CI)} />) : (
        ( (Fj === "SAS")||(Fj === "SASU")||(Fj === "Entreprise Individuelle")||(Fj === "EIRL") )? (
        <ICSelector {...propsCIe}  changeCI={CI => setCI(CI)} />) : (
        (Fj === "SCI") ? (<ICSelector {...propsCIf}  changeCI={CI => setCI(CI)} />) : (
        ((Fj === "SELARL")||(Fj === "SELEURL")||(Fj === "SELAS")||(Fj === "SELASU")) ? (<ICSelector {...propsCIg}  changeCI={CI => setCI(CI)} />) :
        ((Fj === "Autoentrepreneur") ? (<ICSelector {...propsCIh}  changeCI={CI => setCI(CI)} />) : (<ICSelector {...propsCI}  changeCI={CI => setCI(CI)} />))
        )
        )
        )
        )
        )
        )}

      </form>
    </div>
  );
}
