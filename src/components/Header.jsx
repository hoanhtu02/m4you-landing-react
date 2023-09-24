import { Logo } from "./header/Logo";

export default function Header() {
    return (
        <header className={""}>
            {" "}
            {/*#ababab | bg-slate-800*/}
            <div className="max-w-standard flex flex-col justify-center mx-auto">
                <Logo />
            </div>
        </header>
    );
}
