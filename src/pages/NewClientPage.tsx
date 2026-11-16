import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IonContent, IonHeader, IonPage } from '@ionic/react';
import Navbar from '../components/Navbar';
import { ClientsService } from '../services/ClientsService';

const NewClientPage: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [guardando, setGuardando] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const guardar = async (e: React.FormEvent) => {
    e.preventDefault(); // evita que el formulario recargue la página
    setGuardando(true);
    setError('');
    try {
      await ClientsService.create({ name: nombre, email, phone: telefono || undefined });
      setNombre('');
      setEmail('');
      setTelefono('');
      navigate('/clientes'); // vuelve a la tabla para ver el cliente nuevo
    } catch (err) {
      console.error(err);
      setError('No se ha podido guardar el cliente.');
    } finally {
      setGuardando(false);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <Navbar />
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>Añadir cliente</h1>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={guardar} style={{ maxWidth: 500 }}>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input
              id="nombre"
              className="form-control"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              id="email"
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="telefono" className="form-label">Teléfono (opcional)</label>
            <input
              id="telefono"
              type="tel"
              className="form-control"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary" disabled={guardando}>
            {guardando ? 'Guardando...' : 'Guardar cliente'}
          </button>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default NewClientPage;
