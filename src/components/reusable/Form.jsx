import Input from "./Input";
import Button from "./Button";
import Select from "./Select";
import { useForm } from "react-hook-form";
import province from "../../data/province.json";
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
const listProvince = [
    // { value: 1, title: "Bình Thuận" },
    // { value: 2, title: "Hồ Chí Minh" },
    // { value: 3, title: "Đà Nẵng" },
    // { value: 4, title: "Hà Nội" },
];
for (const key in province.VN.divisions) {
    if (Object.hasOwnProperty.call(province.VN.divisions, key)) {
        const pro = province.VN.divisions[key];
        listProvince.push({ value: key, title: pro });
    }
}
function Form() {
    const {
        register,
        getValues,
        // reset,
        setValue,
        handleSubmit,
        formState: { errors },
    } = useForm();
    function onSubmitValid(data) {
        console.log(data);
        // reset("");
    }
    const handleSelect = (val, name) => {
        setValue(name, val, { shouldValidate: true });
    };
    // console.log(errors);
    return (
        <form onSubmit={handleSubmit(onSubmitValid)}>
            <div className="grid grid-cols-2 gap-x-[4.375rem] gap-y-[1.5625rem] text-medium mt-[2.25rem]">
                <Input
                    register={register("name", { required: "Vui lòng điền đầy đủ họ tên" })}
                    type="text"
                    placeholder="Họ và tên của bạn*"
                    err={errors}
                    name={"name"}
                />

                <Select
                    register={register("phase", { required: "Vui lòng chọn 1 lựa chọn" })}
                    title={"Bạn đang ở giai đoạn*"}
                    name={"phase"}
                    list={listPhase}
                    err={errors}
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
                    name="phone"
                    placeholder="Số điện thoại*"
                />
                <Select
                    register={register("province", { required: "Vui lòng chọn 1 lựa chọn" })}
                    title={"Tỉnh thành*"}
                    name={"province"}
                    list={listProvince}
                    err={errors}
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
                    name="email"
                />
                <div className=" flex flex-col">
                    <textarea
                        className={`rounded-[1rem] py-[1.0825rem] px-[1.75rem] ${
                            errors["desire"] ? "outline-red-600" : "outline-primary"
                        } w-full flex-grow`}
                        placeholder="Nhu cầu, mong muốn được hỗ trợ là gì?"
                        rows={1}
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
            </div>
            <Button className={"mt-[3.5rem]"} isRedirect={false}>
                Miễn phí 2 năm
            </Button>
        </form>
    );
}

export default Form;
