import SideBar from './components/SideBar';
import { useTheme } from './hooks/useTheme';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="w-screen h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <SideBar />

      <div className="flex flex-1 justify-center items-center bg-red-500 dark:bg-green-500">
        <button onClick={toggleTheme}>Toggle theme (Current: {theme})</button>
      </div>
    </div>
  );
}

export default App;
