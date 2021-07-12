import messageRepository from '../data/repositories/MessageRepository';
import chatRepository from '../data/repositories/ChatRepository';

const NEW_MESSAGE_EVENT = 'new-message-event';

export const connect = async (io: any, socket: any) => {
    const { roomId } = socket.handshake.query;
    socket.roomId = roomId;
    socket.join(roomId);
    console.log(`connected to room ${roomId}`);

    const chat = await chatRepository.getById(roomId);
    console.log(chat);
    if (chat == undefined) {
        await chatRepository.create({
            id: roomId,
            name: `Chat #${roomId}`,
        });
    }

    socket.on(NEW_MESSAGE_EVENT, async (data: any) => {
        await messageRepository.create({
            authorId: data['authorId'],
            chatId: data['chatId'],
            text: data['body']
        });
        io.in(roomId).emit(NEW_MESSAGE_EVENT, data);
    });

    socket.on('disconnect', () => {
        socket.leave(roomId);
    });
}