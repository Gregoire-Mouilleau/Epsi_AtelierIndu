import { render, screen, fireEvent } from "@testing-library/react";
import Calculator from '../app/utils/Calculator';

test("Addition fonctionne correctement", () => {
  render(<Calculator />);
  const inputA = screen.getByPlaceholderText("Nombre A");
  const inputB = screen.getByPlaceholderText("Nombre B");
  const select = screen.getByRole("combobox");
  const button = screen.getByText("Calculer");
  const result = screen.getByText(/Résultat/i);

  fireEvent.change(inputA, { target: { value: "5" } });
  fireEvent.change(inputB, { target: { value: "3" } });
  fireEvent.change(select, { target: { value: "+" } });
  fireEvent.click(button);

  expect(result).toHaveTextContent("8");
});

test("Division par zéro affiche un message d'erreur", () => {
  render(<Calculator />);
  const inputA = screen.getByPlaceholderText("Nombre A");
  const inputB = screen.getByPlaceholderText("Nombre B");
  const select = screen.getByRole("combobox");
  const button = screen.getByText("Calculer");
  const result = screen.getByText(/Résultat/i);

  fireEvent.change(inputA, { target: { value: "5" } });
  fireEvent.change(inputB, { target: { value: "0" } });
  fireEvent.change(select, { target: { value: "/" } });
  fireEvent.click(button);

  expect(result).toHaveTextContent("Erreur : division par zéro");
});
