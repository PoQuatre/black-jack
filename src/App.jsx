import { Route, Routes } from 'react-router-dom';
import { Start, Game, End } from './views';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/game" element={<Game />} />
      <Route path="/end" element={<End />} />
    </Routes>
  );
}
