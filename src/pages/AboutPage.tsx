import { IonContent, IonHeader, IonPage } from '@ionic/react';
import Navbar from '../components/Navbar';

const AboutPage: React.FC = () => (
  <IonPage>
    <IonHeader>
      <Navbar />
    </IonHeader>
    <IonContent className="ion-padding">
      <h1>Sobre el proyecto</h1>
      <p>
        AppClients es una aplicación de gestión de clientes hecha con Ionic React y TypeScript.
        Los datos se guardan en Supabase y el diseño usa Bootstrap.
      </p>
      <img src="/proyecto.webp" alt="Imagen del proyecto AppClients" width="400" />
      <br />
      <br />
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/tW1HO7i9EIM"
        title="React Supabase CRUD Tutorial"
        allowFullScreen
      />
    </IonContent>
  </IonPage>
);

export default AboutPage;
