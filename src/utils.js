export function getImageUrl(imagePath) {
    return imagePath ? `/public/assets/${imagePath}` : "/assets/default.png";
  }
  