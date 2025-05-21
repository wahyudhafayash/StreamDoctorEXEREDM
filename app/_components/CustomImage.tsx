import Image, { ImageProps } from "next/image";

const customLoader = ({ src }: { src: string }) => src;

const CustomImage = (props: ImageProps) => {
  const { alt = "", ...rest } = props;

  return (
    <Image
      loader={customLoader}
      unoptimized
      className="w-full h-full object-cover"
      alt={alt}
      {...rest}
    />
  );
};

export default CustomImage;
