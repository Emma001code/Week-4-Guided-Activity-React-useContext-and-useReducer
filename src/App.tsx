import Navbar from "./components/Navbar";
import TaskManager from "./components/TaskManager";
import { LIGHT_THEME } from "./constants/theme";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import "./App.css";

function AppLayout() {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme === LIGHT_THEME ? "light" : "dark"}`}>
      <Navbar />
      <main className="content">
        <TaskManager />
      </main>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppLayout />
    </ThemeProvider>
  );
}

export default App;
