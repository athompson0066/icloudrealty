"use client";

import { BubbleChat } from 'flowise-embed-react';

export const FlowiseChatbot = () => {
    return (
        <BubbleChat
            chatflowid="6d513d51-e893-486f-86e6-41604ebda382"
            apiHost="https://flowise.aiolosmedia.com"
            theme={{    
                button: {
                    backgroundColor: '#FFA500',
                    right: 20,
                    bottom: 20,
                    size: 48,
                    dragAndDrop: true,
                    iconColor: 'white',
                    customIconSrc: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg',
                    autoWindowOpen: {
                        autoOpen: true,
                        openDelay: 2,
                        autoOpenOnMobile: false
                    }
                },
                tooltip: {
                    showTooltip: true,
                    tooltipMessage: 'Get immediate assistance',
                    tooltipBackgroundColor: 'black',
                    tooltipTextColor: 'white',
                    tooltipFontSize: 16
                },
                disclaimer: {
                    title: 'Disclaimer',
                    message: "By using this chatbot, you agree to the <a target=\"_blank\" href=\"https://flowiseai.com/terms\">Terms & Condition</a>",
                    textColor: 'black',
                    buttonColor: '#3b82f6',
                    buttonText: 'Start Chatting',
                    buttonTextColor: 'white',
                    blurredBackgroundColor: 'rgba(0, 0, 0, 0.4)',
                    backgroundColor: 'white'
                },
                customCSS: ``,
                chatWindow: {
                    showTitle: true,
                    showAgentMessages: false,
                    title: 'Jackie\'s Property Team',
                    titleAvatarSrc: 'https://images.vexels.com/media/users/3/132365/isolated/preview/c6240aab36e035b201905d5562305186-unterstuetzungskreissymbol.png',
                    welcomeMessage: 'Hi there! I am Ava, your personal real estate assistant. 👋\n\nI am here to help you find the perfect property in the GTA! Whether you are looking for your dream home, an investment opportunity, or just want to explore what is on the market, I can search listings, provide property details, and connect you with Jackie for personalized service. What type of property are you looking for today?',
                    errorMessage: 'This is a custom error message',
                    backgroundColor: '#ffffff',
                    backgroundImage: '',
                    height: 550,
                    width: 500,
                    fontSize: 16,
                    starterPrompts: [],
                    starterPromptFontSize: 15,
                    clearChatOnReload: false,
                    sourceDocsTitle: 'Sources:',
                    renderHTML: true,
                    botMessage: {
                        backgroundColor: '#f7f8ff',
                        textColor: '#303235',
                        showAvatar: true,
                        avatarSrc: 'https://i0.wp.com/www.splento.com/blog/wp-content/uploads/2024/10/confident-young-african-american-business-woman-in-2024-04-26-18-20-12-utc-scaled.jpg?ssl=1'
                    },
                    userMessage: {
                        backgroundColor: '#3B81F6',
                        textColor: '#ffffff',
                        showAvatar: true,
                        avatarSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppkoKsaYMuIoNLDH7O8ePOacLPG1mKXtEng&s'
                    },
                    textInput: {
                        placeholder: 'Type your question',
                        backgroundColor: '#ffffff',
                        textColor: '#303235',
                        sendButtonColor: '#FFA500',
                        maxChars: 50,
                        maxCharsWarningMessage: 'You exceeded the characters limit. Please input less than 50 characters.',
                        autoFocus: true,
                        sendMessageSound: true,
                        sendSoundLocation: 'send_message.mp3',
                        receiveMessageSound: true,
                        receiveSoundLocation: 'receive_message.mp3'
                    },
                    feedback: {
                        color: '#303235'
                    },
                    dateTimeToggle: {
                        date: true,
                        time: true
                    },
                    footer: {
                        textColor: '#303235',
                        text: 'Powered by',
                        company: 'Aiolos Media',
                        companyLink: 'https://aiolosmedia.com'
                    }
                }
            }}
        />
    )
}