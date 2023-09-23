import Button from "./Button";

function SendModal({ openState, defaultModalData }) {
    const [isModalOpened, setIsModalOpened] = openState;

    return (
        <div
            className={`w-full h-full fixed z-[9] ${
                isModalOpened ? "visible opacity-100" : "invisible opacity-0"
            } backdrop-blur-sm  transition-[visibility_500s,_opacity_500s] ease-linear`}
            onClick={function (e) {
                if (e.target !== e.currentTarget) return;
                setIsModalOpened(() => false);
            }}
        >
            <div className="xl:w-auto md:w-8/12 w-10/12 flex flex-col items-center absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] md:pb-12 pb-8 bg-slate-50 rounded-xl shadow-md">
                <img
                    src={`assets/icons/${defaultModalData.icon}-300.gif`}
                    srcSet={`
                        assets/icons/${defaultModalData.icon}-100.gif 100w,
                        assets/icons/${defaultModalData.icon}-150.gif 150w,
                        assets/icons/${defaultModalData.icon}-200.gif 200w,
                        assets/icons/${defaultModalData.icon}-300.gif 300w`}
                    sizes="(max-width: 500px) 50vw,
                        (max-width: 768px) 50vw,
                        (max-width: 1024px) 33.3vw,
                        300px"
                    alt={`${defaultModalData}`}
                />

                <div className="text-center 2xl:px-32 xl:px-32 md:px-14 gap-6 flex flex-col">
                    <h1 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-bold">
                        {defaultModalData.title}
                    </h1>
                    <p className="xl:text-xl lg:text-lg text-base">{defaultModalData.content}</p>
                    <div>
                        <Button
                            isRedirect={false}
                            onOpenModal={function () {
                                setIsModalOpened(() => false);
                            }}
                        >
                            Đóng
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SendModal;
