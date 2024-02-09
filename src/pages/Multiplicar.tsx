import {
  IonButton,
  IonCol,
  IonContent,
  IonInput,
  IonItem,
} from "@ionic/react";
import { useState } from "react";
import { GenerateTable } from "../components/GenerateTable";
export const Multiplicar = () => {
  const [table, setTable] = useState<number>(0);
  const handleValueTable = (event: any) => {
    setTable(event.target.value);
  };
  return (
    <>
      <IonContent>
        <div className="container-fluid">
          <IonCol>
            <IonItem>
              <IonInput
                name="table"
                type="number"
                label="Table"
                placeholder="Enter number"
                onIonChange={handleValueTable}
              ></IonInput>
            </IonItem>
          </IonCol>
          <IonButton className="p-3"  shape="round" type="submit">
            Generate
          </IonButton>
          <GenerateTable table={table}/>
        </div>
      </IonContent>
    </>
  );
};
