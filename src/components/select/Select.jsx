import React, { useState } from "react";
import styles from "./select.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Select(props) {

  const { label, options, name } = props;

  //useState for the activity sector selector
  const [RenderTabac, setRenderTabac] = useState(false);

  //useState for the juridical forme selector

  

  // handle change in the side choices for juridical forme selector



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
  };

// handle change in the juridical form  select


 // handle change in the activity sector select
  const handleChange = (e) => {
    console.log(e.target.value);
    let sector = e.target.value;
    switch (sector) {
      case "Café Restauration":
        setRenderTabac(true);
        break;

      default:
        setRenderTabac(false);
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
    </>
  );
}

export default Select;
