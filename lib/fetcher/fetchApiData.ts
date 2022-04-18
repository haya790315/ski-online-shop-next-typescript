export const fetchApiData = async (api: string) => {
  const res = await fetch(api);
  const response = await res.json();
  const data = response.result;

  if (res.status !== 200) {
    console.error(data.message);
  }

  return data;
};
