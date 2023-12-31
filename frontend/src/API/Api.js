import axios from "axios";
const url = 'http://localhost:8000'

export const checkAPI = () => {
    axios.get(url + '/').then((res) => {
      alert(res.data)
    }).catch((err) => {
      console.log(err)
    })
}


export const sendJSON = (user) => {
    console.log(user)
    axios.put(url + '/parse', user).then((res) => {
      alert(res.data)
    }).catch((err) => {
      console.log(err)
    })
}


///██╗░░░██╗░██████╗███████╗██████╗░
///██║░░░██║██╔════╝██╔════╝██╔══██╗
///██║░░░██║╚█████╗░█████╗░░██████╔╝
///██║░░░██║░╚═══██╗██╔══╝░░██╔══██╗
///╚██████╔╝██████╔╝███████╗██║░░██║
///░╚═════╝░╚═════╝░╚══════╝╚═╝░░╚═╝

export const addUser = async (user) => {
  try {
    const response = await axios.post(url + "/user", user);
    console.log("addUser response:", response); // Add this line
    if (response.status === 200) {
      return response.data;
    } else {
      console.error("Error: User data not saved properly.");
      return null;
    }
  } catch (err) {
    console.error(err);
    return null;
  }
};


  export  const getUsers = () => {
    axios.get(url + '/users').then((res) => {
      alert(JSON.stringify(res.data))
    }).catch((err) => {
      console.log(err)
    })
  }

  export const clearUsers = () => {
    axios.delete(url + '/users/clear').then((res) => {
      alert(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }

// get user with '/user?email='someEmail'
export const getUserByEmail = async (email) => {
  let response
  try {
    response = await axios.get(
      url + `/user?email=${email}`
    )
  } catch (err) {
    console.log(err)
  }
  return response.data["0"]
}

// login user with '/user?email='someEmail'&password='somePassword'
export const login = async (email, password) => {
  let response
  try {
    response = await axios.get(
  url + `/login?email=${email}&password=${password}`
  )} catch (err) {
      console.log(err)
  }
  return response.data["0"]
};

export const getUserById = async (user_id) => {
  let response
  try {
    response = await axios.get(
  url + `/user?user_id=${user_id}`
  )} catch (err) {
      console.log(err)
  }
  return response.data["0"]
}

// update password at '/user?email='someEmail'' with parameter password
export const updatePassword = async (email, password) => {
  const data = {password:`${password}`}
  let response
  try {
    response = await axios.put(
  url + `/user?email=${email}`, data
  )} catch (err) {
      console.log(err)
  }
  return response.data
}

export const updateProfile = async (email, bio, prof_pic_choice, location, phone) => {
  const data = { bio: `${bio}`, prof_pic_choice: prof_pic_choice, location: `${location}`, phone: `${phone}` }
  let response
  try {
    response = await axios.put(
      url + `/user?email=${email}`, data
    )
  } catch (err) {
    console.log(err)
  }
  return response.data
}
