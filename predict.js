let model;
let webcam;
const URL = "model/";

async function loadModel() {
  if (model) return;

  model = await tmImage.load(
    URL + "model.json",
    URL + "metadata.json"
  );

  webcam = new tmImage.Webcam(224, 224, true);
  await webcam.setup();
  await webcam.play();
}

async function predictFromCamera() {
  await loadModel();

  webcam.update();
  const predictions = await model.predict(webcam.canvas);

  console.log(predictions);

const recyclable = predictions.find(
  p => p.className.toLowerCase() === "recycleable"
);

const nonRecyclable = predictions.find(
  p => p.className.toLowerCase() === "non-recycleable"
);

const THRESHOLD = 0.80;

if (recyclable && recyclable.probability >= THRESHOLD) {
  return `Recyclable (${(recyclable.probability * 100).toFixed(2)}%)`;
}

if (nonRecyclable && nonRecyclable.probability >= THRESHOLD) {
  return `Non-Recyclable (${(nonRecyclable.probability * 100).toFixed(2)}%)`;
}

const best = recyclable.probability > nonRecyclable.probability
  ? recyclable
  : nonRecyclable;

return `Uncertain (${(best.probability * 100).toFixed(2)}%)`;

}
