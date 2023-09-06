import Image from "next/image";
import { useState } from "react";
import { signIn } from "next-auth/react";


const GoogleButton = () => {
  const [imageSrc, setImageSrc] = useState("/auth/google/btn_google_normal.svg");
  return (
    <Image
      onClick={() => {
        setImageSrc("/auth/google/btn_google_pressed.svg");
        signIn("google");
      }}
      className="m-auto my-4 cursor-pointer"
      onMouseEnter={() => setImageSrc("/auth/google/btn_google_focus.svg")}
      onMouseLeave={() => setImageSrc("/auth/google/btn_google_normal.svg")}
      src={imageSrc}
      alt={"Sign in with google"}
      width={199}
      height={48}
      priority
    />

  )
};

export default GoogleButton;