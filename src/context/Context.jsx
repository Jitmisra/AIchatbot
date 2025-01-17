/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import runChat from "../components/config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [responseCache, setResponseCache] = useState({}); // Cache responses
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    const delayPara = (index, nextWord) => {
        setTimeout(() => {
            setResultData((prev) => prev + nextWord);
        }, 75 * index);
    };

    const newChat = () => {
        setLoading(false);
        setShowResult(false);
    };

    const onSent = async (prompt) => {
        setResultData(""); // Reset result data
        setLoading(true);
        setShowResult(true);

        let finalPrompt = prompt || input;

        if (responseCache[finalPrompt]) {
            // Use cached response if it exists
            setResultData(responseCache[finalPrompt]);
            setRecentPrompt(finalPrompt);
            setLoading(false);
            return;
        }

        // Otherwise, fetch a new response
        setPrevPrompts((prev) => [...prev, finalPrompt]);
        setRecentPrompt(finalPrompt);

        let response = await runChat(finalPrompt);

        // Process and cache response
        let responseArray = response.split("**");
        let newResponse = responseArray.map((text, i) =>
            i % 2 === 1 ? `<b>${text}</b>` : text
        ).join("");
        let formattedResponse = newResponse.split("*").join("</br>");
        setResponseCache((prev) => ({ ...prev, [finalPrompt]: formattedResponse })); // Cache response

        let words = formattedResponse.split(" ");
        words.forEach((word, index) => delayPara(index, word + " "));

        setLoading(false);
        setInput(""); // Reset input field
    };

    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        newChat,
    };

    return <Context.Provider value={contextValue}>{props.children}</Context.Provider>;
};

export default ContextProvider;