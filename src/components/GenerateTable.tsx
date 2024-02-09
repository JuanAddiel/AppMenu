import { IonItem, IonItemDivider, IonItemGroup, IonLabel, IonList } from "@ionic/react";
import React from "react";
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

interface Props{
    table:number
}
export const GenerateTable: React.FC<Props>=({table})=>{
    return (
      <>
        {table != 0 ? (
          <IonList className="" inset={true}>
            {array.map((number, keyIndex) => {
              return (
                <IonItem key={keyIndex}>
                  <IonLabel key={keyIndex}>
                    {table} x {number} = {table * number}
                  </IonLabel>
                </IonItem>
              );
            })}
          </IonList>
        ) : (
          <IonItemGroup className="p-4" color="light">
            <IonItemDivider>
              <IonLabel color="danger">No hay datos</IonLabel>
            </IonItemDivider>
          </IonItemGroup>
        )}
      </>
    );
}

