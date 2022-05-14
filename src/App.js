import { Button, Input, Ul, SectionTitle, Dashboard } from "./components";

function App() {
  return (
    <div className="App">
      <Dashboard owner={"admin"}>
        <main>
          <SectionTitle title={"CCNA"}>
            A CISCO course.It has also evolved to include a command-line
            interface capability and can be used in standalone graphical
            applications
          </SectionTitle>
        </main>
      </Dashboard>
    </div>
  );
}

export default App;
