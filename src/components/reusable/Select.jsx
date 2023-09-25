/* eslint-disable no-unused-vars */
import { useCallback } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toLowerCaseNonAccentVietnamese } from "../../utils/toLowerCaseNoneAccentVie";

function Select({ className, name, title, list = [], formState, register, err, tabIndex }) {
    const [isFocus, setIsFocus] = useState(false);
    const [getValues, handleSelect] = formState;
    const value = getValues(name);
    // console.log(value);
    const [filterList, setFilterList] = useState([]);
    function onInput(e) {
        const filter = e.currentTarget.value;
        setFilterList(() => [
            ...list.filter(
                (val) =>
                    val.title.startsWith(filter) ||
                    val.title.toLowerCase().startsWith(filter.toLowerCase()) ||
                    toLowerCaseNonAccentVietnamese(val.title).startsWith(
                        toLowerCaseNonAccentVietnamese(filter)
                    )
            ),
        ]);
        setIsFocus(true);
    }
    return (
        <div className={`${className} `}>
            <div className={`relative`}>
                <input
                    {...register}
                    onInput={onInput}
                    tabIndex={tabIndex}
                    readOnly={name === "provinceName" ? false : true}
                    className={`lg:rounded-[1rem]  xl:py-[1.0825rem] xl:px-[2.75rem] rounded-[0.4rem]  lg:py-[0.8rem] lg:px-[2rem]  md:px-[1.5rem] md:py-[.5rem]  px-[1rem] py-[0.5rem]  ${
                        err[name] ? "outline-red-600" : "outline-primary"
                    } w-full bg-white ${!value ? "text-[#a9a3af]" : ""}`}
                    onClick={(e) => {
                        setIsFocus(() => true);
                    }}
                    onBlur={(e) => {
                        setIsFocus(() => false);
                        setFilterList(() => []);
                    }}
                    placeholder={title}
                />
                <img
                    src="assets/icons/down.png"
                    alt="Explain"
                    className="absolute w-4 xl:top-[45%] lg:top-[40%] top-[38%] left-[90%] opacity-40"
                    onClick={(e) => {
                        e.currentTarget.parentElement.querySelector("input").focus();
                        setIsFocus(() => true);
                    }}
                />
                <ul
                    className={`absolute top-full bg-white w-full ${
                        isFocus ? `flex z-20` : "invisible"
                    } rounded-[1rem] flex-col  left-0 shadow-lg ${
                        name === "phase" ? "" : "h-[15rem]"
                    } gap-y-0 overflow-y-scroll overflow-x-hidden`}
                    onMouseDown={(e) => {
                        const valueLi = e.target.getAttribute("value") || e.target.value;
                        if (!valueLi) return;
                        const obj = list.find((val) => val.value === valueLi);
                        handleSelect(obj.title, name);
                        setFilterList(() => []);
                    }}
                >
                    {(() => (filterList.at(0) ? filterList : list))().map((val, idx) => (
                        <li
                            key={idx}
                            value={val.value}
                            className=" xl:py-[1.0825rem] xl:px-[2.75rem]  lg:py-[0.8rem] lg:px-[2rem] md:h-[3.75rem]  px-[1rem] py-[0.5rem] hover:bg-tertiary cursor-pointer  flex-[0_0_auto]"
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
