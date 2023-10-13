import './styles.css'

function heyAlert() {
  alert("hey!");
}

export default function App() {
  const firstName = "Zachary";
  const lastName = "Taylor";

  return (
    <div className="App">
      <h1>Let's talk JSX</h1>
    <div
    className="name-container"
    style={{ color: "red", fontWeight: "bold"}}
    onClick={heyAlert}
    >
    {}
    {firstName? <h3>{firstName}</h3> : <h3>No first name</h3>}
    <h5>{lastName}</h5>
    </div>
    {}
    <input type="text" />
    <img src="my-img.png" alt="me" />
    </div>
  );
}