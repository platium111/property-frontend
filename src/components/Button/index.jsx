import React, { useEffect } from 'react';
import { Button } from 'antd';

export default function (props) {
  const { onClick, icon, type, danger } = props;
  const [IconComponent, setIconComponent] = React.useState();

  useEffect(() => {
    async function loadIcon() {
      const loadingIcon = await import('@ant-design/icons');
      setIconComponent(loadingIcon[icon]);
    }
    loadIcon();
  }, []);

  return <Button type={type} icon={IconComponent && <IconComponent />} danger={danger} onClick={onClick} />;
}
