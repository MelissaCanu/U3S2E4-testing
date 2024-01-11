import { Button, ListGroup } from "react-bootstrap";

const SingleComment = ({ comment }) => {
	const deleteComment = async (asin) => {
		try {
			let response = await fetch(
				"https://striveschool-api.herokuapp.com/api/comments/" + asin,
				{
					method: "DELETE",
					headers: {
						Authorization:
							"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc1ZjY4YzNkYWRhMDAwMThhNjlmOTgiLCJpYXQiOjE3MDQ5ODQ3OTgsImV4cCI6MTcwNjE5NDM5OH0.6oOKOGcd-H0QcMMR9gs9sb5_0sSUVSn24zLASwTroQs",
					},
				}
			);
			if (response.ok) {
				alert("La recensione è stata elimata!");
			} else {
				throw new Error("La recensione non è stata eliminata!");
			}
		} catch (error) {
			alert(error);
		}
	};

	return (
		<ListGroup.Item>
			{comment.comment}
			<Button
				variant="danger"
				className="ms-2"
				onClick={() => deleteComment(comment._id)}
			>
				Elimina
			</Button>
		</ListGroup.Item>
	);
};

export default SingleComment;
