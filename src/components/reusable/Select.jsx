import { useState } from "react";
// ...

function Select({ className, name, title, list = [], formState, register, err }) {
    const [isFocus, setIsFocus] = useState(false);
    const [placeholder, setPlaceholder] = useState("");
    // const [value, setValue] = useState("");
    const [getValues, setValue] = formState;
    let value = getValues(name);
    const handleSelect = (val) => {
        console.log(val);
        // setValue(val.value);
        setValue(name, val.value, { shouldValidate: true });
        setPlaceholder(() => val.title);
        setIsFocus(false);
    };
    return (
        <div>
            <div className="relative">
                {/* <input {...register} type="text" className="invisible absolute" value={value} /> */}
                <input
                    {...register}
                    readOnly={true}
                    className={`${className ?? ""} rounded-[1rem] py-[1.0825rem] ${
                        err[name] ? "outline-red-600" : "outline-primary"
                    } px-[2.75rem] w-full bg-white ${!value ? "text-[#a9a3af]" : ""}`}
                    onClick={() => {
                        setIsFocus(() => true);
                    }}
                    onBlur={() => {
                        setIsFocus(() => false);
                    }}
                    placeholder={title}
                    value={placeholder}
                />
                <img
                    src="src/assets/icons/down.png"
                    alt="Giải thích"
                    className="absolute top-[45%] left-[90%] opacity-40"
                />
                <ul
                    className={`absolute top-full bg-white w-full ${
                        isFocus ? `flex z-20` : "invisible"
                    } rounded-[1rem] flex-col  left-0 shadow-lg h-[15rem] gap-y-0 overflow-y-scroll overflow-x-hidden`}
                    onMouseDown={(e) => {
                        // console.log("Clicked target:", e.target.tagName);
                        console.dir(e.target);
                        const valueLi = e.target.value;
                        if (!valueLi) return;
                        const value = list.find((val) => val.value === valueLi);
                        // console.log(value);
                        handleSelect(value);
                    }}
                >
                    {list.map((val, idx) => (
                        <li
                            key={idx}
                            value={val.value}
                            className="py-[1.0825rem] px-[2.75rem] basis-full h-[60px] hover:bg-tertiary cursor-pointer"
                        >
                            {val.title}
                        </li>
                    ))}
                </ul>
            </div>
            {err[name] ? (
                <span className={`text-red-600 font-[400] text-[0.85rem]`}>
                    {err[name].message}
                </span>
            ) : (
                ""
            )}
        </div>
    );
}
export default Select;
