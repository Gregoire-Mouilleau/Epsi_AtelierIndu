"use client";
import { useState } from "react";

export default function Calculator() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState<number | string>("");

  function calculate() {
    const numA = parseFloat(a);
    const numB = parseFloat(b);

    if (isNaN(numA) || isNaN(numB)) {
      setResult("Veuillez entrer des nombres valides");
      return;
    }

    let res;
    switch (operator) {
      case "+":
        res = numA + numB;
        break;
      case "-":
        res = numA - numB;
        break;
      case "*":
        res = numA * numB;
        break;
      case "/":
        res = numB !== 0 ? numA / numB : "Erreur : division par zéro";
        break;
      default:
        res = "Opérateur non supporté";
    }

    setResult(res);
  }

  return (
    <div>
      <input
        type="text"
        value={a}
        onChange={(e) => setA(e.target.value)}
        placeholder="Nombre A"
      />
      <select value={operator} onChange={(e) => setOperator(e.target.value)}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input
        type="text"
        value={b}
        onChange={(e) => setB(e.target.value)}
        placeholder="Nombre B"
      />
      <button onClick={calculate}>Calculer</button>
      <h3>Résultat : {result}</h3>
    </div>
  );
}
