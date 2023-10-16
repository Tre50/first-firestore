import { addArt, getAllArt } from "./src/art.js";

await addArt ({
artist: "Van Gough",
title: "Irisis",
media:"oil",

});

await addArt ({
artist: "Da Vinci",
title: "Last Supper",
media: "oil",

});

await getAllArt();
