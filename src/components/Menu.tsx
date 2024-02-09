import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { addOutline, addSharp, calculatorOutline, calculatorSharp, constructOutline, constructSharp, eyeOutline, eyeSharp, homeOutline, homeSharp} from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: "Home",
    url: "/folder/Home",
    iosIcon: homeOutline,
    mdIcon: homeSharp,
  },
  {
    title: "Sumadora",
    url: "/folder/Sumadora",
    iosIcon: addOutline,
    mdIcon: addSharp,
  },
  {
    title: "Multiplicar",
    url: "/folder/Multiplicar",
    iosIcon: calculatorOutline,
    mdIcon: calculatorSharp,
  },
  {
    title: "Traducir",
    url: "/folder/Traducir",
    iosIcon: constructOutline,
    mdIcon: constructSharp,
  },
  {
    title: "Experiencia",
    url: "/folder/Experiencia",
    iosIcon: eyeOutline,
    mdIcon: eyeSharp,
  },
];


const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Juan Leonardo</IonListHeader>
          <IonNote>addieljaquez@gmail.com</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
