
export default function Navbar() {
    return (
        <div className="w-full flex justify-between items-center h-[71px] px-[90px]">
            <a href="" className="text-xl font-semibold">@Jonelbars</a>

            <label
                className="relative h-8 w-[35px] cursor-pointer [-webkit-tap-highlight-color:_transparent]"
                htmlFor="switch"
            >
                <input className="peer sr-only" id="switch" type="checkbox" />

                <span className="absolute inset-0 m-auto h-[11px] rounded-full bg-[#D9D9D9]"></span>

                <span
                    className="absolute inset-y-0 start-0 m-auto size-5 rounded-full bg-[#252525] transition-all peer-checked:start-4 peer-checked:[&amp;_>_*]:scale-0"
                >
                </span>
            </label>

        </div>
    );
}
