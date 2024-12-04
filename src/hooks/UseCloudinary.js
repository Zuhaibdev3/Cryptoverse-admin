import Cloudinary from '../services/cloudinary.service';

export const useCloudinary = () => {

    const UploadSingleImage = async (ImageFrom) => {
        const response = await Cloudinary.ImageUpload(ImageFrom)
        return response?.data?.data?.imageUrl
    };

    return {
        UploadSingleImage,
    };
};
