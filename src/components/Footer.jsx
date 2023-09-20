export default function Footer() {
    return (
        <footer className="mt-[4rem] bg-tertiary">
            <div className="w-10/12 flex mx-auto py-[4.375rem] gap-[5rem]">
                <img
                    src="src/assets/images/logo.png"
                    loading="lazy"
                    className="grayscale"
                    alt="Logo"
                />
                <div className="text-medium">
                    <div>
                        <span className="font-bold">Email: </span>
                        <a href="mailto:support@m4you.vn">support@m4you.vn</a>
                    </div>
                    <div>
                        <span className="font-bold">Facebook: </span>
                        <a href="https://www.facebook.com/m4you.vn">
                            https://www.facebook.com/m4you.vn
                        </a>
                    </div>
                    <div>
                        <p>© Copyright 2020 M4YOU. All rights reserved.</p>{" "}
                        <p>Address: 189 - 197, Dương Bá Trạc, Phường 1, Quận 8, TP.Hồ Chí Minh</p>{" "}
                    </div>
                    <div>
                        <span className="font-bold">MST: </span>
                        <span>0313175103</span> | <span className="font-bold">Hotline: </span>
                        <a href="tel:1900 252 538">1900 252 538</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
