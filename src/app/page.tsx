//import Hero from "@/components/Hero/Hero";

import Main from "@/components/Main/Main";

export default function Home() {
  return (
    <>
      <audio loop autoPlay preload="auto">
          <source src="assets/music/nana.mp3" type="audio/mpeg" />
      </audio>
      <Main />
    </>
  );
}