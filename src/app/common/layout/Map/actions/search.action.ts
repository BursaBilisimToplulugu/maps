'use server';

import { Place } from '@/app/(routes)/dashboard/profile/types/user';
import { instance } from '@/app/core/services/axios';

export const searchAction = async (searchValue: string) => {
  const { data } = await instance.get<Place[]>(`/places/search/${searchValue}`);
  return data;
};
