import { Logo } from "./header/Logo";

export default function Header() {
    return (
        <header className={" bg-tertiary xl:py-[3.125rem] lg:p-[2rem_0_3rem] md:p-[1rem_0_2rem] p-[1rem_0_2rem]"}>
            <Logo />
        </header>
    );
}
