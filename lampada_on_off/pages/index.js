import { useState } from "react";

export default function Home() {
  const [clickCount, setClickCount] = useState(0);
  const [isQueimada, setIsQueimada] = useState(false);
  const [lampadaSrc, setLampadaSrc] = useState("/assets/off.png");

  function handleClick() {
    if (isQueimada) {
      alert("A lâmpada já está queimada!");
      setLampadaSrc("/assets/boom.jpg");
      return;
    }
    const newCount = clickCount + 1;
    setClickCount(newCount);
    if (newCount >= 10) {
      setLampadaSrc("/assets/boom.jpg");
      setIsQueimada(true);
    }
  }

  function On() {
    if (!isQueimada) setLampadaSrc("/assets/on.png");
    handleClick();
  }
  function Off() {
    if (!isQueimada) setLampadaSrc("/assets/off.png");
    handleClick();
  }
  function Reiniciar() {
    setLampadaSrc("/assets/off.png");
    setClickCount(0);
    setIsQueimada(false);
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <h1 className="text-center">Lâmpada On/Off</h1>
          <div className="text-center">
            <img src={lampadaSrc} alt="Lâmpada" className="img-fluid" style={{ maxWidth: "300px", height: "auto" }} />
          </div>
          <div className="text-center my-2">
            <strong>Cliques: {clickCount}/10</strong>
          </div>
          <div className="text-center">
            <button className="btn btn-light" onClick={On}>Ligar</button>
            <button className="btn btn-dark" onClick={Off}>Desligar</button>
            <button className="btn btn-warning" onClick={Reiniciar}>Trocar Lâmpada</button>
          </div>
        </div>
      </div>
    </div>
  );
}