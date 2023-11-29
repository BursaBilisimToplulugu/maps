import Divider from '@/app/common/components/Divider';
import { PropsWithChildren } from 'react';
import { LuSettings, LuUser } from 'react-icons/lu';
import Logo from './profile/components/Logo';
import MenuButton from './profile/components/MenuButton';

type Props = {} & PropsWithChildren;

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="flex items-stretch">
      <aside className="w-1/5 bg-neutrals-navyWhite flex flex-col">
        <div className="flex justify-center py-8">
          <Logo className="w-3/5" />
        </div>
        <Divider variant="vertical" containerClassName="mx-4" />
        <ul className="py-4 px-2 space-y-2">
          <MenuButton
            url="/dashboard/profile"
            title="Profil"
            icon={<LuUser size={24} />}
          />
          <MenuButton
            url="/dashboard/admin"
            title="Admin"
            icon={<LuSettings size={24} />}
          />
        </ul>
      </aside>
      <main className="flex-1 bg-white min-h-screen overflow-y-scroll shadow-inner">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
