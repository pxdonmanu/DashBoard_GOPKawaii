export const Graph = ({ Name }) => {
  return (
    <div className="w-[35vw] h-[45vh] my-[1vh] mx-[3vw] py-[1vh] px-[.5vw] bg-[#dbdbdb] rounded-1/7 text-[#fff] flex items-center justify-center">
      <p className="text-sm text-[#fff]">{Name}</p>
    </div>
  );
};
export const ContainerTwoGraph = ({ Grahp1, Grhap2 }) => {
  return (
    <div className="flex my-[5vh]">
      <Grahp1 />
      <Grhap2 />
    </div>
  );
};
export const DataEstadistic = ({ Type, Data, SubTit }) => {
  return (
    <div className="w-[35vw] h-[45vh] my-[1vh] mx-[3vw] py-[1vh] px-[.5vw] bg-[#dbdbdb] rounded-1/7 grid gap-3 grid-cols-2 grid-rows-2">
      <div className="bg-zinc-300 rounded-1/7 flex justify-center relative ">
        <p className="absolute text-[8vh] opacity-[.3] text-[#6ED4A5] font-black mt-[5vh]">Md</p>
        <h2 className="text-[#6ED4A5]">Mediana</h2>
        <p className="text-gray-600 text-[1vh]">{SubTit}</p>
        <h1>{Data+" "+Type}</h1>
      </div>
      <div className="bg-zinc-300 rounded-1/7 flex justify-center relative ">
        <p className="absolute text-[8vh] opacity-[.3] text-[#6ED4A5] font-black mt-[5vh]">Mo</p>
        <h2 className="text-[#6ED4A5]">Moda</h2>
        <p className="text-gray-600 text-[1vh]">{SubTit}</p>
        <h1>{Data+" "+Type}</h1>
      </div>
      <div className="bg-zinc-300 rounded-1/7 flex justify-center relative flex-col ">
        <p className="absolute text-[8vh] opacity-[.3] text-[#6ED4A5] font-black mt-[5vh]">X̅</p>
        <h2 className="text-[#6ED4A5]">Media</h2>
        e<p className="text-gray-600 text-[1vh] my-[1vh]">{SubTit}</p>
        <h1>{Data+" "+Type}</h1>
      </div>
      <div className="bg-zinc-300 rounded-1/7 flex justify-center relative ">
        <p className="absolute text-[8vh] opacity-[.3] text-[#6ED4A5] font-black mt-[5vh]">CV</p>
        <h2 className="text-[#6ED4A5]">Coeficiente de variación</h2>
        <p className="text-gray-600 text-[1vh]">{SubTit}</p>
        <h1>{Data+" "+Type}</h1>
      </div>
    </div>
  );
};
