import { RxTriangleDown } from "react-icons/rx";

export const Graph = ({ Name, Graph, click, data }) => {
  return (
      <div className="w-[90%] h-[45vh] mx-[5%] my-[2vh] col-span-1 relative bg-[#d9d9d9] rounded-1/7 flex-col flex justify-center items-center">
        <div className="relative flex items-center justify-center w-full">
          <p className="text-[2vh] text-[#757474] my-[1vh] ">{Name}</p>
          {data ? (
            <button
              className="bg-green outline-none y-[100%] w-[10vh] left-[55vh] rounded-[1vw] absolute text-white"
              onClick={click}
            >
              Datos
            </button>
          ) : (
            ""
          )}
        </div>
        <div className="h-[40vh] flex justify-center z-0">{Graph}</div>
      </div>
  );
};
export const EspecieSelect = ({}) => {
  const [Change, SetChange] = useState(false);
  return (
    <div className="relative">
      <button
        className="border-green rounded-[1vw] h-[5vh] w-[15vh] border-[.5vh] flex items-center justify-center text-[#757474] z-50"
        onClick={() => {
          Change ? SetChange(false) : SetChange(true);
        }}
      >
        <p className="text-[#757474] text-[1.8vh] mx-3 ">Especie</p>
        <RxTriangleDown />
      </button>
      <div
        className={
          Change
            ? "absolute flex flex-col items-center justify-center p-[.2vh]  border-[.5vh] border-green rounded-[2vw] top-[5.5vh] w-full h-auto bg-[#d9d9d9] z-50"
            : "w-0 h-0 opacity-0"
        }
      >
        <button
          className="text-[#757474] text-[1.5vh] rounded-[2vw] border-[.5vh] border-green w-[70%] my-[.5vh] p-[.5vh]"
          onClick={() => {
            SetChange(false);
          }}
        >
          Perros
        </button>
        <button
          className="text-[#757474] text-[1.5vh] rounded-[2vw] border-[.5vh] border-green w-[70%] my-[.5vh] p-[.5vh]"
          onClick={() => {
            SetChange(false);
          }}
        >
          Gatos
        </button>
        <button
          className="text-[#757474] text-[1.5vh] rounded-[2vw] border-[.5vh] border-green w-[70%] my-[.5vh] p-[.5vh]"
          onClick={() => {
            SetChange(false);
          }}
        >
          Mini Pigs
        </button>
        <button
          className="text-[#757474] text-[1.5vh] rounded-[2vw] border-[.5vh] border-green w-[70%] my-[.5vh] p-[.5vh]"
          onClick={() => {
            SetChange(false);
          }}
        >
          Conejos
        </button>
        <button
          className="text-[#757474] text-[1.5vh] rounded-[2vw] border-[.5vh] border-green w-[70%] my-[.5vh] p-[.5vh]"
          onClick={() => {
            SetChange(false);
          }}
        >
          Hurones
        </button>
      </div>
    </div>
  );
};

export const Listcategorias = ({ cat }) => {
  return (
    <div className="h-full w-full p-1">
      <div className="h-[10%] text-[#6ED4A5] text-[2.5vh]">
        Productos mas usados por categoria
      </div>
      <div className="flex h-[50%] w-[100%]">
        <div className="w-[40%] mx-[5%]">
          <h2 className="text-[#6ED4A5] text-[2vh] justify-start">Alimento</h2>
          <ul className="text-[#434343]">
            <li className="my-[.5vh]">-Orijen Original-Croquetas para perro</li>
            <li className="my-[.5vh]">-Whiskas Comida para Gatos Croquetas</li>
            <li className="my-[.5vh]">-Trick & Treats YUMPERS</li>
          </ul>
        </div>
        <div className="w-[40%] mx-[5%]">
          <h2 className="text-[#6ED4A5] text-[2vh]">Higiene</h2>
          <ul className="text-[#434343] ">
            <li className="my-[.5vh]">
              -PETShampoo All Purpose- Shampoo hipoalergénico
            </li>
            <li className="my-[.5vh]">-John Paul Pet Oatmeal Shampoo</li>
            <li className="my-[.5vh]">-SEASKY Cepillo para Perros</li>
          </ul>
        </div>
      </div>
      <div className="h-[30%] w-[100%]">
        <h2 className="text-[#6ED4A5] text-[2vh]">Accesorios</h2>
        <ul>
          <li className="my-[1vh]">NEWKIBOU Cueva Suave Gato</li>
          <li className="my-[1vh]">Mini Pig - Arnés ajustable para cerditos</li>
          <li className="my-[1vh]">
            PUBAMALL Juego de 10 Piezas de Juguetes para Perros
          </li>
        </ul>
      </div>
    </div>
  );
};
export const Listaenfermadesporedad = () => {
  return (
    <div className="h-full w-full p-1 ">
      <div className="h-20% text-[#6ED4A5] text-[2vh]">
        Enfermedades mas comnues en perros
      </div>

      <div className="flex">
        <div className="h-[70%] w-[50%]">
          <div>
            <h2 className="text-[#6ED4A5] text-[2vh]">0 a 3 años</h2>
            <ul>
              <li className="my-[.5vh]">Rabia</li>
              <li className="my-[.5vh]">Moquillo</li>
              <li className="my-[.5vh]">Otitis</li>
            </ul>
          </div>
          <div>
            <h2 className="text-[#6ED4A5] text-[2vh]">3 a 6 años</h2>
            <ul>
              <li className="my-[.5vh]">Parvovirus</li>
              <li className="my-[.5vh]">Brucelosis</li>
              <li className="my-[.5vh]">Alergias cutáneas</li>
            </ul>
          </div>
        </div>
        <div className="h-[70%] w-[50%]">
          <div>
            <h2 className="text-[#6ED4A5] text-[2vh]">6 a 9 años</h2>
            <ul>
              <li className="my-[.5vh]">Diarrea</li>
              <li className="my-[.5vh]">Leishmaniosis</li>
              <li className="my-[.5vh]">Sarna demodéctica</li>
            </ul>
          </div>
          <div>
            <h2 className="text-[#6ED4A5] text-[2vh] my-[1vh]">9 a 12 años</h2>
            <ul>
              <li className="my-[.5vh]">Brucelosis</li>
              <li className="my-[.5vh]">Parvovirus</li>
              <li className="my-[.5vh]">Leptospirosis</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="h-[20%] w-[100%]">
        <h2 className="text-[#6ED4A5] text-[2vh]">12 a 15 años</h2>
        <ul>
          <li className="my-[.5vh]">Hepatitis canina</li>
          <li className="my-[.5vh]">Toxoplasmosis</li>
          <li className="my-[.5vh]">Leishmaniosis</li>
        </ul>
      </div>
    </div>
  );
};
export const Listaenfermedadesporespecie = ({}) => {
  return (
    <div className="h-full w-full p-1 ">
      <div className="h-20% text-[#6ED4A5] text-[2vh]">
        Enfermedades mas comunes por especie
      </div>

      <div className="flex">
        <div className="h-[70%] w-[50%]">
          <div>
            <h2 className="text-[#6ED4A5] text-[2vh]">Perros</h2>
            <ul>
              <li className="my-[.5vh]">MOQUILLO CANINO</li>
              <li className="my-[.5vh]">LEPTOSPIROSIS CANINA</li>
              <li className="my-[.5vh]">TOS DE LAS PERRERAS</li>
            </ul>
          </div>
          <div>
            <h2 className="text-[#6ED4A5] text-[2vh]">Gatos</h2>
            <ul>
              <li className="my-[.5vh]">Rabia</li>
              <li className="my-[.5vh]">Cistitis </li>
              <li className="my-[.5vh]">Virus de la leucemia felina</li>
            </ul>
          </div>
        </div>
        <div className="h-[70%] w-[50%]">
          <div>
            <h2 className="text-[#6ED4A5] text-[2vh]">Mini Pigs</h2>
            <ul>
              <li className="my-[.5vh]">Hemorroides</li>
              <li className="my-[.5vh]">Bronquitis</li>
              <li className="my-[.5vh]">Lombrices</li>
            </ul>
          </div>
          <div>
            <h2 className="text-[#6ED4A5] text-[2vh] my-[1vh]">Hurones</h2>
            <ul>
              <li className="my-[.5vh]">Sarna ótica</li>
              <li className="my-[.5vh]">Cardiomipatía</li>
              <li className="my-[.5vh]">Rabia</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="h-[20%] w-[100%]">
        <h2 className="text-[#6ED4A5] text-[2vh]">Conejos</h2>
        <ul>
          <li className="my-[.5vh]">Mixomatosis</li>
          <li className="my-[.5vh]">Neumonía</li>
          <li className="my-[.5vh]">Abscesos generalizados</li>
        </ul>
      </div>
    </div>
  );
};
export const Listavacunasporespecie = ({}) => {
  return (
    <div className="h-full w-full p-1 ">
      <div className="h-20% text-[#6ED4A5] text-[2vh]">
        Vacunas mas comunes por especie
      </div>

      <div className="flex">
        <div className="h-[70%] w-[50%]">
          <div>
            <h2 className="text-[#6ED4A5] text-[2vh]">Perros</h2>
            <ul>
              <li className="my-[.5vh]">Vacuna contra el distemper</li>
              <li className="my-[.5vh]">Vacuna contra la leptospirosis</li>
              <li className="my-[.5vh]">Vacuna contra parvovirus</li>
            </ul>
          </div>
          <div>
            <h2 className="text-[#6ED4A5] text-[2vh]">Gatos</h2>
            <ul>
              <li className="my-[.5vh]">Vacuna contra Rabia</li>
              <li className="my-[.5vh]">Vacuna contra Moquillo </li>
              <li className="my-[.5vh]">Vacuna contra Gripe felina</li>
            </ul>
          </div>
        </div>
        <div className="h-[70%] w-[50%]">
          <div>
            <h2 className="text-[#6ED4A5] text-[2vh]">Mini Pigs</h2>
            <ul>
              <li className="my-[.5vh]">
                Vacuna contra Enfermedad de Aujeszky
              </li>
              <li className="my-[.5vh]">Vacuna contra porcina africana</li>
              <li className="my-[.5vh]">Vacuna contra enfermedad vesiculars</li>
            </ul>
          </div>
          <div>
            <h2 className="text-[#6ED4A5] text-[2vh] my-[1vh]">Hurones</h2>
            <ul>
              <li className="my-[.5vh]">Vacuna contra Rabia</li>
              <li className="my-[.5vh]">Vacuna contra moquillo</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="h-[20%] w-[100%]">
        <h2 className="text-[#6ED4A5] text-[2vh]">Conejos</h2>
        <ul>
          <li className="my-[.5vh]">Vacuna contra vírica hemorrágica</li>
          <li className="my-[.5vh]">Vacuna contra mixomatosis</li>
          <li className="my-[.5vh]">Vacuna contra Rabia</li>
        </ul>
      </div>
    </div>
  );
};
export const Listadeproductospormarca = ({}) => {
  return (
    <div className="h-full w-full p-1 ">
      <div className="h-20% text-[#6ED4A5] text-[2vh]">
        Productos mas vendidos en cada marca
      </div>

      <div className="flex">
        <div className="h-[70%] w-[50%]">
          <div>
            <h2 className="text-[#6ED4A5] text-[2vh]">Purina</h2>
            <ul>
              <li className="my-[.5vh]">Purina® Beneful® Purina® Beneful®</li>
              <li className="my-[.5vh]">Purina® Bonelo® Purina® Bonelo®</li>
              <li className="my-[.5vh]">Purina® Cat Chow® Purina® Cat Chow®</li>
            </ul>
          </div>
          <div>
            <h2 className="text-[#6ED4A5] text-[2vh]">Zoetis</h2>
            <ul>
              <li className="my-[.5vh]">Simparica Trio</li>
              <li className="my-[.5vh]">Draxxin KP</li>
              <li className="my-[.5vh]">Vetscan</li>
            </ul>
          </div>
        </div>
        <div className="h-[70%] w-[50%]">
          <div>
            <h2 className="text-[#6ED4A5] text-[2vh]">Elanco</h2>
            <ul>
              <li className="my-[.5vh]">Advantage</li>
              <li className="my-[.5vh]">Advantage Multi</li>
              <li className="my-[.5vh]">Advantix</li>
            </ul>
          </div>
          <div>
            <h2 className="text-[#6ED4A5] text-[2vh] my-[1vh]">Virbac</h2>
            <ul>
              <li className="my-[.5vh]">Acatak</li>
              <li className="my-[.5vh]">Alfadex</li>
              <li className="my-[.5vh]">Allermyl</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="h-[20%] w-[100%]">
        <h2 className="text-[#6ED4A5] text-[2vh]">Hipra</h2>
        <ul>
          <li className="my-[.5vh]">Evanovo</li>
          <li className="my-[.5vh]">Gumbohatch</li>
          <li className="my-[.5vh]">Eravac</li>
        </ul>
      </div>
    </div>
  );
};
export const DataEstadistic = ({
  Type,
  Media,
  Moda,
  Mediana,
  SubX,
  SubMo,
  SubMd,
  click,
  children,
}) => {
  return (
    <button
      onClick={click}
      className="outline-none m-[none] py-[1vh] bg-[transparent] border-none cursor-pointer"
    >
      <div className="w-[35vw] h-[45vh] py-[1vh] px-[.5vw] bg-[#d9d9d9] rounded-1/7 flex flex-col">
        {children ? (
          children
        ) : (
          <>
            <div className="flex h-[50%] w-[100%] ">
              <div className=" rounded-1/7 flex-col flex items-center  relative mx-[15%]">
                <p className="absolute text-[15vh] opacity-[.2] text-[#6ED4A5] font-black z-0">
                  X̅
                </p>
                <div>
                  <h2 className="text-[#6ED4A5] z-10 relative">Media</h2>
                </div>
                <p className="text-gray-600 text-[1.5vh] z-10 relative my-[2vh]">
                  {SubX}
                </p>
                <h1 className="text-[3vh] font-black text-slate-500 z-10 relative ">
                  {Media + " " + Type}
                </h1>
              </div>
              <div className=" rounded-1/7 flex-col flex items-center  relative mx-[15%]">
                <p className="absolute text-[15vh] opacity-[.2] text-[#6ED4A5] font-black z-0">
                  Md
                </p>
                <div>
                  <h2 className="text-[#6ED4A5] z-10 relative">Mediana</h2>
                </div>
                <p className="text-gray-600 text-[1.5vh] z-10 relative my-[2vh]">
                  {SubMd}
                </p>
                <h1 className="text-[3vh] font-black text-slate-500 z-10 relative ">
                  {Mediana + " " + Type}
                </h1>
              </div>
            </div>
            <div className={`rounded-1/7 flex-col flex items-center relative`}>
              <p className="absolute text-[15vh] opacity-[.2] text-[#6ED4A5] font-black z-0">
                Mo
              </p>
              <div>
                <h2 className="text-[#6ED4A5] z-10 relative">Moda</h2>
              </div>
              <p className="text-gray-600 text-[1.5vh] z-10 relative my-[2vh]">
                {SubMo}
              </p>
              <h1 className="text-[3vh] font-black text-slate-500 z-10 relative ">
                {Moda + " " + Type}
              </h1>
            </div>
          </>
        )}
      </div>
    </button>
  );
};
import { useState } from "react";
import Chart from "react-apexcharts";
//Graficas de citas al mes por dia
export const GraphDays = () => {
  const series = [
    {
      name: "Citas",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 34],
    },
  ];
  const options = {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30],
    },
  };

  return (
    <div className="w-[26vw]">
      <div className="flex justify-start items-center">
        <EspecieSelect />
      </div>
      <Chart series={series} options={options} type={"line"} />
    </div>
  );
};
//Grafica de citas totales por cada especie
export const TotalDatesGraph = () => {
  const series = [
    {
      name: "citas",
      data: [28, 16, 21, 13, 30],
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: "bar",
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        columnWidth: "50%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 2,
    },

    grid: {
      row: {
        colors: ["#fff", "#f2f2f2"],
      },
    },
    xaxis: {
      labels: {
        rotate: -45,
      },
      categories: ["Conejos", "Perros", "Gatos", "Hurones", "Mini Pigs"],
      tickPlacement: "on",
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "horizontal",
        shadeIntensity: 0.25,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 0.85,
        opacityTo: 0.85,
        stops: [50, 0, 100],
      },
    },
  };
  return (
    <div className="w-[30vw] ">
      <Chart series={series} options={options} type={"bar"} />
    </div>
  );
};
//Grafica de cantidad de citas por usuario
export const GraphUsuDate = () => {
  const series = [
    {
      data: [2311, 2214, 1090],
    },
  ];
  const options = {
    chart: {
      height: 350,
      type: "bar",
      events: {
        click: function (chart, w, e) {
          // console.log(chart, w, e)
        },
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "45%",
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: [["Alimento"], ["Higiene"], ["Accesorios"]],
      labels: {
        style: {
          fontSize: "12px",
        },
      },
    },
  };
  return (
    <div className="w-[30vw]">
      <Chart series={series} options={options} type={"bar"} />
    </div>
  );
};
//Grafica de cantidad de animales segun la veterinaria
export const GraphEspecies = () => {
  const series = [44, 55, 13, 43, 22];
  const options = {
    chart: {
      width: 380,
      type: "pie",
    },
    labels: ["Perros", "Gatos", "Hurones", "Conejos", "Mini Pigs"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };
  return (
    <div className="w-[27vw]">
      <Chart type="pie" series={series} options={options} />
    </div>
  );
};
//Grafica de edad de mascotas
export const GraphEdad = () => {
  const series = [42, 47, 52, 58, 65];

  const options = {
    chart: {
      width: 380,
      type: "polarArea",
    },
    labels: ["Perros", "Gatos", "Conejos", "Hurones", "Mini Pigs"],
    fill: {
      opacity: 1,
    },
    stroke: {
      width: 1,
      colors: undefined,
    },
    yaxis: {
      show: false,
    },
    legend: {
      position: "top",
    },
    plotOptions: {
      polarArea: {
        rings: {
          strokeWidth: 0,
        },
        spokes: {
          strokeWidth: 0,
        },
      },
    },
    theme: {
      monochrome: {
        enabled: true,
        shadeTo: "light",
        shadeIntensity: 0.6,
      },
    },
  };

  return (
    <div className="w-[23vw]">
      <div className="flex justify-start items-center">
        <EspecieSelect />
      </div>
      <Chart options={options} series={series} type="polarArea" />
    </div>
  );
};
//Grafica de Vacunacion
export const GraphVacunacion = () => {
  const series = [76, 42, 88, 17, 61];
  var options = {
    chart: {
      height: 350,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: "22px",
          },
          value: {
            fontSize: "16px",
          },
          total: {
            show: true,
            label: "Total",
            formatter: function (w) {
              // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
              return;
            },
          },
        },
      },
    },
    labels: ["Perros", "Gatos", "Hurones", "Conejos", "Mini Pigs"],
  };

  return (
    <div className="w-[25vw]">
      <Chart type="radialBar" series={series} options={options} />
    </div>
  );
};

//Grafica de enfermedades
export const GraphEnfermedades = () => {
  const series = [42, 47, 52, 58, 65];

  const options = {
    chart: {
      width: 380,
      type: "donut",
    },
    labels: ["Perros", "Gatos", "Conejos", "Hurones", "Mini Pigs"],
    fill: {
      opacity: 1,
    },
    stroke: {
      width: 1,
      colors: undefined,
    },
    yaxis: {
      show: false,
    },
    legend: {
      position: "top",
    },
    plotOptions: {
      polarArea: {
        rings: {
          strokeWidth: 0,
        },
        spokes: {
          strokeWidth: 0,
        },
      },
    },
    theme: {
      monochrome: {
        enabled: true,
        shadeTo: "light",
        shadeIntensity: 0.6,
      },
    },
  };

  return (
    <div className="w-[25vw]">
      <Chart options={options} series={series} type="donut" />
    </div>
  );
};

//Grafica de marcas mas consumidas
export const GraphMarcasPop = () => {
  const series = [
    {
      data: [1701, 1214, 1090, 891, 987],
    },
  ];
  const options = {
    chart: {
      height: 350,
      type: "bar",
      events: {
        click: function (chart, w, e) {
          // console.log(chart, w, e)
        },
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "45%",
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: [
        ["Pedigree"],
        ["Royal Canin"],
        ["Purina"],
        ["Top Choice"],
        ["Eukanuba"],
      ],
      labels: {
        style: {
          fontSize: "12px",
        },
      },
    },
  };
  return (
    <div className="w-[28vw]">
      <div className="flex justify-start items-center">
        <EspecieSelect />
      </div>
      <Chart series={series} options={options} type={"bar"} />
    </div>
  );
};

//Switch 1
export const SwitchButton = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const options = ["Perros", "Gatos", "Hurones", "Conejos", "Mini Pigs"];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsExpanded(false);
  };

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

  return (
    <div className="relative inline-block text-left w-64">
      <div>
        <span className="rounded-md shadow-sm">
          <button
            type="button"
            className=" w-[8vw] h-[4vh]  inline-flex justify-between w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-green hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            aria-haspopup="true"
            aria-expanded={isExpanded}
          >
            {selectedOption ? selectedOption : "Especie"}
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.2929 13.2929C10.6834 12.9024 11.3166 12.9024 11.7071 13.2929L15.7071 17.2929C16.0976 17.6834 16.0976 18.3166 15.7071 18.7071C15.3166 19.0976 14.6834 19.0976 14.2929 18.7071L10 14.4142L5.70711 18.7071C5.31658 19.0976 4.68342 19.0976 4.29289 18.7071C3.90237 18.3166 3.90237 17.6834 4.29289 17.2929L8.29289 13.2929C8.68342 12.9024 9.31658 12.9024 9.70711 13.2929L9.70711 13.2929Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </span>
      </div>
      {isExpanded && (
        <div className="absolute w-[10vw] h-[22vh] z-10 mt-2 text-black rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option) => (
              <a
                key={option}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

//switch2

export const SwitchPeriodo = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const options = ["Diario", "Semanal", "Mensual"];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsExpanded(false);
  };

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

  return (
    <div className="relative inline-block text-left w-64">
      <div>
        <span className="rounded-md shadow-sm">
          <button
            type="button"
            className=" w-[8vw] h-[4vh]  inline-flex justify-between w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-green hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            aria-haspopup="true"
            aria-expanded={isExpanded}
          >
            {selectedOption ? selectedOption : "Periodo"}
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.2929 13.2929C10.6834 12.9024 11.3166 12.9024 11.7071 13.2929L15.7071 17.2929C16.0976 17.6834 16.0976 18.3166 15.7071 18.7071C15.3166 19.0976 14.6834 19.0976 14.2929 18.7071L10 14.4142L5.70711 18.7071C5.31658 19.0976 4.68342 19.0976 4.29289 18.7071C3.90237 18.3166 3.90237 17.6834 4.29289 17.2929L8.29289 13.2929C8.68342 12.9024 9.31658 12.9024 9.70711 13.2929L9.70711 13.2929Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </span>
      </div>
      {isExpanded && (
        <div className="absolute w-[6vw] h-[14vh] z-10 mt-2 text-black rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option) => (
              <a
                key={option}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
