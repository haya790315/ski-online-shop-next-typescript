export const fetchApiData = async (api: string) => {
  try {
    const response = await fetch(api).then((res) => res.json());
    const data = response.result;
    return data;
  } catch (err) {
    throw new Error(err);
  }
};
