import React, { useEffect, useState } from "react";
import { Card } from "antd";
import useUpload from "../../_hooks/useUpload/index";
import { AWS_CONFIG } from "../../config";
const { Meta } = Card;

export const PropertyCard = ({property}) => {
  const {description, itemName} = property;
  
  const { fetchImage } = useUpload();
  const [firstImageUrl, setFirstImageUrl] = useState();

  useEffect(() => {
    const fetchImageFn = async () => {
      const firstUrlImage = await fetchImage(
        property.imageUrls[0],
        AWS_CONFIG.PROPERTY_IMAGE_PATH
      );
      setFirstImageUrl(firstUrlImage);
    }

    fetchImageFn();
  }, [property]);

  return (
    <Card
      key={`${property.id}-card`}
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src={firstImageUrl} />}
    >
      <Meta
        title= {itemName}
        description={description}
      />
    </Card>
  );
}

export default function PropertyCards({properties}) {
  return (
    <div>
      {properties &&
        properties.length > 0 &&
        properties.map( (property) => {
          return <PropertyCard key={property.id} property={property}/>
        })}
    </div>
  );
}
