import { IMessage } from '../redux/authentication/action';

export const parseMessage = (rawData: IMessage) => {
    const messageModel = {
        _id: 0,
        text: '',
        createdAt: Date.now(),
        user: {
            _id: '',
            name: '',
            avatar: '',
        },
        received: false,
    };

    if (!rawData) {
        return messageModel;
    }
    if (rawData.id) {
        messageModel._id = rawData.id;
    }
    if (rawData.message) {
        messageModel.text = rawData.message;
    }

    if (rawData.sourceEnum) {
        messageModel.user._id = rawData.sourceEnum;
    }
    if (rawData.messageDateTime) {
        messageModel.createdAt = rawData.messageDateTime;
    } // THE TIME FOR MESSAGE

    return messageModel;
};

export const parseMessages = (rawData: Array<any>) => {
    const messagesArray: Array<any> = [];
    rawData.forEach(message => {
        messagesArray.push(parseMessage(message));
    });
    return messagesArray;
};
