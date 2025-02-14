export const getExecutives = async () => {
  const response = await useFetch(
    "https://apidev.unabase.cc/app/users/findUsers/ByNames?name=miguel"
  );
//   const { data } = response;

  return response
};
