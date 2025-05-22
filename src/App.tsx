import { Dashboard } from "./components/dashboard";
import { DesktopShell } from "./components/desktop-shell";

function App() {
  return (
    <DesktopShell>
      <Dashboard />
    </DesktopShell>
  );
}

export default App;
