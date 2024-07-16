// components/Layout.tsx
import { ReactNode } from 'react';
import NavigationBar from '@/components/Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavigationBar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
