
import React from 'react';
import { IonContent, IonFab, IonFooter, IonFabButton, IonFabList, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, } from '@ionic/react';
import { arrowForwardCircle, logoVimeo} from 'ionicons/icons';
import "../pages/Projects.css";
import "../pages/IconFab";
import IconFab from '../pages/IconFab';

interface Props{
  children?:any
}


export const Projects: React.FC<Props> = (props:Props) => {
  return (
    <IonPage>
      <IonHeader translucent >
        <IonToolbar>
          <IonTitle>Projects</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {/* <IonFab vertical="center" horizontal="end" slot="fixed">
          <IonFabButton>
            <IonIcon icon={add} />
          </IonFabButton>
          <IonFabList side="top">
            <IonFabButton><IonIcon icon={logoVimeo} /></IonFabButton>
          </IonFabList>
          <IonFabList side="top">
            <IonFabButton><IonIcon icon={logoVimeo} /></IonFabButton>
          </IonFabList>
        </IonFab> */}

        <IonFab vertical="center" horizontal="end" slot="fixed">
          <IonFabButton>
            <IonIcon icon={arrowForwardCircle} />
          </IonFabButton>
          <IonFabList side="top">
            <IonFabButton>
              <IonIcon icon={logoVimeo} /></IonFabButton>
          </IonFabList>
        </IonFab>


        <IonCard  href="#" className="cards">
        <img src="./assets/img/" alt="" />
          <IonCardHeader >
            <IonCardSubtitle className="subtitle">Full stack App</IonCardSubtitle>
            <IonCardSubtitle className="app-name">DYSWIS</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent className="contents">
            App with secure and confidential space where clinicans can view and share clinical and professional development videos build using HTML, CSS Javascript and React ionic framework using both Englishand French copy.<br />
            Part of full stack team focused on frond end.
          </IonCardContent>
        </IonCard>

        <IonCard  href="#" className="cards">
        <img src="./assets/img/" alt="" />
          <IonCardHeader >
            <IonCardSubtitle className="subtitle">Full-stack App</IonCardSubtitle>
            <IonCardSubtitle className="app-name">Addington Park</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent className="contents">
            Shopping functionalities include collecting user emails and building both English/French copy. < br />
            Build using HTML, CSS for both desktop and mobile integrationwith functions for user registration. < br />
            Improvement include resizing imager, integrating social media, and adding scaling features over time.
              
          </IonCardContent>
        </IonCard> 

        <IonCard  href="#" className="cards">
        <img src="./assets/img/home.png" alt="" />
          <IonCardHeader >
            <IonCardSubtitle className="subtitle">Full-stack App</IonCardSubtitle>
            <IonCardSubtitle className="app-name">What's in store?</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent className="contents">
              Users are allowed to sell items daily as well as use the interface to buy with others users. <br />
              Built using React.js, HTML, Express,  and CSS. 
          </IonCardContent>
        </IonCard> 

        <IonCard  href="#" className="cards">
        <img src="./assets/img/musico.png" alt="" />
          <IonCardHeader >
            <IonCardSubtitle className="subtitle">Full stack App</IonCardSubtitle>
            <IonCardSubtitle className="app-name">Music is Life</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent className="contents">
            Users can access the biographical information and news about musicals artists. <br />
            Built using CSS, React.js, Express, and pulls from API to generate artist information.
          </IonCardContent>
        </IonCard>
        {/* <IconFab /> */}
        </IonContent>
      </IonPage>
  );
};
export default Projects;

