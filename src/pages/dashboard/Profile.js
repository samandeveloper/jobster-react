//this file is related to the dashboard>'profile'
import { useState } from "react";
import { FormRow } from "../../components"; //for receiving inputs
import Wrapper from "../../assets/wrappers/DashboardFormPage"; //for css-this css file is related to both 'Profile' and 'Add job' pages
import { useDispatch, useSelector } from "react-redux"; //we want to bring user from initialState and also we need to write a new reducer for updating API for user info (using HTTP request)
import { toast } from "react-toastify"; //showing alerts, success, waning,..
import { updateUser } from "../../features/user/userSlice"; //updateUser is for updating data in profile page

const Profile = () => {
  const { isLoading, user } = useSelector((store) => store.user); //bring the user from initialState-we want isLoading so when on profile page user 'save changes' the page we want to disable the submit button
  const dispatch = useDispatch();

  //define a new local state (an object)- we take them from our user object in initialState- we add condition because initially user is null
  const [userData, setUserData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    lastName: user?.lastName || "",
    location: user?.location || "",
  });

  //when we click on the 'save changes' button we update the user info on the server (on API), now the server will respond with new updated user object,
  //then this new user will be updated in the userSlice>user and every where the new value will display.
  //submit button is same as 'save changes' button
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, lastName, location } = userData; //userData is the local state in this file
    if (!name || !email || !lastName || !location) {
      toast.error("please fill out all fields");
      return; 
    }
    //if every items exists
    dispatch(updateUser(userData)); //pass the user info (here userData state) to the updateUser
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value }); //with every change type in the profile fields we change [name]:value. e.g. email: {userData.email}
  };
  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3> profile</h3>
        <div className="form-center">
          <FormRow
            type="text"
            name="name"
            value={userData.name}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            labelText="last name"
            name="lastName"
            value={userData.lastName}
            handleChange={handleChange}
          />
          <FormRow
            type="email"
            name="email"
            value={userData.email}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            name="location"
            value={userData.location}
            handleChange={handleChange}
          />
          {/* the button should be written in the div- the text of the button will change according to the isLoading is true or false */}
          <button type="submit" className="btn btn-block" disabled={isLoading}>
            {isLoading ? "Please Wait..." : "save changes"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};
export default Profile;
