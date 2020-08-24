import { useState } from 'react';
import Storage from "@aws-amplify/storage";

Storage.configure({ level: 'private' });

export default function() {
  const [fileList, setFileList] = useState([]);
  const [filesUploaded, setFilesUploaded] = useState([]);

  const onFileChange = event => { 
    console.log('onFileChange - first file in event', event.target.files[0]);
    setFileList({ selectedFile: event.target.files }); 
  }; 

  const onFileUpload = async () => { 
    console.log('onFileUpload running');
    // TODO upload multiple file in one request
    const keysReturned = await Promise.all(Object.keys(fileList.selectedFile).map(async(index) => {
      const eachFile = fileList.selectedFile[index];
      const { key } = await Storage.put(eachFile.name, eachFile, {
        contentType: eachFile.type,
      });
      console.log('Done upload key: ', key);
      return key
    }));
    console.log('keyReturned', keysReturned);
    setFilesUploaded([...filesUploaded, ...keysReturned]);
  }; 

  // 2020-08-14 19_28_04-Google Image Result for https___michitecturedotcom.files.wordpress.com_2015_05_s.png
  const fetchImage = async(name) => {
    const getFile = await Storage.get(name);
    return getFile;
  }

  const fetchImages = async(images) => {
    const imageUrls = await Promise.all(images.map(async(image) => await fetchImage(image)));
    return imageUrls;
  }
  return {onFileChange, onFileUpload, filesUploaded, fetchImages, fetchImage};
}