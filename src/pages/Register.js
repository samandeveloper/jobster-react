//register/login form in this url: https://redux-toolkit-jobster.netlify.app/register
//NOTE: we need useEffect to navigate from the register page to the dashboard page
//NOTE: we need useState to setup the initialState
import { useState, useEffect } from "react";
import { Logo, FormRow } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage"; //import related styled-components css
import { toast } from "react-toastify"; //import the Toastify library
import { useDispatch, useSelector } from "react-redux"; //to bting the initialState from slice
import { loginUser, registerUser } from "../features/user/userSlice"; //bring the functions from useSlice
import { useNavigate } from "react-router-dom"; //Programmatically navigate to dashboard from login/register page

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState); //we use the useState to setup the initialState object
  const { user, isLoading } = useSelector((store) => store.user); //destructure initialState we want - instead of store we can say state
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value }); //name=[value] is the ‘Dynamic Object Keys’
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values; //destructure all of the states from the values
    if (!email || !password || (!isMember && !name)) {
      toast.error("Please fill out all fields"); //color is red
      return;
    }
    //we want to dispatch the registerUser and loginUser based on a condition below:
    if (isMember) {
      dispatch(loginUser({ email: email, password: password })); //pass what we want to loginUser function
      return;
    }
    //if user is not a member, dispatch the registerUser
    dispatch(registerUser({ name, email, password }));
  };

  //toggle between login and register in the form (last section in the form: Not a member yet?)
  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  //Programmatically navigate to dashboard from login/register page
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [user]);

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        {/* J logo */}
        <Logo />
        <h3>Login</h3>
        {/* show the 'name' filed only if the user already registered (user is a member) */}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}
        {/* email field */}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        {/* password field */}
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        {/* buttons */}
        <button type="submit" className="btn btn-block" disabled={isLoading}>
          {/* inside submit button we write loading while loading otherwise we write submit */}
          {isLoading ? "loading..." : "submit"}
        </button>
        {/* Demo user button -instead of using the value, hard code them (email and password) */}
        <button
          type="button"
          className="btn btn-block btn-hipster"
          disabled={isLoading}
          onClick={() => {
            dispatch(
              loginUser({ email: "testUser@test.com", password: "secret" })
            );
          }}
        >
          {/* inside the button we have "loading" inside button while loading and if we are not loading we have "demo app"*/}
          {isLoading ? "loading..." : "demo app"}
        </button>
        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;
