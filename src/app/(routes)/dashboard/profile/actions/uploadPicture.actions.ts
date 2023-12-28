'use server';
import { instance } from '@/app/core/services/axios';

export const uploadPictureAction = async (imageData: any) => {
  try {
    const { data } = await instance.patch(
      '/users/update-profile-picture',
      imageData,
      { headers: { 'Content-Type': 'multipart/form-data' } }
    );
    console.log({ data });
  } catch (error: any) {
    console.log(error.response.data);
  }
};
