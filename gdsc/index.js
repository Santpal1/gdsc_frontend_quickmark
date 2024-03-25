const markdownInput = document.getElementById('markdown-input');
const markdownOutput = document.getElementById('markdown-output');

function renderMarkdown() {
    const markdownText = markdownInput.value;
    const htmlText = marked(markdownText);
    const convertedHtmlText = htmlText.replace(/\[([^\]]+)\]\(([^\)]+)\)/g, '<a href="$2">$1</a>');
    markdownOutput.innerHTML = convertedHtmlText;
}

function insertText(text, offset) {
    const start = markdownInput.selectionStart;
    const end = markdownInput.selectionEnd;

    markdownInput.value = markdownInput.value.substring(0, start) + text + markdownInput.value.substring(end);

    markdownInput.selectionStart = markdownInput.selectionEnd = start + offset;
    markdownInput.focus();

    renderMarkdown();
}

renderMarkdown();
markdownInput.addEventListener('input', renderMarkdown);