async function summarizeText() {

    let text = document.getElementById("inputText").value;
    let resultDiv = document.getElementById("result");

    if (text === "") {
        resultDiv.innerText = "Please enter some text.";
        return;
    }

    resultDiv.innerText = "Generating summary...";

    try {

        const response = await fetch("https://api.openai.com/v1/responses", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer YOUR_API_KEY"
            },
            body: JSON.stringify({
                model: "gpt-4.1-mini",
                input: `Summarize this text: ${text}`
            })
        });

        const data = await response.json();

        resultDiv.innerText = data.output[0].content[0].text;

    } catch (error) {
        resultDiv.innerText = "Error generating summary.";
        console.log(error);
    }
}