import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCardContent } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <>
      <IonCardContent>Hello my name is raye and Grady</IonCardContent>
      </>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1njndjndsjkndjnvjd djk kjd n</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Test page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
