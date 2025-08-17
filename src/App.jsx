import MapView from './components/MapView';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div id='app' className='flex h-screen w-screen'>
      <Sidebar />
      <MapView />
    </div>
  );
}

export default App