import video from './../../../assets/MainVideo.mp4';

export default function VideoComponent() {
    return (
        <div className="relative w-full max-w-[1400px] mx-auto">
            <div className="rounded-2xl absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-50"></div>

            <video className="w-full rounded-2xl" loop autoPlay muted style={{boxShadow: '0px 6px 60px gray'}}>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
      </div>
    );
}