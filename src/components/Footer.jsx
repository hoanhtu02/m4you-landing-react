export default function Footer() {
    return (
        <footer className="mt-[4rem] bg-tertiary">
            <div className="flex ssm:mx-[1rem] md:px-[1.5rem] md:flex-row flex-col xl:justify-evenly xl:gap-0 lg:gap-9 justify-center items-center mx-auto p-[3rem_0]">
                <div className="lg:w-fit md:w-1/3">
                    <img
                        src="assets/images/logo_bottom.png"
                        loading="lazy"
                        className="mx-auto mb-8 xl:w-auto lg:w-2/3 w-2/4"
                        alt="Logo"
                    />
                </div>
                <div className="xl:text-xl lg:text-lg-medium sm:text-base ssm:text-sm flex flex-col sm:gap-2 ssm:gap-[.1rem]">
                    <div className="flex justify-between items-center">
                        <p>
                            <span className="font-bold">Email: </span>
                            <a className="underline-offset-8" href="mailto:support@m4you.vn">
                                support@m4you.vn
                            </a>
                        </p>

                        <a href="https://www.facebook.com/m4you.vn" className="">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width="50"
                                height="50"
                                viewBox="0 0 48 48"
                            >
                                <path
                                    fill="#3F51B5"
                                    d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                                ></path>
                                <path
                                    fill="#FFF"
                                    d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"
                                ></path>
                            </svg>
                        </a>
                    </div>
                    <div className="">
                        <p>
                            <span className="font-bold">Địa chỉ:</span> 189 - 197, Dương Bá Trạc,
                            Phường 1, Quận 8, TP.Hồ Chí Minh
                        </p>{" "}
                    </div>
                    <p>
                        <span className="font-bold">Mã số thuế: </span>
                        <span>0317950057</span> | <span className="font-bold">Điện thoại: </span>
                        <a href="tel:1900 252 538">0398 162 946</a>
                    </p>
                    <p className="">
                        <span className="font-bold">©</span> Copyright 2020{" "}
                        <span className="font-bold">M4YOU</span>. All rights reserved.
                    </p>{" "}
                </div>
            </div>
        </footer>
    );
}
