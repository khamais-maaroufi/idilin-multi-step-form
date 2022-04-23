import React, { useState } from "react";
import StepOneForm from "../../components/stepOneForm/StepOneForm";
import StepTwoForm from "../../components/stepTwoForm/StepTwoForm";
import StepThreeForm from "../../components/stepThreeForm/StepThreeForm";
import "./formLayout.module.css";
import { ToastContainer } from "react-toastify";
import styles from "./formLayout.module.css";
import StepProgressBar from 'react-step-progress';
// import the stylesheet
import 'react-step-progress/dist/index.css';

export default function FormLayout() {
  // const [current, setCurrent] = useState(1);
  // const retour = () => {
  //   setCurrent(current - 1);
  // };
  // const after = () => {
  //   if (current === 3) {
  //     // handleSubmit()
  //     console.log("submit");
  //   } else {
  //     setCurrent(current + 1);
  //   }
  // };
  // return (
  //   <div className="form-layout">
  //     <ToastContainer />
  //     {current === 1 ? <StepOneForm /> : ""}
  //     {current === 2 ? <StepTwoForm /> : ""}
  //     {current === 3 ? <StepThreeForm /> : ""}

  //     <div className={styles.pagination}>
  //       {current !== 1 ? <button onClick={retour}>Retour</button> : ""}
  //       <button onClick={after}>Confirmer</button>
  //     </div>
  //   </div>
  // );

  const step1Content = <StepOneForm />;
  const step2Content = <StepTwoForm />;
  const step3Content = <StepThreeForm />;

  // setup step validators, will be called before proceeding to the next step
  function step2Validator() {
    return true;
  }

  function step3Validator() {
    // return a boolean
  }
  return (
    <StepProgressBar
      startingStep={0}
      className={styles.progressBar}
      steps={[
        {
          label: "Etape 1",
          name: "Etape 1",
          content: step1Content,
        },
        {
          label: "Etape 2",
          name: "Etape 2",
          content: step2Content,
        },
        {
          label: "Etape 3",
          name: "Etape 3",
          content: step3Content,
          validator: step2Validator,
        },
        {
          label: "Finir",
          name: "Finir",
          content: step3Content,
        },
      ]}
    />
  );
}
