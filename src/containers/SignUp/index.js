import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

import Layout from "../../components/Layout";
import Input from "../../components/UI/Input";

export default function SignUp() {
	const auth = useSelector((state) => state.auth);
	if (auth.authenticate) {
		return <Redirect to={"/"} />;
	}

	return (
		<Layout>
			<Container>
				<Row style={{ marginTop: "50px" }}>
					<Col md={{ span: 6, offset: 3 }}>
						<Form>
							<Input
								label="Full Name"
								type="text"
								placeholder="Enter full name"
								value=""
								onChange={() => {}}
							/>
							<Input
								label="Email Address"
								type="email"
								placeholder="Enter email"
								value=""
								onChange={() => {}}
							/>
							<Input
								label="Password"
								type="password"
								placeholder="Enter password"
								value=""
								onChange={() => {}}
							/>
							<Button variant="primary" type="submit">
								Submit
							</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		</Layout>
	);
}
