import { AppNavBar, NavItem, setItemActive } from 'baseui/app-nav-bar';
import { ChevronDown, Delete, Overflow, Upload } from 'baseui/icon';
import { useState } from 'react';

const Header: React.FC = () => {
    const [mainItems, setMainItems] = useState<NavItem[]>([
        { icon: Upload, label: 'Main A' },
        {
            active: true,
            icon: ChevronDown,
            label: 'Main B',
            navExitIcon: Delete,
        },
    ]);
    return (
        <AppNavBar
            title="Title"
            mainItems={mainItems}
            onMainItemSelect={(item) => {
                setMainItems((prev) => setItemActive(prev, item));
            }}
            username="Umka Marshmallow"
            usernameSubtitle="5 Stars"
            userItems={[
                { icon: Overflow, label: 'User A' },
                { icon: Overflow, label: 'User B' },
            ]}
            onUserItemSelect={(item) => console.log(item)}
        />
    );
};

export default Header;
