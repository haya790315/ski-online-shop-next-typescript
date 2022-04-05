export const fetchApiData = async (api:string) => {
  const res = await fetch(api);
  const response = await res.json();
  const data = response.result

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};


