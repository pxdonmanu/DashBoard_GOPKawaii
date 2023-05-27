import req from "./req";

export const getAllEspecies = async () => {
  try {
    const { data } = await req.get("/catalogo/especieC");
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getAllVets = async () => {
  try {
    const { data } = await req.get("/maestra/veterinariaM");
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
