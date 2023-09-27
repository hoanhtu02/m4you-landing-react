import Header from "./components/Header";
import Main from "./components/Main";
import Overview from "./components/Overview";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import Survey from "./components/Survey";
import Story from "./components/Story";
import Recap from "./components/Recap";
import Footer from "./components/Footer";
import "./index.css";
import { useEffect, useState } from "react";
import SendModal from "./components/reusable/SendModal";

function App() {
    const [isModalOpened, setIsModalOpened] = useState(false);
    const [defaultModalData, setDefaultModalData] = useState({});
    useEffect(() => {
        window.history.scrollRestoration = "manual";
    }, []);
    function onSubmitSuccess() {
        setDefaultModalData(() => {
            return {
                ...{
                    icon: "success",
                    title: "Chúc mừng bạn!",
                    content: "Bạn đã đăng ký thông tin thành công.",
                },
            };
        });
        setIsModalOpened(() => true);
    }
    function onSubmitError(message = null) {
        let errorMessage = "Hệ thống đang gặp vấn đề. Vui lòng thử lại lần sau.";

        if (message === "PHONE_IS_READY") {
            errorMessage = "Thông tin đã được đăng kí. Vui lòng chờ tin mới nhất của chúng tôi.";
        }
        if (message === "EMAIL_IS_READY") {
            errorMessage = "Email này đã được đăng kí. Vui lòng chờ tin mới nhất của chúng tôi.";
        }
        setDefaultModalData(() => ({
            icon: "error",
            title: "Xin lỗi bạn!",
            content: errorMessage + " Cảm ơn bạn!",
        }));

        setIsModalOpened(true);
    }

    return (
        <>
            <Header />
            <Main>
                <Overview />
                <Problem />
                <Solution />
                <Survey onSubmitSuccess={onSubmitSuccess} onSubmitError={onSubmitError} />
                <Story />
                <Recap onSubmitSuccess={onSubmitSuccess} onSubmitError={onSubmitError} />
            </Main>
            <Footer />
            <SendModal
                openState={[isModalOpened, setIsModalOpened]}
                defaultModalData={defaultModalData}
            />
        </>
    );
}

export default App;
