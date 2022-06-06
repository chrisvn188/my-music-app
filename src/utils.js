import { v4 as uuidv4 } from "uuid";

export const getSongs = () => {
  return [
    {
      id: uuidv4(),
      name: "Night Fishing",
      artist: "C Y G N",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/03/1a32362ec1ba749448678975a905ae2b66caf80f-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=31591",
      color: ["#446B3F", "#424C4A"],
      active: true,
    },
    {
      id: uuidv4(),
      name: "Way Back When",
      artist: "Parkbench Epiphany",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/11/4c9682ee612a3b8ef51de286c49b5489408e9257-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=27502",
      color: ["#F6A3A4", "#537080"],
      active: false,
    },
    {
      id: uuidv4(),
      name: "Polaroid",
      artist: "Mama Aiuto, Makzo",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/09/501327d9a200bed56717f5f4a0fa7e4517c491c9-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=24767",
      color: ["#809CA6", "#C2D8E1"],
      active: false,
    },
    {
      id: uuidv4(),
      name: "Hung Up",
      artist: "Ezzy",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/09/dc49d7971512be0192848d072efdaaab91a4c73c-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=24699",
      color: ["#D64746", "#FEA76F"],
      active: false,
    },
    {
      id: uuidv4(),
      name: "Reunion",
      artist: "Stan Forebee",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/01/f8a2b91e3d3862dc91cd27e3f82ddc089c0ccd58-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=30137",
      color: ["#ACC1AF", "#B1A8B5"],
      active: false,
    },
    {
      id: uuidv4(),
      name: "Ending",
      artist: "Relyae, sadtoi",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/01/0ac63dcdc4e16e6bb979f6ea2c9d0a394ee9e386-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=28969",
      color: ["#83679D", "#65A8BC"],
      active: false,
    },
    {
      id: uuidv4(),
      name: "La Zona",
      artist: "Maydee",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/11/3ff29a35be582c8dc0222273cb9c401ea6b209dc-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=27455",
      color: ["#622D25", "#6A5834"],
      active: false,
    },
    {
      id: uuidv4(),
      name: "Two Thousand Miles",
      artist: "Aviino",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/09/a2d710149876c8e0c9fb097840b2438fbc21bd37-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=23314",
      color: ["#C66D3B", "#6A4841"],
      active: false,
    },
  ];
};

export const formatTime = (time) => {
  return Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2);
};

export const checkIndex = (array, index) => {
  if (index >= array.length) {
    return 0;
  } else if (index < 0) {
    return array.length - 1;
  }
  return index;
};

export const randomNumberInRange = (range) => {
  return Math.floor(Math.random() * range);
};
