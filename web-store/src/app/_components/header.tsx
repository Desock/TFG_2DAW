import { STRAPI_URL } from "@/lib/strapi";

export function Header({ data }: { readonly data: { MainTitle: string, SubTitle: string, video: { url: string, alternativeText: string } } }) {
    if (!data) return null;

    const { MainTitle, SubTitle } = data;

    const videoURL = data.video?.url.startsWith('http') ? data.video.url : `${STRAPI_URL}${data.video.url}`;

    return (
        <header className="relative h-screen w-full overflow-hidden bg-black mb-5">
            <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
            >
                <source src={videoURL} type="video/webm" />
            </video>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-linear-to-r from-black to-transparent"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-linear-to-l from-black to-transparent"></div>
            <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-linear-to-b from-black to-transparent"></div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-black to-transparent"></div>
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
                <h1 className="text-5xl md:text-7xl font-black text-white drop-shadow-lg">
                    {MainTitle}
                </h1>
                <p className="mt-4 text-lg md:text-2xl text-gray-200 font-semibold drop-shadow">
                    {SubTitle}
                </p>
            </div>
        </header>
    )
}