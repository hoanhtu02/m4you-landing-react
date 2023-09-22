function List({ list, title, parentClass }) {
    return (
        <>
            <p className={parentClass}>{title}:</p>

            <ul className="list-inside xl:mt-1 lg:mt-[0.5rem] list-disc md:pl-[1rem] lg:pl-10 pl-4">
                {list.map((val) => (
                    <li key={val}>{val}</li>
                ))}
            </ul>
        </>
    );
}

export default List;
