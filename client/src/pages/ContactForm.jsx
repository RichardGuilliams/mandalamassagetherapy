export default function ContactForm() {
	return (
		<div>Contact Form</div>
	)
}

const FormInput = ({ title, type, placeholder }) => {
	return (
		<section>
			<span>{title}</span>
			<input type={type} placeholder={placeholder} />
		</section>
	)
}
