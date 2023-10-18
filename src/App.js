import { Main } from "./Components/Main";
import { SidebarProvider } from "./Contexts/SidebarContext";

function App() {
  return (
    <div className="App">
      <SidebarProvider>
        <Main />
      </SidebarProvider>
    </div>
  );
}

export default App;
