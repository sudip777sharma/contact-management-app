import axios from "axios";

export const getContacts = async () => {
  const response = await axios.get("API_ENDPOINT_TO_GET_CONTACTS");
  return response.data;
};

export const addContact = async (contactData: any) => {
  await axios.post("API_ENDPOINT_TO_ADD_CONTACT", contactData);
};

export const getGraphData = async () => {
  const response = await axios.get(
    "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
  );
  return response.data;
};

export const getCountriesData = async () => {
  const response = await axios.get("https://disease.sh/v3/covid-19/countries");
  return response.data;
};
