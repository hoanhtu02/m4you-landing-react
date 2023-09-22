export default function Main({ children }) {
    return (
        <main className="max-w-standard mx-auto grid grid-rows-[repeat(6,minmax(min-content,max-content))] text-medium">
            {children}
        </main>
    );
}
