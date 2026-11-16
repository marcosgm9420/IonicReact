import { useState } from 'react';
import { IonContent, IonHeader, IonPage, useIonViewWillEnter } from '@ionic/react';
import Navbar from '../components/Navbar';
import { Client } from '../interfaces/Client';
import { ClientsService } from '../services/ClientsService';

const ClientsPage: React.FC = () => {
  const [clientes, setClientes] = useState<Client[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');

  const cargarClientes = async () => {
    setCargando(true);
    setError('');
    try {
      const datos = await ClientsService.getAll();
      setClientes(datos);
    } catch (e) {
      console.error(e);
      setError('No se han podido cargar los clientes.');
    } finally {
      setCargando(false);
    }
  };

  // Se ejecuta cada vez que se entra en la página (también al volver desde "Añadir clientes")
  useIonViewWillEnter(() => {
    cargarClientes();
  });

  return (
    <IonPage>
      <IonHeader>
        <Navbar />
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>Clientes</h1>

        {cargando && <p>Cargando clientes...</p>}
        {error && <div className="alert alert-danger">{error}</div>}
        {!cargando && !error && clientes.length === 0 && <p>Todavía no hay clientes.</p>}

        {!cargando && clientes.length > 0 && (
          <table className="table table-dark table-striped table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Email</th>
                <th>Teléfono</th>
              </tr>
            </thead>
            <tbody>
              {clientes.map((cliente) => (
                <tr key={cliente.id}>
                  <td>{cliente.id}</td>
                  <td>{cliente.name}</td>
                  <td>{cliente.email}</td>
                  <td>{cliente.phone || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </IonContent>
    </IonPage>
  );
};

export default ClientsPage;
