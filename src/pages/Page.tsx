import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useParams } from "react-router";
import "./Page.css";
import { Home } from "./Home";
import { Sumadora } from "./Sumadora";
import { Multiplicar } from "./Multiplicar";
import { TraducirNumeros } from "./TraducirNumeros";
import { ExperienciaPersonal } from "./ExperienciaPersonal";
const Page: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const getPageComponent = (pageName: string) => {
    switch (pageName) {
      case "Home":
        return <Home />;
      case "Sumadora":
        return <Sumadora />;
      case "Multiplicar":
        return <Multiplicar />;
      case "Traducir":
        return <TraducirNumeros />;
      case "Experiencia":
        return <ExperienciaPersonal />;
      default:
        return <div>Página no encontrada</div>;
    }
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        {getPageComponent(name)}
      </IonContent>
    </IonPage>
  );
};

export default Page;
