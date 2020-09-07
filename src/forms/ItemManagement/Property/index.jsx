// Render Prop
import React, { useContext } from "react";
import { store } from "../../../context/index";
import useUpload from "../../../_hooks/useUpload/index";
import NewItem from "./Property";

export default ({property}) => {
  // const globalState = useContext(store);
  const {imageUrls: imagesUrlProps, ...restProps} = property || {};
  const { onFileChange, onFileUpload, imageUrls } = useUpload(property) || {};
  return (
    <NewItem {...restProps} imagesUrlProps={imagesUrlProps} onFileChange={onFileChange} onFileUpload={onFileUpload} imageUrls={imageUrls}/>);
};
