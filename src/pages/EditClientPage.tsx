import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const EditClientPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Editar cliente</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding"></IonContent>
    </IonPage>
  );
};

export default EditClientPage;
