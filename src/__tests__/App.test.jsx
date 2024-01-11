/* creato cartella __tests__ >>> con file App.test.jsx */
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";
import Welcome from "../components/Welcome";
import AllTheBooks from "../components/AllTheBooks";
import fantasy from "../data/fantasy.json";

/* WELCOME COMPONENT */

describe("Welcome Component Test", () => {
	/* qua raggruppo i test correlati al componente "Welcome" e descrivo brevemente a cosa mi riferisco */
	it("Welcome renders correctly", () => {
		/* "it" serve per un test specifico all'interno del blocco "describe", con descrizione tra "" del test specifico che voglio eseguire */
		render(<Welcome />);
		/* qua mi assicuro che Welcome venga montato correttamente */
		const welcomeComponent = screen.getByText(/Benvenuti in EpiBooks!/i);
		expect(welcomeComponent).toBeInTheDocument();
	});

	/* n BOOTSTRAP CARDS = n LIBRI */
	/* in "Components" vedo che ci sono 150 libri partendo da 0 a 149 */
	it("All books are correctly rendered with cards", () => {
		render(<AllTheBooks />);
		const allTheBookCards =
			screen.getAllByTestId(
				"book-card"
			); /* ho aggiunto data-testid="book-card" a AllTheBooks.jsx */
		expect(allTheBookCards).toHaveLength(fantasy.length);
	});
});
