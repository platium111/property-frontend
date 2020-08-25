export function buildGalleryPhotos(imagesSrc) {
  return imagesSrc.map((src) => ({
    src: src,
    width: 4,
    height: 3,
    sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
  }));
}

function getRandomInt(min, max) {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
}
