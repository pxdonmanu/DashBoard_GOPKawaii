import axios from "axios";

const req = axios.create({
  baseURL: "https://veterinariamap6iv6-production.up.railway.app/api/v1/",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    "x-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI4MjYxYmEyYi03ZmFiLTRiMTQtYWU5MC1iMWUxNDMwMmE5OGYiLCJpYXQiOjE2ODUwNTM0NTEsImV4cCI6MTY4NTY1ODI1MX0.-EtFKRxB4wriMdX-TJy9Pza7FS7Z_40aJTRGYDqDtxc",
  },
});

export default req;
