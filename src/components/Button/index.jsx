import React, { useEffect } from 'react';
import { Button } from 'antd';

export default function (props) {
  const { onClick, icon, type, danger, value, iconStyle } = props;
  const [IconComponent, setIconComponent] = React.useState();

  useEffect(() => {
    async function loadIcon() {
      const loadingIcon = await import('@ant-design/icons');
      setIconComponent(loadingIcon[icon]);
    }
    if (icon) {
      loadIcon();
    }
  }, [icon]);

  return (
    <Button type={type} icon={IconComponent && <IconComponent style={iconStyle} />} danger={danger} onClick={onClick}>
      {value}
    </Button>
  );
}
