import Input from "./Input";
import Button from "./Button";
import Select from "./Select";
import { useForm } from "react-hook-form";
// import province from "../../data/province.json";
import { useState } from "react";
import { useEffect } from "react";
const listPhase = [
    {
        value: "1",
        title: "Đi làm dưới 5 năm",
    },
    {
        value: "2",
        title: "Đi làm trên 5 năm",
    },
    {
        value: "3",
        title: "Có con nhỏ từ 5 tuổi",
    },
];
// const listProvince = [
//     // { value: 1, title: "Bình Thuận" },
//     // { value: 2, title: "Hồ Chí Minh" },
//     // { value: 3, title: "Đà Nẵng" },
//     // { value: 4, title: "Hà Nội" },
// ];
// for (const key in province.VN.divisions) {
//     if (Object.hasOwnProperty.call(province.VN.divisions, key)) {
//         const pro = province.VN.divisions[key];
//         listProvince.push({ value: key, title: pro });
//     }
// }
function getProvinceWithoutPrefix(fullName) {
    return fullName
        .split(/(Thành phố|Tỉnh)/g)
        .at(2)
        .trim();
}
function Form() {
    const {
        register,
        getValues,
        reset,
        setValue,
        handleSubmit,
        formState: { errors, isSubmitSuccessful },
    } = useForm();
    const [dataForm, setDataForm] = useState({});
    const [listProvince, setListProvince] = useState([]);
    useEffect(() => {
        async function fetchProvince() {
            try {
                const response = await fetch("https://vapi.vnappmob.com/api/province");
                if (!response.ok) return;
                const data = await response.json();
                let temp = [];
                data.results.forEach((province) => {
                    temp.push({
                        value: province.province_id,
                        title: getProvinceWithoutPrefix(province.province_name),
                    });
                });
                setListProvince(() => [...temp]);
                // console.log(object);
            } catch (err) {
                alert(err);
            }
        }
        fetchProvince();
    }, [dataForm]);

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset({
                name: "",
                email: "",
                phone: "",
                phase: "",
                provinceName: "",
                desire: "",
            });
        }
    }, [isSubmitSuccessful, reset]);
    function onSubmitValid(data) {
        data.landingPageType = "INFO";
        console.log(data);
        setDataForm(data);
        fetch("https://api-dev.vimoos.online/api/landing-page", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then();
        reset("", { keepValues: false });
    }
    const handleSelect = (val, name) => {
        setValue(name, val, { shouldValidate: true });
    };
    // console.log(errors);
    return (
        <form onSubmit={handleSubmit(onSubmitValid)}>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:gap-x-[4rem] lg:gap-x-[3.5rem] sm:gap-y-[1.4rem] md:gap-x-[3rem] ssm:gap-y-3 xl:text-lg md:text-sm lg:text-base text-base mt-[2rem] items-start">
                <Input
                    register={register("name", { required: "Vui lòng điền đầy đủ họ tên" })}
                    type="text"
                    placeholder="Họ và tên của bạn*"
                    err={errors}
                    name={"name"}
                    className={"order-1 md:order-none "}
                />

                <Select
                    register={register("phase", { required: "Vui lòng chọn 1 lựa chọn" })}
                    title={"Bạn đang ở giai đoạn*"}
                    name={"phase"}
                    list={listPhase}
                    err={errors}
                    className={"order-4 md:order-none"}
                    formState={[getValues, handleSelect]}
                />
                <Input
                    register={register("phone", {
                        required: "Vui lòng nhập vào số điện thoại",
                        pattern: {
                            value: /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/g,
                            message: "Số điện thoại không hợp lệ",
                        },
                    })}
                    type="text"
                    err={errors}
                    className={"order-2 md:order-none"}
                    name="phone"
                    placeholder="Số điện thoại*"
                />
                <Select
                    register={register("provinceName", { required: "Vui lòng chọn 1 lựa chọn" })}
                    title={"Tỉnh thành*"}
                    name={"provinceName"}
                    list={listProvince}
                    err={errors}
                    className={"order-5 md:order-none"}
                    formState={[getValues, handleSelect]}
                />
                <Input
                    register={register("email", {
                        required: "Vui lòng điền email của bạn",
                        pattern: {
                            value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                            message: "Email không hợp lệ",
                        },
                    })}
                    type="text"
                    placeholder="Email*"
                    err={errors}
                    className={"order-3 md:order-none"}
                    name="email"
                />
                <div className=" flex flex-col order-6 md:order-none md:col-start-2 md:col-end-3 md:row-start-3 md:row-end-5">
                    <textarea
                        className={`xl:rounded-[1rem] lg:rounded-[0.8rem] rounded-[0.4rem]  xl:py-[1.0825rem] xl:px-[2.75rem]  lg:py-[0.8rem] lg:pl-[1.8rem] lg:pr-[0.8rem]  md:px-[1.5rem] md:py-[.5rem]  px-[1rem] py-[0.5rem] ${
                            errors["desire"] ? "outline-red-600" : "outline-primary"
                        } w-full`}
                        placeholder="Nhu cầu, mong muốn được hỗ trợ là gì?"
                        rows={4}
                        {...register("desire", { required: "Trường này không được để trống" })}
                    ></textarea>
                    {errors["desire"] ? (
                        <span className={`text-red-600 font-[400] text-[0.85rem] py-2`}>
                            {errors["desire"].message}
                        </span>
                    ) : (
                        ""
                    )}
                </div>

                {/* TODO: CÒN SỬA PHẦN BUTTON DANH CHO MÀN HÌNH MD VÀ SM */}
                <div className="ssm:col-start-1 ssm:col-end-2 ssm:row-start-7 ssm:row-end-8 md:!col-start-1 md:!col-end-2 md:!row-start-4  md:!row-end-5 ">
                    <Button className={""} isRedirect={false}>
                        Miễn phí 2 năm
                    </Button>
                </div>
            </div>
        </form>
    );
}

export default Form;
