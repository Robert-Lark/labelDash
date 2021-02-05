import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

function RegisterForm(props) {
	const history = useHistory();
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => {
		axios
			.post("/register", data)
			.then((res) => {
				res.send("Register post res: ", res);
				history.push("/protected");
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<Formcontainer>
	
				<form
					className="form"
					noValidate
					autoComplete="off"
					onSubmit={handleSubmit(onSubmit)}
				>
					<input
						className="formInputs"
						type="username"
						placeholder="name"
						name="username"
						inputRef={register({ required: true })}
					/>
					<input
						className="formInputs"
						type="password"
						placeholder="Password"
						name="password"
						inputRef={register({ required: true })}
					/>
					<input
						className="formInputs"
						type="department"
						placeholder="secret word"
						name="department"
						inputRef={register({ required: true })}
					/>
				</form>
				<Button className="formInputs" onClick={handleSubmit(onSubmit)}>
					Register
				</Button>
	
		</Formcontainer>
	);
}

const Formcontainer = styled.div`

`
const Button = styled.button`

`

export default RegisterForm;