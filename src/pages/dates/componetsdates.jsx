export const Graph = ({ Name, Graph, click }) => {
  return (
    <button
      onClick={click}
      className="outline-none m-[none] py-[1vh] bg-[transparent] border-none cursor-pointer"
    >
      <div className="w-[35vw] h-[45vh] py-[1vh] px-[.5vw] bg-[#d9d9d9] rounded-1/7 flex-col flex justify-center ">
        <p className="text-[2vh] text-[#6ED4A5] my-[1vh]">{Name}</p>
        <div className="h-[40vh] w[30vw] ">{Graph}</div>
      </div>
    </button>
  );
};
export const ContainerTwoGraph = ({ Grahp1, Grhap2 }) => {
  return (
    <div className="flex my-[5vh]">
      <div className="mx-[3vw]">{Grahp1}</div>
      <div className="mx-[3vw]">{Grhap2}</div>
    </div>
  );
};
export const DataEstadistic = ({
  Type,
  Media,
  Moda,
  Mediana,
  CV,
  SubX,
  SubMo,
  SubMd,
  SubCV,
  click,
}) => {
  return (
    <button
      onClick={click}
      className="outline-none m-[none] py-[1vh] bg-[transparent] border-none cursor-pointer"
    >
      <div className="w-[35vw] h-[45vh] py-[1vh] px-[.5vw] bg-[#d9d9d9] rounded-1/7 grid gap-3 grid-cols-2 grid-rows-2">
        <div className=" rounded-1/7 flex-col flex items-center  relative ">
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
        <div className=" rounded-1/7 flex-col flex items-center  relative ">
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
        <div className=" rounded-1/7 flex-col flex items-center  relative ">
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
        <div className=" rounded-1/7 flex-col flex items-center  relative ">
          <p className="absolute text-[15vh] opacity-[.2] text-[#6ED4A5] font-black z-0">
            CV
          </p>
          <div>
            <h2 className="text-[#6ED4A5] z-10 relative">
              Coefiente de variación
            </h2>
          </div>
          <p className="text-gray-600 text-[1.5vh] z-10 relative my-[2vh]">
            {SubCV}
          </p>
          <h1 className="text-[3vh] font-black text-slate-500 z-10 relative ">
            {CV + "%"}
          </h1>
        </div>
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
  return <Chart series={series} options={options} type={"line"} />;
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
  return <Chart series={series} options={options} type={"bar"} />;
};
//Grafica de cantidad de citas por usuario
export const GraphUsuDate = () => {
  const series = [
    {
      data: [2311, 2214, 1090, 2800, 5323],
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
      categories: [["1-3"], ["3-5"], ["5-7"], ["7-9"], ["9-11"]],
      labels: {
        style: {
          fontSize: "12px",
        },
      },
    },
  };
  return <Chart series={series} options={options} type={"bar"} />;
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
  return <Chart type="pie" series={series} options={options} />;
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

  return <Chart options={options} series={series} type="polarArea" />;
};
