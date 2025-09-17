import { Play } from 'lucide-react';

export default function Video() {
  return (
    <div className="relative my-30 flex justify-center">
      <div className="h-79 w-76 rounded-lg bg-[url(/images/aboutvideo.jpg)] bg-cover bg-center md:h-135 md:w-247"></div>
      <div className="bg-primary-color absolute top-1/2 left-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full md:h-23 md:w-23">
        <Play
          size={window.innerWidth < 768 ? 20 : 30}
          className="fill-white text-white"
        />
      </div>
    </div>
  );
}
