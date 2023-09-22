import { Logo } from "./header/Logo";

export default function Header() {
    return (
        <header className={" bg-[#ababab] flex flex-col justify-center"}>
            {" "}
            {/*#ababab | bg-slate-800*/}
            <Logo />
        </header>
    );
}
