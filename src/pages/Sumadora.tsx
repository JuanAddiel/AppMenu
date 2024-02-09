import React, {  useState } from "react";
import { IonButton, IonCol, IonGrid, IonInput, IonItem,} from "@ionic/react";
import { Input } from "../components/Input";

export const Sumadora: React.FC = () => {
  const [result, setResult] = useState<number>(0);

  const calcularSuma = (e: any) => {
    e.preventDefault();
    setResult(parseInt(e.target.first.value) + parseInt(e.target.second.value))
  };

  return (
    <form onSubmit={calcularSuma}>
      <div className="container-fluid">
        <IonGrid>
          <Input name="first" label="Enter first" />
          <IonCol>
            <Input name="second" label="Enter Second" />
          </IonCol>
          <IonButton
            expand="full"
            color={"primary"}
            shape={"round"}
            className=""
            type="submit"
          >
            Sum
          </IonButton>
          {
            result != 0 ? <IonItem className="m-4">
            <IonInput

              label="Result"
              value={result}
              disabled={true}
            ></IonInput>
          </IonItem>:""
          }
         
        </IonGrid>
      </div>
    </form>
  );
};
