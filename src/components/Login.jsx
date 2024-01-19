import { useState, useRef } from 'react';

export default function Login() {
	const emailInput = useRef();
	const passwordInput = useRef();

	const [emailIsInvalid, setEmailIsInvalid] = useState(false);

	function handleSubmit(event) {
		event.preventDefault();
		const enteredEmail = emailInput.current.value;
		console.log(enteredEmail);
		const enteredPassword = passwordInput.current.value;
		const emailIsValid = enteredEmail.includes('@');

		if (!emailIsValid) {
			setEmailIsInvalid(true);
			return;
		}

		setEmailIsInvalid(false);
		// do more
		console.log('go');
	}

	return (
		<form onSubmit={handleSubmit}>
			<h2>Login</h2>

			<div className='control-row'>
				<div className='control no-margin'>
					<label htmlFor='email'>Email</label>
					<input ref={emailInput} id='email' type='email' name='email' />
					<div className='control-error'>{emailIsInvalid && <p>Please entered a valid email address</p>}</div>
				</div>
				<div className='control no-margin'>
					<label htmlFor='password'>Password</label>
					<input ref={passwordInput} id='password' type='password' name='password' />
				</div>
			</div>

			<p className='form-actions'>
				<button className='button button-flat'>Reset</button>
				<button className='button'>Login</button>
			</p>
		</form>
	);
}
