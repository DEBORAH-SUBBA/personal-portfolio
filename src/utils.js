export function getImageUrl(imagePath) {
    return imagePath ? `/assets/${imagePath}` : "/assets/default.png";
  }
  