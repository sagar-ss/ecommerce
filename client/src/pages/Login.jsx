import styled from "styled-components";
import {mobile} from "../responsive";
import { useState } from "react";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: aliceblue;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color:red
`

const Login = () => {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const dispatch = useDispatch()
  const {isFetching, error} = useSelector(state=>state.user)
  const handleSubmit = (e) =>{
    e.preventDefault();
    login(dispatch,{username,password})
    setUsername('')
    setPassword('')
  }
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" type="text" value={username}  onChange={(e)=>setUsername(e.target.value)}/>
          <Input placeholder="password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <Button type="submit" onClick={handleSubmit} disabled={isFetching}>LOGIN</Button>
          {error&& <Error>Something went Wrong....</Error>}
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link to="/register">CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
