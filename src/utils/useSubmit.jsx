import { useEffect } from "react";
export function useSubmit(data, isSubmitSuccessful) {
    useEffect(() => {
        async function sendData() {
            if (!isSubmitSuccessful) return;
            console.log(data);
            // await fetch("https://api-dev.vimoos.online/landing-page", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify(dataForm),
            // });
        }
        sendData();
    }, [data, isSubmitSuccessful]);
    return [data];
}

// console.log(toNonAccentVietnamese("Bắc Giang")); //Bac Giang
