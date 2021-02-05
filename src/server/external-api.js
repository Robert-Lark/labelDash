import {useAuth0} from "@auth0/auth0-react";

export const ExternalApi = async () => {
  const serverUrl = `https://sonicarchbackend.herokuapp.com/library/`
  const {getAccessTokenSilently} = useAuth0();
  try {
    const token = await getAccessTokenSilently();
    const response = await fetch(`${serverUrl}library/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const responseData = await response.json();

    console.log(`THIS IS THE RESPONSE DATA: ${responseData}`);
  } catch (error) {
    console.log(error.message);
  }
};
