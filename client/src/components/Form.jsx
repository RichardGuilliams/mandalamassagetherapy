const Form = {};

Form.TextSection = ({ id, text, placeholder }) => {
	return (
		<div>
			<label htmlFor={id}>{text}</label>
			<input type="text" id={id} placeholder={placeholder} />
		</div>
	)
}
