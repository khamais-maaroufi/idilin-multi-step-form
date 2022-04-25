import React, { useState } from "react";
import styles from "./select.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function Select(props) {

  const { label, options, name } = props;
  
  //usetate for the outputs
  const [SA, setSA] = useState("");
  props.changeSA(SA);
  //useState for the conditional Rendering
  const [RenderTabac, setRenderTabac] = useState(false);
  const [Tpersonne, setTpersonne] = useState(false);
  const [Tpersonne1, setTpersonne1] = useState(false);
  const [RenderImmob, setRenderImmob] = useState(false);
  const [RenderImmob2, setRenderImmob2] = useState(false);
  
  // handle change in the side choices for the activity sector selector
  const handleTabac = (e) => {
    console.log(e.target.value);
    if (e.target.value === "true")
      toast.error("DESOLE ! NOUS NE POUVONS PAS TRAITER CETTE ACTIVITE", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      //Router here
      setTimeout(window.location.reload.bind(window.location), 6000);
  };

  const handleTpersonne = (e) => {
    console.log(e.target.value);
    if (e.target.value === "false"){
      setTpersonne1(true);
    }
    
    };

  const handleTpersonne2 = (e) => {
      console.log(e.target.value);
      if (e.target.value === "false"){
        toast.error("REPONSE INCOHERENTE!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setTimeout(window.location.reload.bind(window.location), 6000);
      }else{
        toast.error("ATTENTION ! VOTRE ACTIVITE ETANT REGLEMENTEE, VOTRE COMPTABILITE NECESSITE UN COMMISSAIRE AUX COMPTES OU, A DEFAUT, UN EXPERT-COMPTABLE POUR LES CAPACITES FINANCIERES A JUSTIFIER AU DREAL", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      
      };

      const handleImmob = (e) => {
        console.log(e.target.value);
        if (e.target.value === "true"){
          setRenderImmob2(true);
      }; 
      };

      const handleImmob2 = (e) => {
        console.log(e.target.value);
        if (e.target.value === "false"){
          toast.error("DESOLE ! NOUS NE POUVONS PAS TRAITER CETTE ACTIVITE ", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setTimeout(window.location.reload.bind(window.location), 6000);
      };
      };

 // handle change in the activity sector select and switching in between sectors
  const handleChange = (e) => {
    
    let sector = e.target.value;
    console.log(" SELECTED ACTIVITY SECTOR:",sector);
    setSA(sector);
    switch (sector) {
      case "Café Restauration":
        setRenderTabac(true);
        setTpersonne(false);
        setTpersonne1(false);
        setRenderImmob(false);
        setRenderImmob2(false);
        break;
      case "Transport de marchandises":
        toast.error("ATTENTION ! VOTRE ACTIVITE ETANT REGLEMENTEE, VOTRE COMPTABILITE NECESSITE UN COMMISSAIRE AUX COMPTES OU, A DEFAUT, UN EXPERT-COMPTABLE POUR LES CAPACITES FINANCIERES A JUSTIFIER AU DREAL", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setRenderTabac(false);
        setTpersonne(false);
        setTpersonne1(false);
        setRenderImmob(false);
        setRenderImmob2(false);
        break;
      case "Transport de personnes":
        setTpersonne(true);
        setRenderImmob(false);
        setRenderImmob2(false);
        setRenderTabac(false);
        break;
      case "Pharmacie":
        toast.error("DESOLE ! NOUS NE POUVONS PAS TRAITER CETTE ACTIVITE ", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setRenderTabac(false);
        setTpersonne(false);
        setTpersonne1(false);
        setRenderImmob(false);
        setRenderImmob2(false);
        //Router here
        setTimeout(window.location.reload.bind(window.location), 5000);

          break;  
          case "Immobilier":
            setRenderImmob(true);
            setRenderTabac(false);
            setTpersonne(false);
            setTpersonne1(false);
            break;
      default:
        setRenderTabac(false);
        setTpersonne(false);
        setTpersonne1(false);
        setRenderImmob(false);
        setRenderImmob2(false);
        break;
    }
  };


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

      {RenderTabac === true ? (
        <div className={styles.formControl}>
          <label htmlFor="select" className={styles.label}>
            Avec débit de tabac ?
          </label>
          <select
            className={styles.select}
            name="Ouvrir une fenêtre de choix pour l'activité "
            onChange={handleTabac}
          >
            <option key="..." value={null}>
              ...
            </option>
            <option key="oui" value={true}>
              oui
            </option>

            <option key="non" value={false}>
              non
            </option>
          </select>
        </div>
      ) : (
        ""
      )}

    {Tpersonne === true ? (
        <div className={styles.formControl}>
          <label htmlFor="select" className={styles.label}>
          Exercez-vous une activité de taxi sous licence?
          </label>
          <select
            className={styles.select}
            name="fenetre de choix pour transport personne"
            onChange={handleTpersonne}
          >
            <option key="..." value={null}>
              ...
            </option>
            <option key="oui" value={true}>
              oui
            </option>

            <option key="non" value={false}>
              non
            </option>
          </select>
        </div>
      ) : (
        ""
      )}

    {Tpersonne1 === true ? (
        <div className={styles.formControl}>
          <label htmlFor="select" className={styles.label}>
          Exercez-vous une activité de VTC, chauffeur privé ou autre transport collectif de personnes?
          </label>
          <select
            className={styles.select}
            name="activiteVTC"
            onChange={handleTpersonne2}
          >
            <option key="..." value={null}>
              ...
            </option>
            <option key="oui" value={true}>
              oui
            </option>

            <option key="non" value={false}>
              non
            </option>
          </select>
        </div>
      ) : (
        ""
      )}

    {RenderImmob === true ? (
        <div className={styles.formControl}>
          <label htmlFor="select" className={styles.label}>
          Exercez-vous une activité d'agent immobilier ? (différent d'une activité de SCI)
          </label>
          <select
            className={styles.select}
            name="immobilier"
            onChange={handleImmob}
          >
            <option key="..." value={null}>
              ...
            </option>
            <option key="oui" value={true}>
              oui
            </option>

            <option key="non" value={false}>
              non
            </option>
          </select>
        </div>
      ) : (
        ""
      )}  

{RenderImmob2 === true ? (
        <div className={styles.formControl}>
          <label htmlFor="select" className={styles.label}>
          Exercez-vous uniquement une activité d'intermédiaire de vente?
          </label>
          <select
            className={styles.select}
            name="immobilier2"
            onChange={handleImmob2}
          >
            <option key="..." value={null}>
              ...
            </option>
            <option key="oui" value={true}>
              oui
            </option>

            <option key="non" value={false}>
              non
            </option>
          </select>
        </div>
      ) : (
        ""
      )} 

    </>
  );
}

export default Select;
