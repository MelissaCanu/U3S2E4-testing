import { Spinner } from "react-bootstrap";

const Loading = () => (
	<Spinner
		data-testid="loading-spinner"
		animation="border"
		variant="success"
		className="mt-2"
	/>
);

export default Loading;
