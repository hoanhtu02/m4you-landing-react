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

function App() {
    return (
        <>
            <Header />
            <Main>
                <Overview />
                <Problem />
                <Solution />
                <Survey />
                <Story />
                <Recap />
            </Main>
            <Footer />
        </>
    );
}

export default App;
