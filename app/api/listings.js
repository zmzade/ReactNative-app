import client from "./client";

const endpoint = "/listings";

const getListings = () => client.get(endpoint);
const addLinsting = (listing, onUploadProgress) => {
  //we need content-type:multipart/form-data
  //we create a Formdata object in javascript, by this apisauce will internally make the header to multipart/form-data
  const data = new FormData();
  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("categoryId", listing.category.value);
  data.append("description", listing.description);
  listing.images.forEach((image, index) => {
    data.append("images", {
      name: "image" + index,
      type: "image/jpeg",
      uri: image,
    });
  });
  if (listing.location)
    //we should serialize the location object as json
    data.append("location", JSON.stringify(listing.location));
  // tracking upload progress
  return client.post(endpoint, data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
};

export default {
  addLinsting,
  getListings,
};
