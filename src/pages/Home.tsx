
import {
  IonCol,
  IonGrid,
  IonImg,
  IonItem,
  IonLabel,
} from "@ionic/react";

export const Home: React.FC = ()=>{
    return (
      <div className="container-fluid">
          <IonGrid>
            <IonCol>
              <IonImg
                className="mb-4 shadow-lg bg-body-tertiary roundedion-padding-bottom mx-auto rounded"
                alt="Juan Leonardo"
                src="/juan.jpg"
                style={{ width: "200px", height: "200px", display: "flex" }}
              />
              <IonItem>
                <IonLabel className="text-center">
                  <h1>Juan Addiel</h1>
                  <h2 className="mb-3">
                    <strong>Leonardo Jaquez</strong>
                  </h2>
                  <h3>addieljaquez@gmail.com</h3>
                </IonLabel>
              </IonItem>
            </IonCol>
          </IonGrid>
        </div>
    );
}