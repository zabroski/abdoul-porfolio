import React from 'react';
import {IonPage, IonCard, IonCardHeader, IonCardContent,  IonCardSubtitle, IonContent, IonFabButton, IonIcon, IonFabList } from '@ionic/react';
import {settings, logoTwitter } from 'ionicons/icons';


export const About: React.FC = () => {
    return(
      <IonPage>
        <IonContent>
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

        </IonContent>
     
      </IonPage> 
   
    )
}

export default About;