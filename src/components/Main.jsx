export default function Main({ children }) {
    return (
        <main className="grid grid-rows-[repeat(6,minmax(min-content,max-content))] text-medium">
            {children}
        </main>
    );
}
