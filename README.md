# Jobster

Project in Action - [Jobster](https://redux-toolkit-jobster.netlify.app/)

#### React Course

[My React Course](https://www.udemy.com/course/react-tutorial-and-projects-course/?referralCode=FEE6A921AF07E2563CEF)

#### Support

Find the App Useful? [You can always buy me a coffee](https://www.buymeacoffee.com/johnsmilga)

#### Run The App Locally

```sh
npm run install && npm start
```

- visit url http://localhost:3000/

#### Setup React App

```sh

npx create-react-app myApp

```

```sh

npx create-react-app@latest myApp

```

- set editor/browser side by side
- copy/paste assets and readme from complete project

#### 1) Spring Cleaning

- in src remove
- App.css
- App.test.js
- logo.svg
- reportWebVitals.js
- setupTests.js
- fix App.js and index.js

#### 2) Title and Favicon

- change title in public/index.html
- replace favicon.ico in public
- resource [Generate Favicons](https://favicon.io/)

#### 3) Normalize.css and Global Styles

- CSS in JS (styled-components)
- saves times on the setup
- less lines of css
- speeds up the development
- normalize.css
- small CSS file that provides cross-browser consistency in the default styling of HTML elements.
- [normalize docs](https://necolas.github.io/normalize.css/)

```sh
npm install normalize.css
```

- import 'normalize.css' in index.js
- SET BEFORE 'index.css'
- replace contents of index.css
- if any questions about normalize or specific styles
- Coding Addict - [Default Starter Video](https://youtu.be/UDdyGNlQK5w)
- Repo - [Default Starter Repo](https://github.com/john-smilga/default-starter)

#### 4) Landing Page - Setup

- zoom level 175%
- markdown preview extension
- get something on the screen
- react router and styled components right after
- create pages directory in the source
- for now Landing.js
- create component (snippets extension)
- setup basic return

```js
<h4>Landing Page<h4>
```

- import logo.svg and main.svg
- import Landing in App.js and render

##### 5) Landing Page - Structure

- Landing.js

```js
const Landing = () => {
  return (
    <main>
      <nav>
        <img src={logo} alt="jobster logo" className="logo" />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>some text</p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </main>
  );
};

export default Landing;
```

#### 6) Styled Components - Basic Setup

- CSS in JS
- Styled Components
- have logic and styles in component
- no name collisions
- apply javascript logic
- [Styled Components Docs](https://styled-components.com/)
- [Styled Components Course](https://www.udemy.com/course/styled-components-tutorial-and-project-course/?referralCode=9DABB172FCB2625B663F)

```sh
npm install styled-components
```

```js
//import the element
import styled from "styled-components";
//el is the element we want to have styled on-Note: this is the javascript component
const El = styled.el`
  // styles go here
`;
```

- element can be any html element (div,button,section, etc)

- no name collisions, since unique class
- vscode-styled-components extension
- colors and bugs
- style entire react component

#### 7) Styled Components - Wrap Component

```js
const Wrapper = styled.el``;

const Component = () => {
  return (
    <Wrapper>
      <h1> Component</h1>
    </Wrapper>
  );
};
```

#### 8) Wrappers

- assets/wrappers
- only responsible for styling

#### 9) Logo and Images

- logo built in Figma
- [Cool Images](https://undraw.co/)

#### 11) Logo Component

- create <b>components</b> folder in source
- create Logo.js
- move import and image logic
- export as default
- utilize index.js

Logo.js

```js
import logo from "../assets/images/logo.svg";

const Logo = () => {
  return <img src={logo} alt="jobify" className="logo" />;
};

export default Logo;
```

#### 12) Setup Pages

- create Error, Register, Dashboard pages
- basic return
- create index.js
- import all the pages
- export one by one
- basically the same, as in components
- import App.js

#### 13) React Router 6

- Please Reference React Router 6 Section

- [React Router Docs](https://reactrouter.com/docs/en/v6)

```sh
npm install react-router-dom@6
```

- import three components from router

```js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Error, Landing, Register, Dashboard } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="landing" element={<Landing />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
```

- go to Landing.js

```js
import { Link } from "react-router-dom";

return (
  <Link to="/register" className="btn btn-hero">
    Login / Register
  </Link>
);
```

#### 14) Error Page

```js
import { Link } from "react-router-dom";
import img from "../assets/images/not-found.svg"; //svg image on the error page
import Wrapper from "../assets/wrappers/ErrorPage"; //styled components css

return (
  //full-page is the global (default) css className
  <Wrapper className="full-page">
    <div>
      <img src={img} alt="not found" />
      <h3>text</h3>
      <p>text</p>
      <Link to="/">back home</Link>
    </div>
  </Wrapper>
);
```

#### 15) Auto Imports

- use while developing
- only sparingly while recording
- better picture
- messes with flow
- just my preference
- still use them, just not all the time

#### 16) Register Page - Setup

```js
//NOTE: we need useEffect to navigate from the register page to the dashboard page
//NOTE: we need useState to setup the initialState
import { useState, useEffect } from "react";
import { Logo } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";

// redux toolkit and useNavigate later- we want to receive data (users data) from API and if we successful we can move from login/register page

//below is initialState for the users
const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true, //is the user a member by default is true
};
// if possible prefer local state
// global state

function Register() {
  const [values, setValues] = useState(initialState); //we use the useState to setup the initialState object

  // redux toolkit and useNavigate later

  const handleChange = (e) => {
    //for every time we type sth
    console.log(e.target); //for now
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target); //for now
  };
  return (
    //full-page and form are default css
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>Login</h3> //this line in the future will be Login or Register (will
        change later)
        {/* name field */}
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            {" "}
            //htmlFor for now is name (will change later) name
          </label>

          <input
            type="text"
            value={values.name} //value should be values.name (values in the state name for the initialState)
            name="name"
            onChange={handleChange}
            className="form-input" //styled-components
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </Wrapper>
  );
}
```

#### 17) Switch To React 18

- index.js

```js
import React from "react";
import { createRoot } from "react-dom/client";
import "normalize.css";
import "./index.css";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App tab="home" />);
```

#### 18) FormRow Component

- create FormRow.js in <b>components</b>
- setup import/export
- setup one for email and password
- hint "type,name,value"

```js
const FormRow = ({ type, name, value, handleChange, labelText }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>

      <input
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        className="form-input"
      />
    </div>
  );
};

export default FormRow;
```

#### 19) Toggle Member

```js
const toggleMember = () => {
  //the initialState is an object, so we need to bring all the values then  bring the isMember with toggle condition
  setValues({ ...values, isMember: !values.isMember });
};

return (
  <Wrapper>
    {/* control h3 */}
    <h3>{values.isMember ? "Login" : "Register"}</h3>
    {/* toggle name */}
    // if user is not a member (not registered before) then show the 'name' field
    {!values.isMember && (
      <FormRow
        type="text"
        name="name"
        value={values.name}
        handleChange={handleChange}
      />
    )}
    {/* right after submit btn */}
    {/* toggle button */}
    <p>
      {values.isMember ? "Not a member yet?" : "Already a member?"}

      <button type="button" onClick={toggleMember} className="member-btn">
        {values.isMember ? "Register" : "Login"}
      </button>
    </p>
  </Wrapper>
);
```

#### 20) Handle Change and Empty Values

[Dynamic Object Keys](https://youtu.be/_qxCYtWm0tw)

Register.js

```js
const handleChange = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  console.log(`${name}:${value}`);
  setValues({ ...values, [name]: value });
};

const onSubmit = (e) => {
  e.preventDefault();
  const { name, email, password, isMember } = values; //destructure all of the states from the values
  //in the register form (user is not a member) we want to say if(!email || !password || !name) but
  //in the login form (we don't have name and user is a member) we want to say if(!email || !password)
  //combine the two lines above we can say line below (so we only check the name if the use is NOT a member):
  if (!email || !password || (!isMember && !name)) {
    consol.log("Please Fill Out All Fields");
    return;
  }
};
```

#### 21) React Toastify (library for alerts)

[React Toastify](https://www.npmjs.com/package/react-toastify)

```sh
npm install --save react-toastify
```

App.js (below codes must be some where in the root -here we choose App.js)

```js
//two below lines belongs to Toastify librarry
import { ToastContainer } from 'react-toastify';  //we look for container that is what controls the toast - this is the alerts
import 'react-toastify/dist/ReactToastify.css';  //this is the css of the toastify library


return </Routes>
<ToastContainer />  //belongs to toastify library-render the component AFTER the <Routes>. why? because whatever comes inside the <Routes> become part of the pages (routes) and we don't want that
<BrowserRouter>

```

Register.js

```js
import { toast } from "react-toastify";

if (!email || !password || (!isMember && !name)) {
  toast.error("Please Fill Out All Fields");
  return;
}
```

- modifications

position

<ToastContainer position='top-center' >

index.css

```css
.Toastify__toast {
  text-transform: capitalize;
}
```

#### 22) User Slice - Setup

```sh
npm install @reduxjs/toolkit react-redux
```

NOTE: we create slice and store at the same time in redux-toolkit

- create features/user/userSlice.js

```js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; //createSlice is the default for slice.js and createAsyncThunk is for when we want to bring data from API
import { toast } from "react-toastify"; //in slice we need Toastify library for messages

const initialState = {
  isLoading: false, //default value of isLoading is false
  user: null, //default value of user is null
};

const userSlice = createSlice({
  name: "user",
  initialState,
});

export default userSlice.reducer; //we always export the reducer
```

- create store.js (in the src)

```js
import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./features/user/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
```

- index.js

```js
//after creating slice and store we import store and Provider (to wrap the app inside of it) in the index.js
import { store } from "./store";
import { Provider } from "react-redux";

root.render(
  <Provider store={store}>
    <App tab="home" />
  </Provider>
);
```

#### 23) RegisterUser, LoginUser - Placeholders

- userSlice.js

```js
export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (user, thunkAPI) => {
    console.log(`Register User : ${user}`)
);
export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (user, thunkAPI) => {
    console.log(`Login User : ${user}`)
});
```

- Register.js

```js
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, registerUser } from '../features/user/userSlice';


const Register = () => {
  const dispatch = useDispatch();
  const { isLoading, user } = useSelector((store) => store.user);


const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      toast.error('Please Fill Out All Fields');
      return;
    }
    //if the user is already a member we want to dispatch the loginUser function
    if (isMember) {
      dispatch(loginUser({ email: email, password: password }));
      return;
    }
    //if the user is not a member we dispatch registerUser
    dispatch(registerUser({ name, email, password }));
  };
```

#### 24) HTTP Methods

```sh
npm install axios
```

- GET - get resources from the server
- POST - submit resource to the server
- PUT/PATCH - modify resource on the server
- DELETE - delete resource from the server

```js
// GET
axios.get(url, options); //since the get request in axios is default then we can say axios(url, options);
// POST
axios.post(url, resource, options);
// PATCH
axios.patch(url, resource, options);
// DELETE
axios.delete(url, options);
```

#### 25) API

- Root URL
- https://jobify-prod.herokuapp.com/api/v1/toolkit

- NODE COURSE

###### Register USER

- https://jobify-prod.herokuapp.com/api/v1/toolkit/auth/register

- POST /auth/register
- {name:'john',email:'john@gmail.com',password:'secret'}
- sends back the user object with token

###### Register USER - TESTING()

- POST /auth/testingRegister
- {name:'john',email:'john@gmail.com',password:'secret'}
- server sends back the user object with token

###### Login USER

- POST /auth/login
- {email:'john@gmail.com',password:'secret'}
- server sends back the user object with token

###### Update USER

- PATCH /auth/updateUser
- { email:'john@gmail.com', name:'john', lastName:'smith', location:'my location' }
- sends back the user object with token

#### 26) Custom Axios Instance

-create utils/axios.js

```js
import axios from "axios";

const customFetch = axios.create({
  baseURL: "https://jobify-prod.herokuapp.com/api/v1/toolkit", //root url (server)
});

export default customFetch;
```

userSlice.js

```js
import customFetch from "../../utils/axios";

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    //pass the user to createAsyncThunk
    try {
      const resp = await customFetch.post("/auth/testingRegister", user);
      console.log(resp);
    } catch (error) {
      console.log(error.response);
    }
  }
);
```

#### 27) Register User

userSlice.js

```js
export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.post('/auth/register', user);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
)
   extraReducers: {
    [registerUser.pending]: (state) => {
      state.isLoading = true;
    },
    //action:{type:   , payload: {}  }  //payload can be an object or string
    [registerUser.fulfilled]: (state, { payload }) => {  //payload is on the action object and in the payload we have the user
      const { user } = payload;
      state.isLoading = false;  //done loading
      state.user = user;
      toast.success(`Hello There ${user.name}`);
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    }
  }

```

#### Extra Reducers "Builder Callback" Notation (since extraReducers is deprecated)

```js
extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        addUserToLocalStorage(user);
        toast.success(`Hello There ${user.name}`);
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        addUserToLocalStorage(user);

        toast.success(`Welcome Back ${user.name}`);
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        addUserToLocalStorage(user);

        toast.success(`User Updated!`);
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(clearStore.rejected, () => {
        toast.error('There was an error..');
      });
  },

```

#### 28) Login User

userSlice.js

```js
export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.post('/auth/login', user);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }

   extraReducers: {
    [loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      const { user } = payload;
      state.isLoading = false;
      state.user = user;
      toast.success(`Welcome Back ${user.name}`);
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    }
  }

);
```

#### 29) LocalStorage

- utils/localStorage.js

```js
export const addUserToLocalStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user)); //because we only can store JSON in the localStorage
};

//when user logs out we want to remove the user from localStorage
export const removeUserFromLocalStorage = () => {
  localStorage.removeItem("user");
};
//if the user is in hte localStorage we parse the result and if not we want to return null
export const getUserFromLocalStorage = () => {
  const result = localStorage.getItem("user");
  const user = result ? JSON.parse(result) : null;
  return user;
};
```

//we want to import the getUserFromLocalStorage to the slice.js

- invoke getUserFromLocalStorage when app loads (set it equal to user)

```js
const initialState = {
  isLoading: false,
  user: getUserFromLocalStorage(),  //we need to invoke the getUserFromLocalStorage when the app loads
};


//in extraReducers>fulfilled section>add the addUserToLocalStorage(user)
[registerUser.fulfilled]: (state, { payload }) => {
      const { user } = payload;
      state.isLoading = false;
      state.user = user;
      addUserToLocalStorage(user);
      toast.success(`Hello There ${user.name}`);
    },

[loginUser.fulfilled]: (state, { payload }) => {
      const { user } = payload;
      state.isLoading = false;
      state.user = user;
      addUserToLocalStorage(user);
      toast.success(`Welcome Back ${user.name}`);
    },
```

#### 30) Programmatically Navigate To Dashboard (which is our homepage)

Register.js

```js
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [user, navigate]); //if the user exists then we invoke the useEffect
};
```

#### 31) Setup Dashboard Pages

- remove Dashboard.js
- create Dashboard Folder
- create Stats, Profile, AddJob, AllJobs, SharedLayout,
- create index.js and setup import/export

App.js

```js
import {
  AllJobs,
  Profile,
  SharedLayout,
  Stats,
  AddJob,
} from "./pages/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Stats />} /> //index means first page show in
          the dashboard is the Stats
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="add-job" element={<AddJob />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="register" element={<Register />} />
        <Route path="landing" element={<Landing />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer position="top-center" />
    </BrowserRouter>
  );
}
```

#### 32) Navbar, SmallSidebar, BigSidebar

- create Navbar, SmallSidebar, BigSidebar in components
- import Wrappers from assets/wrappers
- simple return (setup a simple return whatever you want like a function and an export)
- set up import/export in the index.js n the component

```js
SharedLayout.js;

import { Outlet } from "react-router-dom"; //we want to get the {Outlet} from ‘react-router-dom’ because we want to display the pages
import { Navbar, SmallSidebar, BigSidebar } from "../../components";
import Wrapper from "../../assets/wrappers/SharedLayout";

const SharedLayout = () => {
  return (
    <>
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </>
  );
};

export default SharedLayout;
```

#### 33) Shared Layout CSS

- import Wrappers in BigSidebar,SmallSidebar and Navbar

#### 34) React Icons

[React Icons](https://react-icons.github.io/react-icons/)

```sh
npm install react-icons
```

```js
Navbar.js

import Wrapper from '../assets/wrappers/Navbar'
import {FaHome} from 'react-icons/fa'
const Navbar = () => {
  return (
    <Wrapper>
      <h4>navbar</h4>
      <FaHome>
    </Wrapper>
  )
}

export default Navbar

```

#### 35) Navbar Structure

Navbar.js;

```js
import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import Logo from "./Logo"; //J logo
import { useState } from "react"; //in the navbar, if we click on the name of the user we see logout (this is toggle which we should handel it with local state)

import { useDispatch, useSelector } from "react-redux"; //to bring reducers and initialState from userSlice

const Navbar = () => {
  const { user } = useSelector((store) => store.user); //in the navbar, we want to show the user name so we need to bring the name from initialState in userSlice.js
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <div className="nav-center">
        <button //this is the hambergur icon which toggles
          type="button"
          className="toggle-btn"
          onClick={() => console.log("toggle sidebar")}
        >
          <FaAlignLeft /> // hambergur icon
        </button>
        <div>
          <Logo /> // in the small screen we'll display J logo
          <h3 className="logo-text">dashboard</h3> //in the big screen we'll display
          dashboard text
        </div>
        <div className="btn-container">
          <button
            type="button"
            className="btn"
            onClick={() => console.log("toggle logout dropdown")}
          >
            <FaUserCircle /> //human react icon
            {user?.name} //show the name of the user
            <FaCaretDown /> //arrow down react icon
          </button>
          <div className="dropdown show-dropdown">
            <button
              type="button"
              className="dropdown-btn"
              onClick={() => {
                console.log("logout user");
              }}
            >
              logout //clicking on the username we see the logout (toggle)
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
```

#### 36) Toggle Sidebar

userSlice.js

```js
const initialState = {
  isLoading: false,
  isSidebarOpen: false,
  user: getUserFromLocalStorage(),
};

reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },

export const { toggleSidebar } = userSlice.actions;

```

Navbar.js

```js
import { toggleSidebar } from "../features/user/userSlice";

const toggle = () => {
  dispatch(toggleSidebar());
};

<button type="button" className="toggle-btn" onClick={toggle}>
  {" "}
  //or onClick={() => dispatch(toggleSidebar())}
  <FaAlignLeft />
</button>;
```

#### 37) Toggle Dropdown

```js
Navbar.js

const [showLogout, setShowLogout] = useState(false)

<div className='btn-container'>
  <button className='btn' onClick={() => setShowLogout(!showLogout)}>
    <FaUserCircle />
      {user.name}
    <FaCaretDown />
  </button>
  <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
    <button onClick={() => console.log('logout user')} className='dropdown-btn'>
      logout
    </button>
  </div>
</div>

```

#### 38) Logout User

userSlice.js

```js
reducers: {
    logoutUser: (state) => {
      state.user = null;  //user is null
      state.isSidebarOpen = false;  //hamburger icon is not open
      removeUserFromLocalStorage();  //remove the user from local storage
    },
    //we have the blow lines before
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },

export const { logoutUser, toggleSidebar } = userSlice.actions;

```

Navbar.js

```js
import { toggleSidebar, logoutUser } from "../features/user/userSlice";

<div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
  <button
    type="button"
    className="dropdown-btn"
    onClick={() => {
      dispatch(logoutUser());
    }}
  >
    logout
  </button>
</div>;
```

#### 39) Restrict Access

- pages/ProtectedRoute.js

```js
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((store) => store.user);
  if (!user) {
    //if the user doesn't exist we go to the landing
    return <Navigate to="/landing" />;
  }
  return children;
};

export default ProtectedRoute;
```

App.js

```js
<Route
  path="/"
  element={
    <ProtectedRoute>
      <SharedLayout />
    </ProtectedRoute>
  }
>
  ...
</Route>
```

#### 40) Small Sidebar - Setup

```js
SmallSidebar.js;

import Wrapper from "../assets/wrappers/SmallSidebar";
import { FaTimes } from "react-icons/fa"; //close icon
import { NavLink } from "react-router-dom"; //navigate between navbar and sidebars  in react-router-dom
import Logo from "./Logo";
import { useSelector, useDispatch } from "react-redux";

export const SmallSidebar = () => {
  return (
    <Wrapper>
      <div className="sidebar-container show-sidebar">
        <div className="content">
          <button className="close-btn" onClick={() => console.log("toggle")}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <div className="nav-links">nav links</div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
```

#### 41) Small Sidebar - Toggle

SmallSidebar.js;

```js
import { toggleSidebar } from '../features/user/userSlice';


const { isSidebarOpen } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(toggleSidebar());
  };

return (
  <div className={isSidebarOpen ? 'sidebar-container show-sidebar' : 'sidebar-container'}>
    <div className='content'>
        <button type='button' className='close-btn' onClick={toggle}>
          <FaTimes />
        </button>

);
```

#### 42) Setup Links (for navbar-left side of dashboard page)

- create utils/links.js

```js
//the 4 below imports are icons for navbar
import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";

const links = [
  {
    id: 1,
    text: "stats",
    path: "/",
    icon: <IoBarChartSharp />,
  },
  {
    id: 2,
    text: "all jobs",
    path: "all-jobs",
    icon: <MdQueryStats />,
  },
  {
    id: 3,
    text: "add job",
    path: "add-job",
    icon: <FaWpforms />,
  },
  {
    id: 4,
    text: "profile",
    path: "profile",
    icon: <ImProfile />,
  },
];

export default links;
```

#### 43) Small Sidebar - Nav Links

SmallSidebar.js

```js
import { NavLink } from "react-router-dom";

return (
  <div className="nav-links">
    {links.map((link) => {
      const { text, path, id, icon } = link;

      return (
        <NavLink
          to={path}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          key={id} //since we iterate
          onClick={toggle} //in small screen when user choose between the small screen navlinks we need to navigate to the new link + close the small navbar, that's why we need a toggle
        >
          <span className="icon">{icon}</span>
          {text}
        </NavLink>
      );
    })}
  </div>
);
```

#### REACT ROUTER UPDATE !!!

- [Stack Overflow](https://stackoverflow.com/questions/70644361/react-router-dom-v6-shows-active-for-index-as-well-as-other-subroutes)

```js
<NavLink
to={path}
key={id}
onClick={toggleSidebar}
className={({ isActive }) =>
isActive ? 'nav-link active' : 'nav-link'}


end
>
```

#### 44) Nav Links Component

- create components/NavLinks.js
- styles still set from Wrapper
- also can setup in links.js, preference

```js
import { NavLink } from "react-router-dom";
import links from "../utils/links";

const NavLinks = ({ toggleSidebar }) => {
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path, id, icon } = link;

        return (
          <NavLink
            to={path}
            key={id}
            onClick={toggleSidebar}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
```

```js
SmallSidebar.js;

import NavLinks from "./NavLinks";

return <NavLinks toggleSidebar={toggle} />;
```

#### 45) Big Sidebar

```js
import NavLinks from "./NavLinks";
import Logo from "../components/Logo";
import Wrapper from "../assets/wrappers/BigSidebar";
import { useSelector } from "react-redux";

const BigSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user);
  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen
            ? "sidebar-container "
            : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
```

#### 46) Profile Page - Structure

Profile.js

```js
import { useState } from 'react';
import { FormRow } from '../../components';  //for receiving inputs
import Wrapper from '../../assets/wrappers/DashboardFormPage';  //for css-this css file is related to both 'Profile' and 'Add job' pages
import { useDispatch, useSelector } from 'react-redux';  //we want to bring user from initialState and also we need to write a new reducer for updating API for user info (using HTTP request)
import { toast } from 'react-toastify';  //showing alerts, success, waning,..


const Profile = () => {
  const { isLoading, user } = useSelector((store) => store.user);  //we want isLoading so when on profile page user 'save changes' the page we want to disable the submit button
  const dispatch = useDispatch();

//define a new local state- we take them from our user object in initialState- we add condition because initially user is null
const [userData,setUserData] = useState({
  name:user?.name ||''
  email:user?.email ||''
  lastName:user?.lastName ||''
  location:user?.location ||''
})
  //when we click on the 'save changes' button we update the user info on the server (on API), now the server will respond with new updated user object, then this new user will be updated in the userSlice>user and every where the new value will display. e.g. in profile page> change name: john to name: peter, now on the top right button the user should be change to peter
  const handleSubmit = (e) => {
    e.preventDefault();
        const { name, email, lastName, location } = userData;  //userData is the local state in this file

    if (!name || !email || !lastName || !location) {
      toast.error('Please Fill Out All Fields');
      return;
    }
  };

const handleChange = (e) =>{
  const name = e.target.name
  const value = e.target.value
  setUserData({...userData,[name]:value})
}
  return (
    <Wrapper>
      <form className='form' onSubmit={handleSubmit}>
        <h3>profile</h3>

        <div className='form-center'>
          <FormRow
            type='text'
            name='name'
            value={userData.name}
            handleChange={handleChange}
          />
          <FormRow
            type='text'
            labelText='last name'
            name='lastName'
            value={userData.lastName}
            handleChange={handleChange}
          />
          <FormRow
            type='email'
            name='email'
            value={userData.email}
            handleChange={handleChange}
          />
          <FormRow
            type='text'
            name='location'
            value={userData.location}
            handleChange={handleChange}
          />
          <button className='btn btn-block' type='submit' disabled={isLoading}>  //if the page isLoading then disable the 'save change' button
            {isLoading ? 'Please Wait...' : 'save changes'}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Profile;


```

#### 47) Update User - Complete

###### Update USER

- method:PATCH, url:main root/auth/updateUser
- server expects this object: { email:'john@gmail.com', name:'john', lastName:'smith', location:'my location' }
- authorization header : 'Bearer token' (each person can see and update and delete their own pages in the dashboard)
- sends back the user object with token

userSlice.js

```js
export const updateUser = createAsyncThunk(
  //name of the action is user/updateUser
  'user/updateUser',
  async (user, thunkAPI) => {  //user we have in the profile page
  console.log(thunkAPI)
    try {
      //NOTE: in axios in the patch method we can pass the third option (header here)
      const resp = await customFetch.patch('/auth/updateUser', user, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`, //getState() gets the entire application state, then user which is the name of our slice, then again user which is the property we have in the state, and finally token in the user object
        },
      });
      return resp.data;
    } catch (error) {
      // console.log(error.response);
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);
// extra reducers
    [updateUser.pending]: (state) => {
      state.isLoading = true;
    },
    [updateUser.fulfilled]: (state, { payload }) => {
      const { user } = payload;
      state.isLoading = false;
      state.user = user;  //we should update the new user

      addUserToLocalStorage(user);  //add the updated user info in the local storage
      toast.success('User Updated');
    },
    [updateUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
```

Profile.js

```js
import { updateUser } from "../../features/user/userSlice"; //updateUser is a reducer is the userSlice.js

const handleSubmit = (e) => {
  e.preventDefault();
  const { name, email, lastName, location } = userData;

  if (!name || !email || !lastName || !location) {
    toast.error("Please Fill Out All Fields");
    return;
  }
  //if all the users info are provided
  dispatch(updateUser({ name, email, lastName, location }));
};
```

#### 48) Unauthorized - Logout User

userSlice.js

```js
export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.patch('/auth/updateUser', user, {
        headers: {
          // authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
          authorization: `Bearer `,
        },
      });

      return resp.data;
    } catch (error) {
      // console.log(error.response);
      if (error.response.status === 401) {
        thunkAPI.dispatch(logoutUser());
        return thunkAPI.rejectWithValue('Unauthorized! Logging Out...');
      }
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

// logoutUser
logoutUser: (state) => {
      state.user = null;
      state.isSidebarOpen = false;
      toast.success('Logout Successful!');
      removeUserFromLocalStorage();
    },
```

#### 49) Refactor Async Functionality

- features/user/userThunk.js

```js
import customFetch from "../../utils/axios";

import { logoutUser } from "./userSlice";

export const registerUserThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, user);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const loginUserThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, user);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const updateUserThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.patch(url, user, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });
    return resp.data;
  } catch (error) {
    // console.log(error.response);
    if (error.response.status === 401) {
      thunkAPI.dispatch(logoutUser());
      return thunkAPI.rejectWithValue("Unauthorized! Logging Out...");
    }
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
```

userSlice.js

```js
import {
  loginUserThunk,
  registerUserThunk,
  updateUserThunk,
} from "./userThunk";

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    return registerUserThunk("/auth/register", user, thunkAPI);
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    return loginUserThunk("/auth/login", user, thunkAPI);
  }
);
export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (user, thunkAPI) => {
    return updateUserThunk("/auth/updateUser", user, thunkAPI);
  }
);
```

#### 50) Job Slice

- features/job/jobSlice.js

```js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../../utils/axios";
import { getUserFromLocalStorage } from "../../utils/localStorage"; //because we want the job location equaLs to the user location in profile page

const initialState = {
  isLoading: false,
  position: "",
  company: "",
  jobLocation: "",
  jobTypeOptions: ["full-time", "part-time", "remote", "internship"], //selective inputs- they should be exact since these values in the server are exactly these ones
  jobType: "full-time", //default is full time
  statusOptions: ["interview", "declined", "pending"], //selective inputs- they should be exact since these values in the server are exactly these ones
  status: "pending", //default is pending
  isEditing: false, //because finally we have the option to edit the created job
  editJobId: "", //because finally we have the option to edit the created job
};

const jobSlice = createSlice({
  name: "job",
  initialState,
});

export default jobSlice.reducer;
```

store.js

```js
import jobSlice from "./features/job/jobSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    job: jobSlice,
  },
});
```

#### 51) Add Job - Structure

AddJob.js

```js
import { FormRow } from "../../components";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

const AddJob = () => {
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!position || !company || !jobLocation) {
      //we check these 3 values only since 'status', 'job location' and 'job Type' are filled automatically by default
      toast.error("Please Fill Out All Fields");
      return;
    }
  };
  const handleJobInput = (e) => {
    //same as handleChange function
    const name = e.target.name;
    const value = e.target.value;
  };

  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? "edit job" : "add job"}</h3>

        <div className="form-center">
          {/* position */}
          <FormRow
            type="text"
            name="position"
            value={position}
            handleChange={handleJobInput}
          />
          {/* company */}
          <FormRow
            type="text"
            name="company"
            value={company}
            handleChange={handleJobInput}
          />
          {/* location */}
          <FormRow
            type="text"
            labelText="job location"
            name="jobLocation"
            value={jobLocation}
            handleChange={handleJobInput}
          />
          {/* job status */} //for job status we'll create new component
          {/* job type */} //for job type we'll create new component
          {/* btn container */}
          <div className="btn-container">
            // clear button
            <button
              type="button"
              className="btn btn-block clear-btn"
              onClick={() => console.log("clear values")}
            >
              clear
            </button>
            //submit button
            <button
              type="submit"
              className="btn btn-block submit-btn"
              onClick={handleSubmit}
              disabled={isLoading} //while we are loading we want to disable the submit button
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJob;
```

#### 52) FormRowSelect

```js
// job status

return (
  <div className="form-row">
    <label htmlFor="status" className="form-label">
      status
    </label>
    <select
      name="status"
      value={status} //this is the default value
      onChange={handleJobInput}
      className="form-select"
    >
      {statusOptions.map((itemValue, index) => {
        //iterate over the selected input options (status and job type)
        return (
          <option key={index} value={itemValue}>
            {itemValue}
          </option>
        );
      })}
    </select>
  </div>
);
```

- create FormRowSelect.js (similar to FormRow.js file)

```js
const FormRowSelect = ({ labelText, name, value, handleChange, list }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <select
        name={name}
        value={value}
        id={name}
        onChange={handleChange}
        className="form-select"
      >
        {list.map((itemValue, index) => {
          return (
            <option key={index} value={itemValue}>
              {itemValue}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormRowSelect;
```

AddJob.js

```js

  /* job status */
<FormRowSelect
  name='status'
  value={status}
  handleChange={handleJobInput}
  list={statusOptions}
/>

<FormRowSelect
  name='jobType'
  labelText='job type'
  value={jobType}
  handleChange={handleJobInput}
  list={jobTypeOptions}
/>
```

#### 53) User Slice - HandleChange Reducer

jobSlice.js

```js
    // reducers
    handleChange: (state, { payload: { name, value } }) => {  //we pass name and value to our payload
      state[name] = value;
    },

export const { handleChange } = jobSlice.actions;
```

AddJob.js

```js
import { handleChange } from "../../features/job/jobSlice";

const handleJobInput = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  dispatch(handleChange({ name, value })); //pass the name and value here
};
```

#### 54) Job Slice - ClearValues Reducer

```js

    // reducers
    clearValues: () => {
      return {
        ...initialState   //or return initialState which is not a good way
      };

    },

export const { handleChange, clearValues } = jobSlice.actions;


```

AddJob.js

```js
import { clearValues, handleChange } from "../../features/job/jobSlice";

return (
  <button
    type="button"
    className="btn btn-block clear-btn"
    onClick={() => dispatch(clearValues())}
  >
    clear
  </button>
);
```

#### 55) Create Job Request

- POST /jobs
- { position:'position', company:'company', jobLocation:'location', jobType:'full-time', status:'pending' }
- authorization header : 'Bearer token' //only the logged in users can add job to the Add job page
- sends back the job object

```js
export const createJob = createAsyncThunk(
  'job/createJob',
  async (job, thunkAPI) => {
    try {
      const resp = await customFetch.post('/jobs', job, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,  //using the getState method on the thunkAPI gives us all the states (initailState) in all the slice we have. e.g. we have access to the user state which belongs to the userSlice.js (but we write it in the jobSlice.js)
        },
      });
      thunkAPI.dispatch(clearValues());  //after submitting job we want to clear the 'Add job' form and goes to default values
      return resp.data;
    } catch (error) {
      // way1: basic setup: show the eroor
      return thunkAPI.rejectWithValue(error.response.data.msg);
      //way2: logout user: automatically logout user with 401 error (this is the way we choose in the updateUser in profile page)
      if (error.response.status === 401) {
      thunkAPI.dispatch(logoutUser());
      return thunkAPI.rejectWithValue('Unauthorized! Logging Out...');
    }
    return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

// extra reducers

extraReducers: {
    [createJob.pending]: (state) => {
      state.isLoading = true;
    },
    [createJob.fulfilled]: (state, action) => {
      state.isLoading = false;
      toast.success('Job Created');
    },
    [createJob.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
}
```

AddJob.js

```js
import {
  clearValues,
  handleChange,
  createJob,
} from "../../features/job/jobSlice";

const handleSubmit = (e) => {
  e.preventDefault();

  if (!position || !company || !jobLocation) {
    toast.error("Please Fill Out All Fields");
    return;
  }

  dispatch(createJob({ position, company, jobLocation, jobType, status }));
};
```

#### 56) Use Existing User Location

AddJob.js

```js
const { user } = useSelector((store) => store.user); //bring the user from initialState in userSlice.js

useEffect(() => {
  // eventually will check for isEditing
  if (!isEditing) {
    dispatch(handleChange({ name: "jobLocation", value: user.location })); //change the state where the property is jobLocation and set the value to user.location
  }
}, []); //every time we open the Add job page we invoke it-but we should do this while we are not editing the hob in 'Add job' page
```

jobSlice.js

```js

    // reducers
    clearValues: () => {
      return {
        ...initialState,
        jobLocation: getUserFromLocalStorage()?.location || '',
      };
    },
```

#### 57) Logout Message

userSlice.js

```js
logoutUser: (state,{payload}) => {
      state.user = null;
      state.isSidebarOpen = false;
      removeUserFromLocalStorage();
      if(payload){
        toast.success(payload)
      }
    },

```

Navbar.js

```js
<button
  type="button"
  className="dropdown-btn"
  onClick={() => dispatch(logoutUser("Logging out..."))}
>
  logout
</button>
```

#### 58) AllJobs Slice

- create features/allJobs/allJobsSlice.js

```js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../../utils/axios";

const initialFiltersState = {
  search: "",
  searchStatus: "all",
  searchType: "all",
  sort: "latest",
  sortOptions: ["latest", "oldest", "a-z", "z-a"],
};

const initialState = {
  isLoading: false,
  jobs: [],
  totalJobs: 0,
  numOfPages: 1,
  page: 1,
  stats: {},
  monthlyApplications: [],
  ...initialFiltersState,
};

const allJobsSlice = createSlice({
  name: "allJobs",
  initialState,
});

export default allJobsSlice.reducer;
```

store.js

```js
import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./features/user/userSlice";
import jobSlice from "./features/job/jobSlice";
import allJobsSlice from "./features/allJobs/allJobsSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    job: jobSlice,
    allJobs: allJobsSlice,
  },
});
```

#### 59) AllJobs Page Structure

- create
- components/SearchContainer.js
- components/JobsContainer.js
- components/Job.js
- import/export

AllJobs.js

```js
import { JobsContainer, SearchContainer } from "../../components";

const AllJobs = () => {
  return (
    <>
      <SearchContainer />
      <JobsContainer />
    </>
  );
};

export default AllJobs;
```

#### 60) JobsContainer.js

```js
import { useEffect } from "react"; //we need useEffect since we need it when we want to fetch the jobs from API and we invoke it in the useEffect
import Job from "./Job"; //we need to iterate over the list of jobs
import Wrapper from "../assets/wrappers/JobsContainer";
import { useSelector, useDispatch } from "react-redux";

const JobsContainer = () => {
  const { jobs, isLoading } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();

  if (isLoading) {
    return (
      <Wrapper>
        <h2>Loading...</h2>
      </Wrapper>
    );
  }
  //if by default we don't have any jobs in the jobsContainer or when user search for a job that doesn't exist in the database
  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>jobs info</h5>
      <div className="jobs">
        {jobs.map((job) => {
          //iterate over the jobs and for every item I will go with 'Job' component
          return <Job key={job._id} {...job} />; //the database that we are using on the API, it sets up _is automatically and the property name is sets for _is
          //{...job} is related to the company, when the job created, status,....
        })}
      </div>
    </Wrapper>
  );
};

export default JobsContainer;
```

[CSS Only Loading Spinner](https://youtu.be/DqqZEpctZ8w)

Loading.js

```js
const Loading = ({ center }) => {
  //we want to add the loading component in the center (spinner in the center)
  return <div className={center ? "loading loading-center" : "loading"}></div>; //loading and loading-center belongs to the global css
};

export default Loading;
```

JobsContainer.js

```js
import Loading from "./Loading";

if (isLoading) {
  return <Loading center />;
}
```

#### 61) GetAllJobs Request

- GET /jobs (url:rooturl/jobs)- the url of the get all jobs and create jobs are the same and the difference is just a method- with POST request we are adding resource on to the server but with GET we are getting all the jobs from server
- authorization header : 'Bearer token' (we only want the user who created the jobs have access to it)
- returns {jobs:[],totalJobs:number, numOfPages:number } //we'll return jobs and totalJobs and numOfPages- by default we have 10 jobs per page, and by default we show first page and we want to see how many jobs in total we have

allJobsSlice.js

```js
export const getAllJobs = createAsyncThunk(
  'allJobs/getJobs',
  async (_, thunkAPI) => {  //since it's a GET request we don't need to pass any first argument in the async but we can add any name if we want to
    let url = `/jobs`;  //we add this line since eventually we have search functionality

    try {
      const resp = await customFetch.get(url, {  //instead of '/jobs' we add url here since in the future we want to search between the jobs
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      });

      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

// extra reducers

extraReducers: {
    [getAllJobs.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllJobs.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.jobs = payload.jobs;  //jobs are in the payload.jobs- so we update the state of the jobs to the payload.jobs
    },
    [getAllJobs.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
}

```

JobsContainer.js

```js
import { getAllJobs } from "../features/allJobs/allJobsSlice";

useEffect(() => {
  dispatch(getAllJobs());
}, []); //every time user type sth in the search filter or choose different option or filter the getAllJobs will invoke again
```

#### 62) Single Job

Job.js

```js
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom"; //import Link since the ‘Edit’ button of each job, in the ‘All jobs’ page, will direct to the ‘Add job’ page, to edit the job, that’s why we need Link
import Wrapper from "../assets/wrappers/Job";
import { useDispatch } from "react-redux";

const Job = ({
  //bring all the props we passed in jobContainer.js
  _id,
  position,
  company,
  jobLocation,
  jobType,
  createdAt,
  status,
}) => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <header>
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <h4>more content</h4>
          <div className={`status ${status}`}>{status}</div>
        </div>
        <footer>
          <div className="actions">
            <Link
              to="/add-job"
              className="btn edit-btn"
              onClick={() => {
                console.log("edit job");
              }}
            >
              Edit
            </Link>
            <button
              type="button"
              className="btn delete-btn"
              onClick={() => {
                console.log("delete  job");
              }}
            >
              Delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Job;
```

#### 63) JobInfo

- components/JobInfo.js (in each job cart this file includes job location, date and job type)

```js
import Wrapper from "../assets/wrappers/JobInfo";

const JobInfo = ({ icon, text }) => {
  //add two props to it, icon and text
  return (
    <Wrapper>
      <span className="icon">{icon}</span>
      <span className="text">{text}</span>
    </Wrapper>
  );
};

export default JobInfo;
```

Job.js

```js

const date = createdAt  //the createdAt is what we receive from the server and we don't do anything about it


<div className='content-center'>
// add icon and text props to each JobInfo component
  <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
  <JobInfo icon={<FaCalendarAlt />} text={date} />
  <JobInfo icon={<FaBriefcase />} text={jobType} />
  <div className={`status ${status}`}>{status}</div>
</div>
```

#### 64) Moment.js

[moment.js](https://momentjs.com/)

```sh
npm install moment
```

Job.js

```js
const date = moment(createdAt).format("MMM Do, YYYY");
```

#### 65) Toggle Loading in AllJobs

allJobsSlice.js

```js
reducers: {
    showLoading: (state) => {
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    },
}
export const {
  showLoading,
  hideLoading,
} = allJobsSlice.actions;

```

#### 66) Delete Job Request

- DELETE /jobs/jobId (url for deleting job: rooturl/jobs/jobId) and the method is delete- jobId here is the \_id that mongodb gives us
- authorization header : 'Bearer token' (we need to authenticate the person so the person who created that job can only delete it)

jobSlice.js

```js
import { showLoading, hideLoading, getAllJobs } from "../allJobs/allJobsSlice";

export const deleteJob = createAsyncThunk(
  "job/deleteJob", //just a name
  async (jobId, thunkAPI) => {
    thunkAPI.dispatch(showLoading()); //we are talking about the isLoading in the features>all jobs>allJobSlice.js
    try {
      const resp = await customFetch.delete(`/jobs/${jobId}`, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      });
      thunkAPI.dispatch(getAllJobs()); //if we are successful deleting a job, then we keep the isLoading:true-Since when we delete a job, we need to fetch a new set of jobs and in that new request we don’t have the job that was just deleted so we need to import getAllJobs for this purpose.
      return resp.data;
    } catch (error) {
      thunkAPI.dispatch(hideLoading()); //if we are not successful in deleting a job (some error) then want to hide the isLoading  otherwise we have the infinite spinner
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);
```

Job.js

```js
<button
  type="button"
  className="btn delete-btn"
  onClick={() => {
    dispatch(deleteJob(_id)); //dispatch the delete function according to the _id that mongodb gives us
  }}
>
  Delete
</button>
```

#### 67) SetEditJob Reducer

jobSlice.js

```js
reducers:{

  setEditJob: (state, { payload }) => {
    return { ...state, isEditing: true, ...payload };  //...state means spread out the existing state value. isEditing is the initialState which we change it to true and ...payload means pass the rest of the properties. what is ...payload? setEditJob({editJobId: _id, position,company,jobLocation,jobType,status,})},
  }

  export const { handleChange, clearValues, setEditJob } = jobSlice.actions;

```

Job.js

```js
import { setEditJob, deleteJob } from "../features/job/jobSlice";

<Link
  to="/add-job"
  className="btn edit-btn"
  //pass the values to the edit job page
  onClick={() => {
    dispatch(
      setEditJob({
        editJobId: _id,
        position,
        company,
        jobLocation,
        jobType,
        status,
      })
    );
  }}
>
  Edit
</Link>;
```

AddJob.js

```js
useEffect(() => {
  //if we din't have below condition the location will be the same
  if (!isEditing) {
    dispatch(handleChange({ name: "jobLocation", value: user.location }));
  }
}, []);
```

#### 68) EditJob Request

- PATCH /jobs/jobId (url: rooturl/jobs/jobId) and the method is PATCH (since we want to update the existing resource on the server). the url is the same as delete but the method is different
- server is looking for: { position:'position', company:'company', jobLocation:'location', jobType:'full-time', status:'pending' }
  Note that even we want to change one of the properties of the above object we must pass all of the properties otherwise server pass the error to us
- authorization header : 'Bearer token' (since the user who make the job can edit it)
- sends back the updated job object

jobSlice.js

```js
export const editJob = createAsyncThunk(
  'job/editJob',   //name
  async ({ jobId, job }, thunkAPI) => {  //we should pass jobId which is equal to _id that mongodb (server side) give to us-- job is our payload which is an object itself that we need to send to the server
    try {
      const resp = await customFetch.patch(`/jobs/${jobId}`, job, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      });
      thunkAPI.dispatch(clearValues());  //if we are successful then we clear all the fields in the 'Edit Job'
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);


extraReducers:{
  [editJob.pending]: (state) => {
      state.isLoading = true;
    },
    [editJob.fulfilled]: (state) => {
      state.isLoading = false;
      toast.success('Job Modified...');
    },
    [editJob.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
}
```

AddJob.js

```js
import {
  clearValues,
  handleChange,
  createJob,
  editJob,
} from "../../features/job/jobSlice";

if (isEditing) {
  dispatch(
    editJob({
      jobId: editJobId,
      job: {
        //pass all the properties to the job object and we send the job object to the server
        position,
        company,
        jobLocation,
        jobType,
        status,
      },
    })
  );
  return;
}
```

#### 69) Job Thunk (code refactoring)

- features/job/jobThunk.js

```js
import customFetch from "../../utils/axios";
import { showLoading, hideLoading, getAllJobs } from "../allJobs/allJobsSlice";
import { clearValues } from "./jobSlice";

export const createJobThunk = async (job, thunkAPI) => {
  try {
    const resp = await customFetch.post("/jobs", job, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });
    thunkAPI.dispatch(clearValues());
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const deleteJobThunk = async (jobId, thunkAPI) => {
  thunkAPI.dispatch(showLoading());
  try {
    const resp = await customFetch.delete(`/jobs/${jobId}`, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });
    thunkAPI.dispatch(getAllJobs());
    return resp.data;
  } catch (error) {
    thunkAPI.dispatch(hideLoading());
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const editJobThunk = async ({ jobId, job }, thunkAPI) => {
  try {
    const resp = await customFetch.patch(`/jobs/${jobId}`, job, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });
    thunkAPI.dispatch(clearValues());
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
```

jobSlice.js

```js
import { createJobThunk, deleteJobThunk, editJobThunk } from "./jobThunk";

export const createJob = createAsyncThunk("job/createJob", createJobThunk);

export const deleteJob = createAsyncThunk("job/deleteJob", deleteJobThunk);

export const editJob = createAsyncThunk("job/editJob", editJobThunk);
```

//70,71,72 are 3 different ways to separate the 'headers'

#### 70) way1: AuthHeader - File Approach (code refactoring)

jobThunk.js

```js
const authHeader = (thunkAPI) => {
  return {
    headers: {
      authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
    },
  };
};

export const createJobThunk = async (job, thunkAPI) => {
  try {
    const resp = await customFetch.post("/jobs", job, authHeader(thunkAPI));
    thunkAPI.dispatch(clearValues());
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
```

#### 71) way2: AuthHeader - Utils Approach (code refactoring)

- create utils/authHeader.js

```js
const authHeader = (thunkAPI) => {
  return {
    headers: {
      authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
    },
  };
};

export default authHeader;
```

jobThunk.js

```js
import authHeader from "../../utils/authHeader";
```

#### 72) way3: AuthHeader - Axios Interceptors Approach (code refactoring)

- utils/axios.js

```js
import axios from "axios";
import { getUserFromLocalStorage } from "./localStorage";

const customFetch = axios.create({
  baseURL: "https://jobify-prod.herokuapp.com/api/v1/toolkit",
});

customFetch.interceptors.request.use(
  (config) => {
    const user = getUserFromLocalStorage();
    if (user) {
      config.headers["Authorization"] = `Bearer ${user.token}`;
      // in the latest version "common" returns undefined
      // config.headers.common['Authorization'] = `Bearer ${user.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default customFetch;
```

- remove auth header

#### 73) Test User

- email : testUser@test.com
- password : secret
- read only!
- dummy data

Register.js

```js
<button
  type="button"
  className="btn btn-block btn-hipster"
  disabled={isLoading}
  onClick={() => {
    dispatch(loginUser({ email: "testUser@test.com", password: "secret" }));
  }}
>
  {isLoading ? "loading..." : "demo"}
</button>
```

#### 74) Get Stats Request

- GET /jobs/stats (url(endpoint):rooturl/jobs/stats) and the method is GET
- authorization header : 'Bearer token'
- returns
  {
  defaultStats:{pending:24,interview:27,declined:24}, //we are getting this info back from the server
  monthlyApplications:[{date:"Nov 2021",count:5},{date:"Dec 2021",count:4} ] //we are getting this info back from the server
  }
- last six months (monthlyApplications)

  allJobsSlice.js

```js
export const showStats = createAsyncThunk(
  'allJobs/showStats',
  async (_, thunkAPI) => {
    try {
      const resp = await customFetch.get('/jobs/stats');
      console.log(resp.data));
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

// extraReducers

    [showStats.pending]: (state) => {
      state.isLoading = true;
    },
    [showStats.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.stats = payload.defaultStats;   //in the payload we have defaultStats and monthlyApplications properties
      state.monthlyApplications = payload.monthlyApplications;
    },
    [showStats.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },

```

#### 75) Stats Page

- create
- create components/StatsContainer.js
- create components/ChartsContainer.js
- import/export in components>index.js

Stats.js

```js
import { useEffect } from "react";
import { StatsContainer, Loading, ChartsContainer } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { showStats } from "../../features/allJobs/allJobsSlice";
const Stats = () => {
  const { isLoading, monthlyApplications } = useSelector(
    (store) => store.allJobs
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showStats());
    // eslint-disable-next-line
  }, []);
  if (isLoading) {
    return <Loading center />;
  }
  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  );
};

export default Stats;
```

#### 76) Stats Container

- create components/StatItem.js

StatsContainer.js

```js
import StatItem from "./StatItem";
import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from "react-icons/fa";
import Wrapper from "../assets/wrappers/StatsContainer";
import { useSelector } from "react-redux";
const StatsContainer = () => {
  const { stats } = useSelector((store) => store.allJobs);
  const defaultStats = [
    {
      title: "pending applications",
      count: stats.pending || 0, //just in case there is no stats.pending we add OR operator with 0
      icon: <FaSuitcaseRolling />,
      color: "#e9b949", //since the colors are different
      bcg: "#fcefc7", //yellow
    },
    {
      title: "interviews scheduled",
      count: stats.interview || 0, //just in case there is no stats.pending we add OR operator with 0
      icon: <FaCalendarCheck />,
      color: "#647acb", //yellow-since the colors are different
      bcg: "#e0e8f9",
    },
    {
      title: "jobs declined",
      count: stats.declined || 0, //just in case there is no stats.pending we add OR operator with 0
      icon: <FaBug />,
      color: "#d66a6a", //since the colors are different
      bcg: "#ffeeee",
    },
  ];

  return (
    <Wrapper>
      {defaultStats.map((item, index) => {
        return <StatItem key={index} {...item} />; //{...item} means title, count, icon, color, bcg properties
      })}
    </Wrapper>
  );
};

export default StatsContainer;
```

#### 77) Stat Item

StatItem.js

```js
import Wrapper from "../assets/wrappers/StatItem";

const StatItem = ({ count, title, icon, color, bcg }) => {
  //pull out all the properties in the components>StatsContainer.js
  return (
    <Wrapper color={color} bcg={bcg}>
      {" "}
      //we should pass the color and bcg to the Wrapper
      <header>
        <span className="count">{count}</span>
        <span className="icon">{icon}</span>
      </header>
      <h5 className="title">{title}</h5>
    </Wrapper>
  );
};

export default StatItem;
```

#### 78) Charts Container

- create
- components/AreaChart.js
- components/BarChart.js
- we don’t need to import/export them in index.js since we use them only inside the components file

ChartsContainer.js

```js
import React, { useState } from "react"; //we need useState since we use local state value in this file

import BarChart from "./BarChart";
import AreaChart from "./AreaChart";
import Wrapper from "../assets/wrappers/ChartsContainer";
import { useSelector } from "react-redux"; //because we want to grab monthlyApplications from the initialState in allJobsSlice.js
const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(true); //we want the local state to change the Area chart and Bar chart to each other- by default we display Bar chart
  const { monthlyApplications: data } = useSelector((store) => store.allJobs); //beacause we want to know how many applications we sent out in the last 6 month
  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button type="button" onClick={() => setBarChart(!barChart)}>
        {" "}
        //once we click on the button we toggle the state value between Area and
        Bar chart
        {barChart ? "Area Chart" : "Bar Chart"}
      </button>
      {barChart ? <BarChart data={data} /> : <AreaChart data={data} />} //if
      barChart is true (by default it's true and we show the bar chart and if
      it's false we show the Areachart)
    </Wrapper>
  );
};

export default ChartsContainer;
```

#### 79) Recharts Library

[Recharts](https://recharts.org)

```sh
npm install recharts
```

- For now does not work with React 18 (https://recharts.org is supported React 18 now)

```sh
npm install react@17 react-dom@17
```

```sh
npm install recharts
```

```sh
npm install react@18 react-dom@18
```

//if we still have issue with https://recharts.org and React 18 then use: npm install recharts --force

#### 80) AreaChart

AreaChart.js

```js
//below imports comes from  https://recharts.org>examples (on the navbar)>SimpleAreaChart (from left dashboard)
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const AreaChartComponent = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data} margin={{ top: 50 }}>
        <CartesianGrid strokeDasharray="3 3" />  //cartesianGrid is the dotted lines in the chart
        <XAxis dataKey="date" />  //dataKey="date" since in monthlyApplications array we have {date:...,count:...} so the X axis which shows the date
        <YAxis allowDecimals={false} />  //we don't want the decimals in our chart
        <Tooltip />
        <Area type="monotone" dataKey="count" stroke="#1e3a8a" fill="#3b82f6" />  //in the Y axis we shows count from the monthlyApplications array we have {date:...,count:...} - also 'stroke' is the line of the bar chart which is blue and 'fill' is the color we fill the chart
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartComponent;
```

#### 81) BarChart.js

```js
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const BarChartComponent = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 50 }}>
        <CartesianGrid strokeDasharray="3 3 " />
        <XAxis dataKey="date" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Bar dataKey="count" fill="#3b82f6" barSize={75} /> //barSize is the
        width of the bar and it's based on pixels
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
```

#### 82) Search Container

SearchContainer.js

```js
import { FormRow, FormRowSelect } from "."; //from components folder- these components are written for the inputs
import Wrapper from "../assets/wrappers/SearchContainer";
import { useSelector, useDispatch } from "react-redux";

const SearchContainer = () => {
  const { isLoading, search, searchStatus, searchType, sort, sortOptions } =
    useSelector((store) => store.allJobs); //all of them are initialState from allJobsSlice.js (initialFiltersState is part of initialState)
  const { jobTypeOptions, statusOptions } = useSelector((store) => store.job); //bring it from jobSlice.js because these are the same in the search form so we can use it in the return >list property
  const dispatch = useDispatch();
  const handleSearch = (e) => {};
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Wrapper>
      <form className="form">
        {" "}
        //main form
        <h4>search form</h4>
        <div className="form-center">
          {/* search position-FormRow is used for the text input */}
          <FormRow
            type="text"
            name="search"
            value={search}
            handleChange={handleSearch}
          />
          {/* search by status-FormRowSelect is used for the select input */}
          <FormRowSelect
            labelText="status"
            name="searchStatus"
            value={searchStatus}
            handleChange={handleSearch}
            list={["all", ...statusOptions]} //or list={["all","interview", "declined", "pending" ]}
          />
          {/* search by type -FormRowSelect is used for the select input*/}
          <FormRowSelect
            labelText="type"
            name="searchType"
            value={searchType}
            handleChange={handleSearch}
            list={["all", ...jobTypeOptions]}  //or list={["all","full-time", "part-time", "remote", "internship"]}
          />
          {/* sort -FormRowSelect is used for the select input*/}

          <FormRowSelect
            name="sort"
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}  //or ["all","latest", "oldest", "a-z", "z-a"]
          />
          <button
            className="btn btn-block btn-danger"
            disabled={isLoading}
            onClick={handleSubmit}
          >
            clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default SearchContainer;
```

#### 83) Handle Change and Clear Filters

allJobsSlice.js

```js
reducers:{
  handleChange: (state, { payload: { name, value } }) => {
      // state.page = 1;   //eventually we'll write this line
      state[name] = value;
    },
    clearFilters: (state) => {  //after clicking on the clear filter button
      return { ...state, ...initialFiltersState };  //get me all the states (initialState in allJobsSlice.js) and then spread out the initialFiltersState (in allJobsSlice.js)
    },
}

export const { showLoading, hideLoading, handleChange, clearFilters } =
  allJobsSlice.actions;
```

SearchContainer.js

```js
import { handleChange, clearFilters } from "../features/allJobs/allJobsSlice";

const handleSearch = (e) => {
  if (isLoading) return;
  dispatch(handleChange({ name: e.target.name, value: e.target.value }));
};
const handleSubmit = (e) => {
  e.preventDefault();
  dispatch(clearFilters());
};
```

#### 84) Pagination Setup

- by default server returns 10 jobs per page

- create
- components/PageBtnContainer.js

allJobsSlice.js

```js
//in the getAllJobs that we wrote before we had state.jobs = payload.jobs; now we want to add numOfPages and totalJobs to it too
    // numOfPages and totalJobs are change based on the search filter
    extraReducers:{

    [getAllJobs.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.jobs = payload.jobs;
      state.numOfPages = payload.numOfPages;  //numOfPages for showing in the pagination in 'All Jobs' page
      state.totalJobs = payload.totalJobs;  //totalJobs to show how many jobs found based on the filter on 'All Jobs' page before all the jobs
    },
  }

```

JobsContainer

```js
const { jobs, isLoading, page, totalJobs, numOfPages } = useSelector(
  (store) => store.allJobs
);

return (
  <Wrapper>
    <h5>
      {totalJobs} job{jobs.length > 1 && "s"} found
    </h5>
    <div className="jobs">
      {jobs.map((job) => {
        return <Job key={job._id} {...job} />;
      })}
    </div>
    {numOfPages > 1 && <PageBtnContainer />}
  </Wrapper>
);
```

#### 85) PageBtnContainer Structure

[JS Nuggets - Array.from()](https://youtu.be/zg1Bv4xubwo)

```js
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";  //react-icon for arrow left and right for pagination
import Wrapper from "../assets/wrappers/PageBtnContainer";
import { useSelector, useDispatch } from "react-redux";
const PageBtnContainer = () => {
  const { numOfPages, page } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();
// we use the Array.from in js to construct a new array- we pass a object with length property so every time the length:numOfPages then the size of array is going to change. e.g. numOfPages=5 then we have 5 items in the array
// then the second item is the callback function: (_, index) => {return index + 1;}. why index? because we want to store index+1 since array start with index 0 (we don't want to start with page0)
  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });
  const nextPage = () => {};
  const prevPage = () => {};
  return (
    <Wrapper>
      <button className="prev-btn" onClick={prevPage}>
        <HiChevronDoubleLeft />
        prev
      </button>
      <div className="btn-container">
        {pages.map((pageNumber) => {  //we need to iterate through the pages to find out how many pages we have. 

          return (
            <button
              type="button"
              className={pageNumber === page ? "pageBtn active" : "pageBtn"}  //if the pageNumber is equal to the page value then that button is active (dark blue)
              key={pageNumber}  //in this case we use pageNumber (or we can set index) for the key
              onClick={() => console.log("change page")}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
      <button className="next-btn" onClick={nextPage}>
        next
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
};

export default PageBtnContainer;
```

#### 86) Change Page

allJobsSlice.js

```js
reducers:{
  changePage: (state, { payload }) => {
      state.page = payload;  //payload is whatever we passed in
    },
}
export const {
  showLoading,
  hideLoading,
  handleChange,
  clearFilters,
  changePage,
} = allJobsSlice.actions;
```

PageBtnContainer.js

```js
import { changePage } from "../features/allJobs/allJobsSlice";

const nextPage = () => {
  let newPage = page + 1;  //add one to the existing page
  if (newPage > numOfPages) {  //if the newPage is bigger than numberOfPages we have then when click on next button go to page 1
    newPage = 1;
  }
  dispatch(changePage(newPage));
};
const prevPage = () => {
  let newPage = page - 1;
  if (newPage < 1) {  //if the newPage is less than 1 after click on the prev button go to the last page
    newPage = numOfPages;
  }
  dispatch(changePage(newPage));
};

return (
  <div className="btn-container">
    {pages.map((pageNumber) => {
      return (
        <button
          type="button"
          className={pageNumber === page ? "pageBtn active" : "pageBtn"}
          key={pageNumber}
          onClick={() => dispatch(changePage(pageNumber))}  //dispatch the changePage reducer
        >
          {pageNumber}
        </button>
      );
    })}
  </div>
);
```

#### 87) Query String Params

allJobsSlice

```js
export const getAllJobs = createAsyncThunk(
  'allJobs/getJobs',
  async (_, thunkAPI) => {
    const { page, search, searchStatus, searchType, sort } =
      thunkAPI.getState().allJobs;  //bring the keys from initialState in the jobSlice.js

    let url = `/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}`;
    if (search) {  //if the search is not empty then add it to the above url if the search is empty (by default it's empty don't add it to url since if we add a search='' to the above url then we receive to jobs)
      url = url + `&search=${search}`;
    }
    try {
      const resp = await customFetch.get(url);
      return resp.data;
    }
  }
)

```

JobsContainer.js

```js
const {
  jobs,
  isLoading,
  page,
  totalJobs,
  numOfPages,
  search,
  searchStatus,
  searchType,
  sort,
} = useSelector((store) => store.allJobs);

useEffect(() => {
  dispatch(getAllJobs());
  // eslint-disable-next-line
}, [page, search, searchStatus, searchType, sort]);  //we should add the keys of the query string so that everytime we trigger the getAllJobs again. 
```

#### 88) Change Page and isLoading

allJobsSlice.js

```js
reducers:{
  handleChange: (state, { payload: { name, value } }) => {
      state.page = 1;
      state[name] = value;
    },
```

SearchContainer.js

```js
const handleSearch = (e) => {
  if (isLoading) return;
  dispatch(handleChange({ name: e.target.name, value: e.target.value }));
};
```

#### 89) Refactor allJobsSlice.js

- create
- features/allJobs/allJobsThunk.js

```js
import customFetch from "../../utils/axios";

export const getAllJobsThunk = async (thunkAPI) => {
  const { page, search, searchStatus, searchType, sort } =
    thunkAPI.getState().allJobs;

  let url = `/jobs?page=${page}&status=${searchStatus}&jobType=${searchType}&sort=${sort}`;
  if (search) {
    url = url + `&search=${search}`;
  }
  try {
    const resp = await customFetch.get(url);

    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const showStatsThunk = async (_, thunkAPI) => {
  try {
    const resp = await customFetch.get("/jobs/stats");
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
```

allJobsSlice.js

```js
import { showStatsThunk, getAllJobsThunk } from "./allJobsThunk";

export const getAllJobs = createAsyncThunk("allJobs/getJobs", getAllJobsThunk);
export const showStats = createAsyncThunk("allJobs/showStats", showStatsThunk);
```

#### 90) Clear Store - Setup

allJobsSlice.js

```js
reducers:{
  clearAllJobsState: () => initialState,
}
```

#### 91) clearStore

create userThunk.js component  (we can write it in the userSlice.js instead of here)

```js
import { logoutUser } from "./userSlice";
import { clearAllJobsState } from "../allJobs/allJobsSlice";
import { clearValues } from "../job/jobSlice";

export const clearStoreThunk = async (message, thunkAPI) => {
  try {
    // first- logout user
    thunkAPI.dispatch(logoutUser(message)); //we passed the message in logout user
    // second-clear jobs value
    thunkAPI.dispatch(clearAllJobsState());
    // third- clear job input values
    thunkAPI.dispatch(clearValues());
    return Promise.resolve();  //if we are successful the return the promise as resolve
  } catch (error) {
    // console.log(error);
    return Promise.reject();  //if there is an error then we have reject in promise
  }
};
```

userSlice.js

```js
import { clearStoreThunk } from './userThunk';
export const clearStore = createAsyncThunk('user/clearStore', clearStoreThunk);

//add extraReducers for clearStore (the rejected cycle is important to us)
extraReducers:{
  [clearStore.rejected]: () => {
      toast.error('There was an error');
    },
}
```

Navbar.js

```js
import { clearStore } from "../features/user/userSlice";

return (
  <button
    type="button"
    className="dropdown-btn"
    onClick={() => {
      dispatch(clearStore("Logout Successful..."));  //now instead of login out we add the clearStore and inside of it we write the message
    }}
  >
    logout
  </button>
);
```

#### 92) UnAuthorized Requests

axios.js

```js
import { clearStore } from "../features/user/userSlice";

export const checkForUnauthorizedResponse = (error, thunkAPI) => {
  if (error.response.status === 401) {
    thunkAPI.dispatch(clearStore());
    return thunkAPI.rejectWithValue("Unauthorized! Logging Out...");
  }
  return thunkAPI.rejectWithValue(error.response.data.msg);
};
```

allJobsThunk.js (or in the allJobsSlice.js)

```js
import customFetch, { checkForUnauthorizedResponse } from "../../utils/axios";

export const showStatsThunk = async (_, thunkAPI) => {
  try {
    const resp = await customFetch.get("/jobs/stats");
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};
```

- refactor in all authenticated requests

#### 93)Refactor All Extra Reducers to Builder Callback Notation

allJobsSlice.js

```js
 extraReducers: (builder) => {
    builder
      .addCase(getAllJobs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllJobs.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.jobs = payload.jobs;
        state.numOfPages = payload.numOfPages;
        state.totalJobs = payload.totalJobs;
      })
      .addCase(getAllJobs.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(showStats.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(showStats.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.stats = payload.defaultStats;
        state.monthlyApplications = payload.monthlyApplications;
      })
      .addCase(showStats.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
```

jobSlice.js

```js
extraReducers: (builder) => {
    builder
      .addCase(createJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createJob.fulfilled, (state) => {
        state.isLoading = false;
        toast.success('Job Created');
      })
      .addCase(createJob.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(deleteJob.fulfilled, (state, { payload }) => {
        toast.success(payload);
      })
      .addCase(deleteJob.rejected, (state, { payload }) => {
        toast.error(payload);
      })
      .addCase(editJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editJob.fulfilled, (state) => {
        state.isLoading = false;
        toast.success('Job Modified...');
      })
      .addCase(editJob.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
```

userSlice.js

```js
 extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        addUserToLocalStorage(user);
        toast.success(`Hello There ${user.name}`);
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        addUserToLocalStorage(user);

        toast.success(`Welcome Back ${user.name}`);
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        addUserToLocalStorage(user);

        toast.success(`User Updated!`);
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(clearStore.rejected, () => {
        toast.error('There was an error..');
      });
  },
```

#### 94)Switch To Local Search

- remove isLoading from handleSearch
- import useState and useMemo from react
- setup localSearch state value
- replace search input functionality so it updates localSearch

```js
import { useState, useMemo } from "react";

const SearchContainer = () => {
  const [localSearch, setLocalSearch] = useState("");

  const handleSearch = (e) => {
    dispatch(handleChange({ name: e.target.name, value: e.target.value }));
  };

  return (
    <Wrapper>
      <form className="form">
        <h4>search form</h4>
        <div className="form-center">
          {/* search position */}
          <FormRow
            type="text"
            name="search"
            value={localSearch}
            handleChange={(e) => setLocalSearch(e.target.value)}
          />
          // ...rest of the code
        </div>
      </form>
    </Wrapper>
  );
};
export default SearchContainer;
```

#### 95)Setup Debounce

```js
import { useState, useMemo } from "react";

const SearchContainer = () => {
  const [localSearch, setLocalSearch] = useState("");

  const handleSearch = (e) => {
    dispatch(handleChange({ name: e.target.name, value: e.target.value }));
  };

  const debounce = () => {
    let timeoutID;
    return (e) => {
      setLocalSearch(e.target.value);
      clearTimeout(timeoutID);
      timeoutID = setTimeout(() => {
        dispatch(handleChange({ name: e.target.name, value: e.target.value }));
      }, 1000);  //after one second that user stops typing in the search field in search form we want to set up our global search
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocalSearch("");
    dispatch(clearFilters());
  };

  const optimizedDebounce = useMemo(() => debounce(), []);

  return (
    <Wrapper>
      <form className="form">
        <h4>search form</h4>
        <div className="form-center">
          {/* search position */}
          <FormRow
            type="text"
            name="search"
            value={localSearch}
            handleChange={optimizedDebounce}
          />
          // ...rest of the code
        </div>
      </form>
    </Wrapper>
  );
};
export default SearchContainer;
```
