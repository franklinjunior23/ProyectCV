import { TfiAlignRight } from "react-icons/tfi";

export default function Navbar() {
    return (
        <header className="w-screen">
            <div className=" max-w-screen-xl flex m-auto justify-between">
                <div>
                    <a href="">franxx</a>
                </div>
                <div>
                    <TfiAlignRight/>
                </div>
            </div>
        </header>
    )
}
