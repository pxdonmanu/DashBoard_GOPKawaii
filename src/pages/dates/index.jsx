import React, { useCallback, useState, useEffect } from "react";
import Navbar from "../../components/navbar";
import Chart from "react-apexcharts";
import { RxTriangleDown } from "react-icons/rx";
import { HiOutlineFilter } from "react-icons/hi";
import {
  Graph,
  ListThings,
  DataEstadistic,
  TotalDatesGraph,
  GraphDays,
  GraphEspecies,
  EspecieSelect,
  GraphUsuDate,
  GraphEdad,
  GraphMarcasPop,
  GraphVacunacion,
  GraphEnfermedades,
} from "./componetsdates";
import { useMainStore } from "../../store";
import { getAllEspecies, getAllVets } from "../../services";

const MODES = {
  Citas: "Citas",
  Animales: "Animales",
  Productos: "Productos",
  Salud: "Salud",
};

const DatesDash = () => {
  //Gráfica de citas por día en el mes
  const [Mode, setMode] = useState(true);

  //Grafica de citas totales y especie

  //Gráfica Cantidad de citas po usuario
  const [selectedMode, setSelectedMode] = useState();

  const [veterinarias, setVeterinarias] = useState([]);

  const veterinariaSelected = useMainStore((state) => state.veterinaria);
  const setVeterinariaSelected = useMainStore((state) => state.setVeterinaria);

  const setEspecies = useMainStore((state) => state.setEspecies);

  useEffect(() => {
    async function fetchAllSpecies() {
      const data = await getAllEspecies();
      if (data) {
        setEspecies(data.especie);
        console.log(data.especie);
      }
    }
    async function fetchAllVets() {
      const vets = await getAllVets();
      console.log(vets);
      if (!vets) {
        setVeterinariaSelected({});
        return setVeterinarias([]);
      }
      setVeterinarias(vets.veterinaria);
    }
    fetchAllVets();
    fetchAllSpecies();
  }, []);

  // const setTypeFactory = useCallback((type) => {}, []);
  useEffect(() => {
    switch (selectedMode) {
      case MODES.Citas:
        setRows({
          row1: [true, true],
          row2: [false, false],
          row3: [false, false],
          row4: [false, false],
        });
        break;
      case MODES.Animales:
        setRows({
          row1: [false, false],
          row2: [false, true],
          row3: [true, false],
          row4: [false, false],
        });
        break;
      case MODES.Productos:
        setRows({
          row1: [false, false],
          row2: [true, false],
          row3: [false, false],
          row4: [false, true],
        });
        break;

      case MODES.Salud:
        setRows({
          row1: [false, false],
          row2: [false, false],
          row3: [false, true],
          row4: [true, false],
        });
        break;

      case undefined:
        setRows({
          row1: [true, true],
          row2: [true, true],
          row3: [true, true],
          row4: [true, true],
        });
        break;
    }
  }, [selectedMode]);

  const [rows, setRows] = useState({
    row1: [true, true],
    row2: [true, true],
    row3: [true, true],
    row4: [true, true],
  });

  const [Graph1, setGraph1] = useState(false);
  const [Graph3, setGraph3] = useState(false);
  const [Graph4, setGraph4] = useState(false);
  const [Graph5, setGraph5] = useState(false);
  const [Graph6, setGraph6] = useState(false);
  const [Graph7, setGraph7] = useState(false);
  const [Graph8, setGraph8] = useState(false);
  const [VetSelect, setVetSelect] = useState(false);
  const [FilSelect, setFilSelect] = useState(false);
  return (
    <>
      {Mode ? (
        <div className="w-screen h-screen flex">
          <div className="flex items-center w-full h-full">
            <div className="w-full h-6/7">
              <div className="h-1/14 flex items-center justify-center text-green text-3xl font-semibold">
                DashBoard
              </div>
              <div className="h-1/14 my-[1vh] flex items-center justify-center text-green text-3xl font-semibold">
                <div className="h-[100%] w-[50%] flex items-center relative">
                  <button
                    className="flex items-center justify-center border-[.5vh] border-green w-[20vh] h-[7vh] rounded-[1vw] mx-[12vw] outline-none text-[3vh] "
                    onClick={() => {
                      VetSelect ? setVetSelect(false) : setVetSelect(true);
                    }}
                  >
                    <p className="text-[#757474] mx-3 text-[2vh]">
                      {veterinariaSelected && veterinariaSelected.nombre_vet
                        ? veterinariaSelected.nombre_vet
                        : "Veterinaria"}
                    </p>
                    <RxTriangleDown />
                  </button>
                  <div
                    className={
                      VetSelect
                        ? "w-[20vh] h-auto mx-[12vw] flex flex-col items-center justify-center absolute top-[11vh]"
                        : "absolute opacity-0 w-0 h-0"
                    }
                  >
                    {veterinarias.map((vet) => (
                      <button
                        key={vet.id_vet}
                        className="flex items-center justify-center float-left border-[.5vh] border-green w-full h-[6vh] rounded-[1vw] my-[.5vh] text-[2vh] text-[#757474] bg-white z-50"
                        onClick={() => {
                          setVetSelect(false);
                          setVeterinariaSelected(vet);
                        }}
                      >
                        {vet.nombre_vet}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="h-[100%] w-[50%] flex items-center relative justify-end">
                  <button
                    className="flex items-center justify-center border-[.5vh] border-green w-[18vh] h-[7vh] rounded-[2vw] mx-[12vw] outline-none text-[3vh] text-[#757474]"
                    onClick={() => {
                      FilSelect ? setFilSelect(false) : setFilSelect(true);
                      setSelectedMode(undefined);
                    }}
                  >
                    <div className="rounded-[50%] bg-green h-[70%] w-[25%] flex items-center justify-center text-[3vh]">
                      <HiOutlineFilter />
                    </div>
                    {selectedMode ? (
                      selectedMode
                    ) : (
                      <p className="text-[#757474] mx-5 text-[2vh]">Filtrar</p>
                    )}
                  </button>
                  <div
                    className={
                      FilSelect
                        ? "absolute flex flex-col items-center justify-center p-[1vh] top-[12vh] border-[.5vh] border-green rounded-[2vw] mx-[12vw] w-[18vh] h-auto bg-white z-50 z-50"
                        : " absolute opacity-0 w-0 h-0 top-0 left-0 right-0 bottom-0"
                    }
                  >
                    <button
                      className="text-[#757474] text-[1.5vh] rounded-[2vw] border-[.5vh] border-green w-[70%] my-[.5vh] p-[.5vh]"
                      onClick={() => {
                        setFilSelect(false);
                        setSelectedMode(MODES.Citas);
                      }}
                    >
                      Citas
                    </button>
                    <button
                      className="text-[#757474] text-[1.5vh] rounded-[2vw] border-[.5vh] border-green w-[70%] my-[.5vh] p-[.5vh]"
                      onClick={() => {
                        setFilSelect(false);
                        setSelectedMode(MODES.Animales);
                      }}
                    >
                      Animales
                    </button>
                    <button
                      className="text-[#757474] text-[1.5vh] rounded-[2vw] border-[.5vh] border-green w-[70%] my-[.5vh] p-[.5vh]"
                      onClick={() => {
                        setFilSelect(false);
                        setSelectedMode(MODES.Productos);
                      }}
                    >
                      Productos
                    </button>
                    <button
                      className="text-[#757474] text-[1.5vh] rounded-[2vw] border-[.5vh] border-green w-[70%] my-[.5vh] p-[.5vh]"
                      onClick={() => {
                        setFilSelect(false);
                        setSelectedMode(MODES.Salud);
                      }}
                    >
                      Salud
                    </button>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 overflow-y-scroll w-full h-[85%] bg-[#fff] ">
                {Graph1 ? (
                  <DataEstadistic
                    Type={"Citas"}
                    SubX={"Media de citas por dia"}
                    Media={129}
                    SubMd={"Mediana de citas por dia"}
                    Mediana={1234}
                    SubMo={"Moda de citas por dia"}
                    Moda={2344}
                    click={() => {
                      setGraph1(false);
                    }}
                  />
                ) : (
                  <Graph
                    Name={"Cantidad de citas por dia del mes"}
                    Graph={<GraphDays />}
                    click={() => {
                      setGraph1(true);
                    }}
                    data={true}
                  />
                )}

                <Graph
                  Name={"Citas totales"}
                  Graph={<TotalDatesGraph />}
                  click={() => {
                    setGraph2(true);
                  }}
                  data={false}
                />
                {Graph3 ? (
                  <DataEstadistic
                    Type={"Citas"}
                    SubX={"Media de citas por usuario"}
                    Media={129}
                    SubMd={"Mediana de citas por usuario"}
                    Mediana={1234}
                    SubMo={"Moda de citas por usuario"}
                    Moda={2344}
                    children={<ListThings />}
                    click={() => {
                      setGraph3(false);
                    }}
                  />
                ) : (
                  <Graph
                    Name={"Productos mas usados en citas"}
                    Graph={<GraphUsuDate />}
                    click={() => {
                      setGraph3(true);
                    }}
                    data={false}
                  />
                )}
                {Graph4 ? (
                  <DataEstadistic
                    Type={""}
                    SubX={"Media de animales registrados"}
                    Media={129}
                    SubMd={"Mediana de animales registrados"}
                    Mediana={1234}
                    SubMo={"Moda de animales registrados"}
                    Moda={2344}
                    click={() => {
                      setGraph4(false);
                    }}
                  />
                ) : (
                  <Graph
                    Name={"Cantidad de animales"}
                    Graph={<GraphEspecies />}
                    click={() => {
                      setGraph4(true);
                    }}
                    data={false}
                  />
                )}
                {Graph5 ? (
                  <DataEstadistic
                    Type={"Años"}
                    SubX={"Media de años"}
                    Media={129}
                    SubMd={"Mediana de años"}
                    Mediana={1234}
                    SubMo={"Moda de años"}
                    Moda={2344}
                    children={<ListThings />}
                    click={() => {
                      setGraph5(false);
                    }}
                  />
                ) : (
                  <Graph
                    Name={"Edad de las mascotas por especie"}
                    Graph={<GraphEdad />}
                    click={() => {
                      setGraph5(true);
                    }}
                    data={true}
                  />
                )}
                {Graph6 ? (
                  <DataEstadistic
                    Type={"Vacunas"}
                    SubX={"Media de vacunas"}
                    Media={129}
                    SubMd={"Mediana de vacunas"}
                    Mediana={1234}
                    SubMo={"Moda de vacunas"}
                    Moda={2344}
                    children={
                      <ListThings title={"Vacunas aplicadas por especie"} />
                    }
                    click={() => {
                      setGraph6(false);
                    }}
                  />
                ) : (
                  <Graph
                    Name={"Vacunas aplicadas por especie"}
                    Graph={<GraphVacunacion />}
                    click={() => {
                      setGraph6(true);
                    }}
                    data={true}
                  />
                )}
                {Graph7 ? (
                  <DataEstadistic
                    Type={"Enfermedades"}
                    SubX={"Media de enfermedades"}
                    Media={129}
                    SubMd={"Mediana de enfermedades"}
                    Mediana={1234}
                    SubMo={"Moda de enfermedades"}
                    Moda={2344}
                    children={<ListThings />}
                    click={() => {
                      setGraph7(false);
                    }}
                  />
                ) : (
                  <Graph
                    Name={"Enfermades mas comuenes por especie"}
                    Graph={<GraphEnfermedades />}
                    click={() => {
                      setGraph7(true);
                    }}
                    data={true}
                  />
                )}
                {Graph8 ? (
                  <DataEstadistic
                    Type={"Mascotas"}
                    SubX={"Media de mascotas"}
                    Media={129}
                    SubMd={"Mediana de mascotas"}
                    Mediana={1234}
                    SubMo={"Moda de mascotas"}
                    Moda={2344}
                    children={<ListThings />}
                    click={() => {
                      setGraph8(false);
                    }}
                  />
                ) : (
                  <Graph
                    Name={"Marcas mas consumidas por especies"}
                    Graph={<GraphMarcasPop />}
                    click={() => {
                      setGraph8(true);
                    }}
                    data={true}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-screen h-screen flex">
          <Navbar />
          puto
        </div>
      )}
    </>
  );
};

export default DatesDash;
