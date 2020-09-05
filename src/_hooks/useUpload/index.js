import React from "react";
import { useState } from "react";
import Storage from "@aws-amplify/storage";
import { v4 as uuidv4 } from "uuid";
import { AWS_CONFIG } from "../../config";
import {isEmpty} from 'lodash';

export default function (property = {}) {
  const { imageUrls: initialImageUrls } = property;

  const [fileList, setFileList] = useState([]);
  const [filesUploaded, setFilesUploaded] = useState(initialImageUrls); // it is name 312354312312312.png by uuid
  const [imageUrls, setImageUrls] = useState(); // real image url to amazon

  React.useEffect(() => {
    async function getImageFn() {
      const urls = await fetchImages(initialImageUrls);
      setImageUrls(urls);
    }
    initialImageUrls && getImageFn();
  }, []);

  const onFileChange = (event) => {
    console.log("onFileChange - first file in event", event.target.files[0]);
    setFileList({ selectedFile: event.target.files });
  };

  const onFileUpload = async () => {
    console.log("onFileUpload running");
    // TODO upload multiple file in one request
    let keysReturned;
    if (!isEmpty(fileList)) {
      keysReturned = await Promise.all(
        Object.keys(fileList.selectedFile).map(async (index) => {
          const eachFile = fileList.selectedFile[index];
          const fileName = `${uuidv4()}.${eachFile.type.split("/")[1]}`;

          const { key } = await Storage.put(
            `${AWS_CONFIG.PROPERTY_IMAGE_PATH}/${fileName}`,
            eachFile,
            {
              contentType: eachFile.type,
            }
          );
          console.log("Done upload key: ", key?.split("/")[1]);
          return key?.split("/")[1];
        })
      );
      setFilesUploaded(keysReturned);
      console.log("keyReturned", keysReturned);
    }
    const urls = await fetchImages(keysReturned || filesUploaded);
    setImageUrls(urls);
    return keysReturned || filesUploaded;
  };

  /**
   *
   * @param {*} name such as abc.jpg
   * @param {*} path such as property/
   */
  const fetchImage = async (name, path) => {
    const fullPath = path ? `${path}/${name}` : name;
    const getFile = await Storage.get(fullPath);
    return getFile;
  };

  // images ~ name only
  const fetchImages = async (images) => {
    const imageUrls = await Promise.all(
      images.map(
        async (image) => await fetchImage(image, AWS_CONFIG.PROPERTY_IMAGE_PATH)
      )
    );
    return imageUrls;
  };

  return {
    onFileChange,
    onFileUpload,
    filesUploaded,
    fetchImages,
    fetchImage,
    imageUrls,
    setImageUrls,
  };
}
