export type Message = {
    username: string,
    message: string,
    time: string,
};

export type MessageBoard = {
    name: string,
    description: string,
    messages: Message[],
    viewers: string[],
}