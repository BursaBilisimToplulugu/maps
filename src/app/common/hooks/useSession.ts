import { useContext } from 'react';
import { AuthContext } from '../providers/Auth.provider';

export const useSession = () => {
  const { authenticated, session } = useContext(AuthContext);
  return { authenticated, session };
};
