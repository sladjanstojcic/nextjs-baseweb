import { ReactNode } from 'react';
import Header from '../Header';

interface Props {
    children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    );
};

export default Layout;
