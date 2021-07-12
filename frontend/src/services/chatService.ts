import { useEffect, useRef, useState } from 'react';
import socketIOClient from 'socket.io-client';
import { IMessage } from 'common/models';
import { callAPI } from 'common/helpers';

const NEW_MESSAGE_EVENT = 'new-message-event';
const SOCKET_SERVER_URL = 'http://localhost:3001';

export const useChatRoom: any = roomId => {
	const [messages, setMessages] = useState([]);
	const socketRef: any = useRef();

	useEffect(() => {
		socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
			query: { roomId }
		});

		socketRef.current.on(NEW_MESSAGE_EVENT, message => {
			const incomingMessage = {
				...message
			};
			// eslint-disable-next-line @typescript-eslint/no-shadow
			setMessages(messages => [...messages, incomingMessage]);
		});

		return () => {
			socketRef.current.disconnect();
		};
	}, [roomId]);

	const sendMessage = messageBody => {
		socketRef.current.emit(NEW_MESSAGE_EVENT, {
			body: messageBody,
			chatId: roomId,
			authorId: roomId
		});
	};

	return { messages, sendMessage };
};

export const getMessagesByChatId = async ({ id }: { id: number }): Promise<IMessage> => {
	const response = await callAPI({
		endpoint: `/messages`,
		queryParams: {
			chatId: id
		},
		type: 'GET'
	});
	return response.json();
};
