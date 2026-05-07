
export function Header({ data } : { readonly data: { MainTitle: string, SubTitle: string }}) {
    if (!data) return null;

    const { MainTitle, SubTitle } = data;

    return (
        <header>
            <div className="flex flex-col justify-center items-center bg-linear-to-l from-red-600 from-30% to-red-400 to-60% mb-5">
                <h1 className="text-6xl font-black bg-linear-to-r from-black via-gray-500 to-white bg-clip-text text-transparent">{MainTitle}</h1>
                <p className="text-gray-700 font-bold">{SubTitle}</p>
            </div>
        </header>
    )
}