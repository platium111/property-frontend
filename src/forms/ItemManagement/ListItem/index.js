import React from "react";
import { Input } from 'antd';

const { Search } = Input;

const FIND_PROPERTY = "Tìm kiếm đồ";
const FIND_BUTTON = "Tìm kiếm";

export default function(props) {
  return (
    <div>
      <Search
      placeholder={FIND_PROPERTY}
      enterButton={FIND_BUTTON}
      size="large"
      onSearch={value => console.log(value)}
    />
    </div>
  )
}