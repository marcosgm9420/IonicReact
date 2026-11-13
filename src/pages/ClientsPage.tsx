import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const ClientsPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Clientes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding"></IonContent>
    </IonPage>
  );
};

export default ClientsPage;
