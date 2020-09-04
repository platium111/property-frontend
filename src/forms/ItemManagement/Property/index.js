// Render Prop
import React, { useContext } from "react";
import { store } from "../../../context/index";
import useUpload from "../../../_hooks/useUpload/index";
import NewItem from "./Property";

export default ({property}) => {
  // const globalState = useContext(store);
  const { onFileChange, onFileUpload, imageUrls } = useUpload(property);

  console.log('property index', property)

  return (
    <NewItem {...property} onFileChange={onFileChange} onFileUpload={onFileUpload} imageUrls={imageUrls}/>);
};
