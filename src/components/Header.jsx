import { Logo } from "./header/Logo";

export default function Header({ className }) {
    className += " bg-tertiary py-[3.125rem]";
    return (
        <header className={className}>
            <Logo />
        </header>
    );
}
