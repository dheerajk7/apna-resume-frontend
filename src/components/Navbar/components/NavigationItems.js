import { Menu } from 'antd';

function NavigationItems() {
  const items = [
    { label: 'item 1', key: 'item-1' }, // remember to pass the key prop
    { label: 'item 2', key: 'item-2' }, // which is required
    {
      label: 'sub menu',
      key: 'submenu',
      children: [{ label: 'item 3', key: 'submenu-item-1' }],
    },
  ];
  return <Menu mode="horizontal" items={items} />;
}

export default NavigationItems;
