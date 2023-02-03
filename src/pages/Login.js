import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { loginRequest } from '../services/user';
import style from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { updateCurrentUser } from '../redux/actions/user';

const Container = style.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display:flex;
    justify-content: center;
    align-items:center;
    font-weigth: bold;
    background-image: url("https://rickandmortyapi.com/api/character/avatar/1.jpeg");
`;
const FormContianer = style.div`
    display:flex;
    border-radius:.375rem;
    height: 50%;
    width: 30%;
    padding: 34px;
    background: white;
    opacity: 0.97;
    z-index:1;
`;
const LoginContainer = style.div`
    display:flex;
    width: 100%;
    margin-left: 5px;
    margin-bottom: 24px;
    font-size: 34px;
    font-weight: bold;
`;
const SignUp = style.div`
        width: 100%;
        display: flex;
        justify-content: flex-end;
        margin-right: 10px;
        margin-top: 10px;
        font-weight: bold;
        :hover{
            text-decoration: underline;
            cursor: pointer;
        }
`;
export const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [validated, setValidated] = useState(false);
	const [error, setError] = useState('');
	const { register, handleSubmit, formState: {errors} } = useForm();

	const login = async (data) => {
		setValidated(true);
		if (Object.keys(errors).length === 0) {
			const result = await loginRequest(data);
			if (result.status !== 200) setError(result?.error?.message);
			else {
				dispatch(updateCurrentUser(result.response))
				navigate('/character')};
		}
	};

	return (
		<Container>
			<FormContianer>
				<Form
					style={{ width: '100%' }}
					noValidate
					validated={validated}
					onSubmit={handleSubmit(login)}
				>
					<LoginContainer>Login</LoginContainer>
					<Form.Group className='mb-3' controlId='formBasicEmail'>
						<Form.Control
							required
							type='email'
							placeholder='Enter email'
							{...register('email', { required: true })}
						/>
						<Form.Control.Feedback type='invalid'>
							Please provide a valid email.
						</Form.Control.Feedback>
					</Form.Group>

					<Form.Group
						style={{ marginTop: '12px !important' }}
						className='mb-3'
						controlId='formBasicPassword'
					>
						<Form.Control
							minLength={6}
							required
							type='password'
							placeholder='Enter Password'
							{...register('password', { required: true })}
						/>
						<Form.Control.Feedback type='invalid'>
							Please provide a password a least 6 .
						</Form.Control.Feedback>
					</Form.Group>
					<Button
						style={{
							border: 'none',
							backgroundColor: '#E89242FF',
							width: '100%',
							height: '50px',
							marginTop: '24px',
							fontSize: '24px',
						}}
						variant='primary'
						type='submit'
					>
						Login
					</Button>

					<div>{error}</div>
					<SignUp
						onClick={() => {
							navigate('/register');
						}}
					>
						Sign up
					</SignUp>
				</Form>
			</FormContianer>
		</Container>
	);
};
