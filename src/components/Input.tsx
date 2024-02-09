import { IonCol, IonInput, IonItem } from "@ionic/react";
import { useState } from "react";

interface PropsName{
    name:string
    label:string
}
export const Input: React.FC<PropsName> = ({ name, label }) => {
  const [inputValue, setInputValue] = useState<number>(0);
  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };
  return (
    <IonCol>
      <IonItem>
        <IonInput
          name={name}
          type="number"
          label={label}
          placeholder="Enter number"
          onIonChange={handleInputChange}
        ></IonInput>
      </IonItem>
    </IonCol>
  );
};