import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { createUserRequest } from '../services/user';
import style from 'styled-components';
import { useNavigate } from 'react-router-dom';

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
    border-radius:4px;
    padding: 24px;
    width: 40%;
    background: white;
    opacity: 0.96;
`;

const NewUserContainer = style.div`
    display:flex;
    width: 100%;
    margin-left: 5px;
    margin-bottom: 24px;
    font-size: 34px;
    font-weight: bold;
`;

export const Register = () => {
	const navigate = useNavigate();
	const [validated, setValidated] = useState(false);
	const [error, setError] = useState('');
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const createUser = async (data) => {
		setValidated(true);
		if (Object.keys(errors).length === 0) {
			const result = await createUserRequest(data);
			if (result.status !== 201) setError(result?.error?.message);
			else navigate('/login');
		}
	};
	return (
		<Container>
			<FormContianer>
				<Form
					style={{ width: '100%' }}
					noValidate
					validated={validated}
					onSubmit={handleSubmit(createUser)}
				>
					<NewUserContainer>Create User</NewUserContainer>
					<Form.Group className='mb-3' controlId='formBasicName'>
						<Form.Control required placeholder='Enter Name' {...register('name')} />
						<Form.Control.Feedback type='invalid'>
							Please provide a name.
						</Form.Control.Feedback>
					</Form.Group>
					<Form.Group className='mb-3' controlId='formBasicsurname'>
						<Form.Control
							required
							placeholder='Enter surname'
							{...register('surname')}
						/>
						<Form.Control.Feedback type='invalid'>
							Please provide a surname.
						</Form.Control.Feedback>
					</Form.Group>
					<Form.Group className='mb-3' controlId='formBasicEmail'>
						<Form.Control
							required
							type='email'
							placeholder='Enter email'
							{...register('email')}
						/>
						<Form.Control.Feedback type='invalid'>
							Please provide a valid email.
						</Form.Control.Feedback>
					</Form.Group>

					<Form.Group className='mb-3' controlId='formBasicPassword'>
						<Form.Control
							minLength={6}
							required
							type='password'
							placeholder='Enter Password'
							{...register('password')}
						/>
						<Form.Control.Feedback type='invalid'>
							Please provide a password at least 6 charateres.
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
						Create
					</Button>
				</Form>

				<div>{error}</div>
			</FormContianer>
		</Container>
	);
};
