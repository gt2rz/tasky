
interface AvatarProps {
  image: string;
}

const Avatar = ({ image }: AvatarProps) => {
  return <img className="rounded-full ring ring-black w-8 h-8" src={image} />;
};

export default Avatar;
