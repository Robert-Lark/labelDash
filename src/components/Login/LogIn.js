import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../../auth/axiosWithAuth";


function LoginForm(props) {
	const history = useHistory();
	const { handleSubmit } = useForm();
	
const formSubmit = (data) => {
	axiosWithAuth()
		.post("/login", data)
		.then((res) => {
			localStorage.setItem("token", res.data.token);
			history.push("/protected");
		})
		.catch((err) => {
			console.log(err);
		});
};

	return (
		<Formcontainer>
			
				<form
					onSubmit={handleSubmit(formSubmit)}
					className="form"
					noValidate
					autoComplete="off"
				>
					<input
						className="formInputs"
						type="name"
						placeholder="name"
						name="name"
					/>
                    	<input
						className="formInputs"
						type="email"
						placeholder="email"
						name="email"
					/>
					<input
						className="formInputs"
						type="password"
						placeholder="Password"
						name="password"
					/>
				</form>
				<Button onClick={handleSubmit(formSubmit)}>Login</Button>
			
		</Formcontainer>
	);
}

const Formcontainer = styled.div`

`
const Button = styled.button`

`
export default LoginForm;