export const fetchAllDigimon = async () => {
  try {
    const fetchUrl = await fetch('https://digimon-api.vercel.app/api/digimon');
    const response = await fetchUrl.json();
    return response;
  } catch (e) {
    console.log(e);
  }
};

export const fetchDigimonByName = async (nameDigimon) => {
  try {
    const fetchUrl = await fetch(`https://digimon-api.vercel.app/api/digimon/name/${nameDigimon}`);
    const response = await fetchUrl;
    return response;
  } catch (e) {
    console.log(e);
  }
};

export const fetchDigimonByLevel = async (levelDigimon) => {
  try {
    const fetchUrl = await fetch(`https://digimon-api.vercel.app/api/digimon/level/${levelDigimon}`);
    const response = await fetchUrl.json();
    return response;
  } catch (e) {
    console.log(e);
  }
};
