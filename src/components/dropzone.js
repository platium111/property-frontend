import React, { useCallback, useState } from "react";
import {useDropzone} from 'react-dropzone';
import { API, Auth } from 'aws-amplify';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';

export default function MyDropzone() {
  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ]);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async file => {
    let src = file.url;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  const eventId = "1234";

  return (
    <ImgCrop rotate>
      <Upload
        action={`/events/${eventId}/photos/initiate-upload`}
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
        name="itemImages"
      >
        {fileList.length < 5 && '+ Tải lên'}
      </Upload>
    </ImgCrop>
  )
}