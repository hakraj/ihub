import Image from "next/image";
import { useState } from "react";
import { signIn } from "next-auth/react";


const GoogleButton = () => {
  const [imageSrc, setImageSrc] = useState("/google/btn_google_normal.svg");
  return (
    <Image
      onClick={() => {
        setImageSrc("/google/btn_google_pressed.svg");
        signIn("google");
      }}
      className="m-auto my-4 cursor-pointer"
      onMouseEnter={() => setImageSrc("/google/btn_google_focus.svg")}
      onMouseLeave={() => setImageSrc("/google/btn_google_normal.svg")}
      src={imageSrc}
      alt={"Signin with google"}
      width={199}
      height={48}
    />

  )
};

export default GoogleButton;