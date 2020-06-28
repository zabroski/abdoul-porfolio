import React from 'react';
import { IonFab, IonFabButton, IonIcon, IonFabList } from '@ionic/react';
import {settings, logoTwitter } from 'ionicons/icons';

export const IconFab: React.FC = () => {
  return (
        <IonFab vertical="center" horizontal="start" edge slot="">
          <IonFabButton>
            <IonIcon icon={settings} />
          </IonFabButton>
          <IonFabList side="end">
            <IonFabButton><IonIcon icon={logoTwitter} /></IonFabButton>
          </IonFabList>
        </IonFab>   

  );
};

export default IconFab;