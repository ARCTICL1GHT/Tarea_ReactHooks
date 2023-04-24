import dynamic from 'next/dynamic';

const MiComponente = dynamic(() => import('../components/MiComponente'), {
  loading: () => <p>Cargando...</p>,
  ssr: false
});

function PaginaPrincipal() {
  return (
    <div>
      <h1>Bienvenido a mi sitio web</h1>
      <MiComponente />
    </div>
  );
}

export default PaginaPrincipal;
