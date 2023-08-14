import StepComp from "./StepComp";

import "../style/RouteComp.css";

import { v4 as uuid } from 'uuid';

// --------------------------------------------------------
// ---- PROPS ----
// 1) key -> The index in the routesList array of the current routeComp
// 2) addRouteName -> The callback to add the routeName
// 3) addStepList -> the callback to add stepList
// --------------------------------------------------------
export default function RouteComp(props) {

  // --------------------------------------------------------
  // --------------------------------------------------------
  // ---- HANDELERS ----
  const handleRouteNameInput = (event) => {
    props.addRouteNameToRoute(event.target.value , props.routeIndex)
  }

  const handleNewStepInput = () => {
    props.addStepListToRoute([...props.stepList , {id: uuid() , length: "" , direction: ""}] , props.routeIndex) 
  }
  // --------------------------------------------------------
  // --------------------------------------------------------


  // --------------------------------------------------------
  // --------------------------------------------------------
  // --- MAPPING ----
  const steps = props.stepList.map((stepElement) => (
    // The following data is transmitted:
    // 1) key -> the index in the array of the current step
    // 2) setLength -> Sending a callback to *send the data about the step's length*
    // 3) setDirection -> Sending a callback to *send the data about the step's direction*
  <StepComp key={stepElement.id} 
            stepIndex={stepElement.id}
            routeIndex = {props.routeIndex}
            addLengthToStep={props.addLengthToStep} 
            addDirectionToStep={props.addDirectionToStep} />
  ));
  // --------------------------------------------------------
  


  // --- JSX ----
  return (
    <div className="routeComp">
      <div className="routeName">
        <label>Route Name:</label>
        <input type="text" onChange = {handleRouteNameInput}></input>
      </div>
      <div className="stepCompList">{steps}</div>
      <button onClick = {() => {handleNewStepInput()}}>Add Step</button>
    </div>
  );
}
