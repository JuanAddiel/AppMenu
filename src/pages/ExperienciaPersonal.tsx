import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";

export const ExperienciaPersonal = () => {
  return (
    <>
      <IonCard>
        <iframe
          width="350"
          height="200"
          src="https://www.youtube.com/embed/6L13URps3_8?si=DCedueW9IdWLdEgb"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <IonCardHeader>
          <IonCardTitle>Juan Addiel</IonCardTitle>
          <IonCardSubtitle>2021-1858</IonCardSubtitle>
        </IonCardHeader>
      </IonCard>
    </>
  );
};
