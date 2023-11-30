export interface Place {
  name: string;
  longitude: number;
  latitude: number;
  open_address: string;
  rating: number;
  photos: Photo[];
  comments: Comment[];
  id: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}

export interface Photo {
  url: string;
  place: string;
  id: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}

export interface Comment {
  text: string;
  rating: number;
  can_delete: boolean;
  user: User;
  place: string;
  id: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}

export interface User {
  full_name: string;
  email: string;
  password: string;
  phone: string;
  access_token: string;
  picture_url: string;
  role: string;
  comments: string[];
  id: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}
