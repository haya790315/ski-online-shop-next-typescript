export const fetchApiData = async (api: string) => {
  const response = await fetch(api).then(res=>res.json());
  const data = response.result;

  if (response.status !== 200) {
    console.error(data.message);
  }

  return data;
};
