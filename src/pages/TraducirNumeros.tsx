import { IonButton, IonCol, IonContent, IonInput, IonItem, IonLabel } from "@ionic/react";
import { FC, useState } from "react";
import { convertirNumeros } from "../helpers/ConvertirNumeros";

export const TraducirNumeros:FC = ()=>{
    const [translate, setTranslate] = useState<number>(0);
    const handleNumber = (event:any)=>{
    setTranslate(event.target.value);

    }
    const numberToLetters = convertirNumeros(translate);
    return (
      <IonContent>
        <div className="container-fluid">
          <IonCol>
            <IonItem>
              <IonInput
                name="number"
                type="number"
                label="Number"
                placeholder="Enter number"
                onIonChange={handleNumber}
              ></IonInput>
            </IonItem>
          </IonCol>
          <IonButton className="p-3" shape="round" type="submit">
            Translate
          </IonButton>
          {
            translate !== 0 ?<IonItem>
            <IonLabel className="text-center">
              <h2 className="mb-3">
                <strong>El numero {translate} en letra es: {numberToLetters}</strong>
              </h2>
            </IonLabel>
          </IonItem>:""
          }
          
        </div>
      </IonContent>
    );
}