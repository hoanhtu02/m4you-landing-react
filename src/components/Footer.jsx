export default function Footer() {
    return (
        <footer className="mt-[4rem] bg-tertiary">
            <div className="w-11/12  3xl:w-8/12 4xl:w-6/12 5xl:w-3/12 flex md:flex-row flex-col justify-between mx-auto py-[4.375rem]">
                <div className="lg:w-fit md:w-[fet-content]">
                    <img
                        src="assets/images/logo.png"
                        loading="lazy"
                        className="grayscale mx-auto mb-8"
                        alt="Logo"
                    />
                </div>
                <div className="xl:text-xl lg:text-lg-medium text-base ">
                    <div>
                        <span className="font-bold">Email: </span>
                        <a className="underline-offset-8" href="mailto:support@m4you.vn">
                            support@m4you.vn
                        </a>
                    </div>
                    <div className="mt-3">
                        <span className="font-bold">Facebook: </span>
                        <a className="underline-offset-8" href="https://www.facebook.com/m4you.vn">
                            https://www.facebook.com/m4you.vn
                        </a>
                    </div>
                    <div className="mt-3">
                        <p>© Copyright 2020 M4YOU. All rights reserved.</p>{" "}
                        <p className="mt-1">
                            <span className="font-bold">Address:</span> 189 - 197, Dương Bá Trạc,
                            Phường 1, Quận 8, TP.Hồ Chí Minh
                        </p>{" "}
                        <span className="font-bold">MST: </span>
                        <span>0313175103</span> | <span className="font-bold">Hotline: </span>
                        <a href="tel:1900 252 538">1900 252 538</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
