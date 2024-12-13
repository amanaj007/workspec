import axios from "axios";

// fetching the users from the endpoint
export const fetchUsers = async () => {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

// fetching the thumbnail from the endpoint
export const fetchPhotos = async () => {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/photos"
    );
    return data.slice(0, 10);
  } catch (error) {
    console.error("Error fetching photos:", error);
    throw error;
  }
};
