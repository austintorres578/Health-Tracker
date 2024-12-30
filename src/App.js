
import './App.css';
import Header from './components/layout/Header'
import StepPreview from './components/common/previews/StepPreview';
import CaloriePreview from './components/common/previews/CaloriePreview';
import WaterPreview from './components/common/previews/WaterPreview';
import SleepPreview from './components/common/previews/SleepPreview';

function App() {
  return (
    <div>
      <Header />
      <main>
        <StepPreview />
        <CaloriePreview />
        <WaterPreview />
        <SleepPreview />
      </main>
    </div>
  );
}

export default App;
