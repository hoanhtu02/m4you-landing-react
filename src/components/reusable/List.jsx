function List({ list, title, parentClass }) {
    return (
        <>
            <p className={parentClass}>{title}:</p>

            <ul className="list-inside text-small  mt-[1.25rem] list-disc pl-[1.75rem]">
                {list.map((val) => (
                    <li key={val}>{val}</li>
                ))}
            </ul>
        </>
    );
}

export default List;
