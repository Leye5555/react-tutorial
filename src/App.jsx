import Card from "./components/Card";
import Button from "./components/Button";

function App() {
  return (
    <>
      <div style={{ display: "flex", gap: "12px" }}>
        <Card name="Esther" />
        <Card name="Havilah" />
        <Card name="Abigail" />
        <Card name="Sarah" />
        <Card name="Queen" />
      </div>
      <div>
        <Button text="I am a button"></Button>
      </div>
    </>
  );
}

export default App;
