import { useRef, useEffect } from "react";
import video5 from "../assets/video5trim.mp4";
import DelayedDiv from "./Hero_content";

function Herovideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.playbackRate = 1.4;
  }, []);

  return (
    <div className="bg-orange-950">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        
        className="object-cover w-screen h-[570px] opacity-[.55] z-10"
      >
        <source src="./src/assets/map.mp4#t=1.000" />
      </video>
      <DelayedDiv />
    </div>
  );
}

export default Herovideo;
