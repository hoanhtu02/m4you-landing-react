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
    function onSubmitError() {
        setDefaultModalData(() => {
            return {
                ...{
                    icon: "error",
                    title: "Xin lỗi bạn!",
                    content:
                        "Hệ thống đang gặp vấn đề. bạn vui lòng thử lại lần sau nhé! Cảm ơn bạn!",
                },
            };
        });
        setIsModalOpened(() => true);
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
