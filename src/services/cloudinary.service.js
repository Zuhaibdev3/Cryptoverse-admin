import instance from "./http.service";

const Cloudinary = {

  ImageUpload: (imageData) => {
    return instance.post('/superadmin/upload/image', imageData);
  }



};
export default Cloudinary;