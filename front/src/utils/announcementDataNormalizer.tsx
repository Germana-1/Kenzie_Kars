export const announcementDataNormalizer = (data: any) => {
  const announcement = { ...data, images: [] };
  const max_images = 6;

  for (let i = 1; i <= max_images; i++) {
    const image = `image${i}`;

    if (!announcement[image]) break;

    announcement.images.push({
      imgUrl: announcement[`image${i}`],
    });

    delete announcement[`image${i}`];
  }

  return announcement;
};
