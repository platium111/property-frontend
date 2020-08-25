// Render Prop
import React, { useContext } from "react";
import { store } from "../../context/index";
import useUpload from "../../_hooks/useUpload/index";
import ItemManagement from "./ItemManagement";

export default () => {
  // const globalState = useContext(store);
  const { onFileChange, onFileUpload, imageUrls } = useUpload();

  return (
    <ItemManagement onFileChange={onFileChange} onFileUpload={onFileUpload} imageUrls={imageUrls}/>);
};
