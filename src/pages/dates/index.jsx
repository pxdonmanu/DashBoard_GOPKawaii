import React, { useState } from "react";
import Navbar from "../../components/navbar";
import {Graph, ContainerTwoGraph, DataEstadistic} from './componetsdates'
const DatesDash = () => {
  //Gráfica de citas por día en el mes
  const [Mode, setMode] = useState(true);
  const [series, setSeries] = useState([
    {
      name: "Dia",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
  ]);

  const [options, setOptions] = useState({
    chart: {
      type: "area",
      fontFamily: "Inter",
      stacked: false,
      zoom: {
        type: "x",
        enabled: true,
        autoScaleYaxis: true,
      },
      toolbar: {
        autoSelected: "zoom",
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },
    yaxis: {
      labels: {
        formatter: function (val) {
          return (val / 1000000).toFixed(0);
        },
      },
    },
    xaxis: {
      type: "datetime",
      title: {
        text: "Días del mes",
      },
    },
    tooltip: {
      shared: false,
      y: {
        formatter: function (val) {
          return (val / 1000000).toFixed(0);
        },
      },
    },
  });

  //Grafica de citas totales y especie

  const [series2, setSeries2] = useState([
    {
      name: "Perros",
      data: [44, 55, 41, 37, 22, 43, 21],
    },
    {
      name: "Gatos",
      data: [53, 32, 33, 52, 13, 43, 32],
    },
    {
      name: "Conejos",
      data: [12, 17, 11, 9, 15, 11, 20],
    },
    {
      name: "Hurones",
      data: [9, 7, 5, 8, 6, 9, 4],
    },
    {
      name: "Mini piggs",
      data: [25, 12, 19, 32, 25, 24, 10],
    },
  ]);

  const [options2, setOptions2] = useState({
    chart: {
      fontFamily: "Inter",
      type: "bar",
      height: 350,
      stacked: true,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          total: {
            enabled: true,
            offsetX: 0,
            style: {
              fontSize: "13px",
              fontWeight: 900,
            },
          },
        },
      },
    },
    stroke: {
      width: 1,
    },
    xaxis: {
      categories: [
        "Veterinaria 1",
        "Veterinaria 2",
        "Veterinaria 3",
        "Veterinaria 4",
        "Veterinaria 5",
        "Veterinaria 6",
        "Veterinaria 7",
      ],
      labels: {
        formatter: function (val) {
          return val + "K";
        },
      },
    },
    yaxis: {},
    tooltip: {
      y: {
        formatter: function (val) {
          return val + "K";
        },
      },
    },
    fill: {
      opacity: 1,
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
      offsetX: 40,
    },
  });

  //Gráfica Cantidad de mascotas por usuarios

  const [series3, setSeries3] = useState([
    {
      data: [21, 22, 10, 28, 16, 21, 13, 30],
    },
  ]);

  const [options3, setOptions3] = useState({
    chart: {
      fontFamily: "Inter",
      type: "bar",
    },
    plotOptions: {
      bar: {
        borderRadius: 6,
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
      categories: [1, 2, 3, 4, 5, 6, 7, 8],
      labels: {
        style: {
          fontSize: "12px",
        },
      },
    },
  });

  //Gráfica de citas por veterinaria

  const series4 = [421, 772, 523, 281, 652];

  const [options4, setOptions4] = useState({
    chart: {
      type: "polarArea",
    },
    labels: [
      "Veterinaria 1",
      "Veterinaria 2",
      "Veterinaria 3",
      "Veterinaria 4",
      "Veterinaria 5",
    ],
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
      position: "bottom",
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
  });

  //Gráfica

  return (
    <>
      {Mode ? (
        <div className="w-screen h-screen flex">
          <Navbar />

          <div className="flex items-center w-[85%] h-full">
            <div className="w-full h-6/7">
              <div className="h-1/7 flex items-center justify-center text-green text-3xl font-semibold">
                Citas datos
              </div>
              <div className="overflow-y-scroll w-[100%] h-[85%] pl-[1vw] bg-[#fff] first-letter:|">
              <ContainerTwoGraph
              Grahp1={DataEstadistic}
              Grhap2={Graph}
              />
              <ContainerTwoGraph
              Grahp1={Graph}
              Grhap2={Graph}
              />
              <ContainerTwoGraph
              Grahp1={Graph}
              Grhap2={Graph}
              />
              <ContainerTwoGraph
              Grahp1={Graph}
              Grhap2={Graph}
              />
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
