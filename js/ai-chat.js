// AI对话功能
document.addEventListener('DOMContentLoaded', function () {
    const chatMessages = document.getElementById('chatMessages');
    const userInput = document.getElementById('userInput');
    const sendButton = document.getElementById('sendMessage');

    // 打字机效果
    async function typeMessage(element, text) {
        element.textContent = '';
        for (let char of text) {
            element.textContent += char;
            await new Promise(resolve => setTimeout(resolve, 30));
        }
    }

    // 添加消息到聊天界面
    async function addMessage(message, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isUser ? 'user-message' : 'ai-message'}`;
        chatMessages.appendChild(messageDiv);

        if (isUser) {
            messageDiv.textContent = message;
        } else {
            await typeMessage(messageDiv, message);
        }

        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // 发送消息
    async function sendMessage() {
        const message = userInput.value.trim();
        if (message) {
            // 禁用输入和按钮
            userInput.disabled = true;
            sendButton.disabled = true;

            // 添加用户消息
            await addMessage(message, true);
            userInput.value = '';

            // 模拟AI响应
            setTimeout(async () => {
                await addMessage('这是一个模拟的AI响应。在实际应用中，这里需要调用AI API。');
                // 重新启用输入和按钮
                userInput.disabled = false;
                sendButton.disabled = false;
                userInput.focus();
            }, 1000);
        }
    }

    // 发送按钮点击事件
    sendButton.addEventListener('click', sendMessage);

    // 回车键发送消息
    userInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });

    // 添加一些初始消息
    addMessage('你好！我是AI助手，有什么我可以帮你的吗？');

    // 添加输入框焦点效果
    userInput.addEventListener('focus', function () {
        this.parentElement.style.transform = 'scale(1.02)';
    });

    userInput.addEventListener('blur', function () {
        this.parentElement.style.transform = 'scale(1)';
    });
}); 