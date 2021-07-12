import React, { useRef, useState, useEffect, FunctionComponent } from 'react';
import { Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'common/types';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';

import { useChatRoom } from '../../../../services/chatService';
import { SendMessageIcon } from 'components';
import { getMessagesRoutine } from '../chatRoutines';
import MessageBody from './components/MessageBody';

const Chat: FunctionComponent = () => {
	const dispatch = useDispatch();
	const userData = useSelector((state: RootState) => state.viewer.viewer);
	const previousMessages = useSelector((state: RootState) => state.messages.message);
	const { messages, sendMessage } = useChatRoom(userData.id);
	const [newMessage, setNewMessage] = useState('');
	const messageRef: any = useRef();

	useEffect(() => {
		dispatch(getMessagesRoutine.trigger({ id: userData.id }));
	}, [userData.id, dispatch]);

	const handleNewMessageChange = event => {
		setNewMessage(event.target.value);
	};

	const handleSendMessage = () => {
		if (newMessage !== '') {
			sendMessage(newMessage);
			setNewMessage('');
		}
	};

	// extra code to send the message as you press the enter key.
	const handleKeyUp = event => {
		if (event.key === 'Enter') {
			if (newMessage !== '') {
				sendMessage(newMessage);
				setNewMessage('');
			}
		}
	};

	// allow scrolling to the bottom of the container when a new message arrived.
	useEffect(() => messageRef.current.scrollIntoView({ behavior: 'smooth' }));

	return (
		<>
			<Paper elevation={5} className="relative h-full w-full">
				<div className="h-20 flex items-center text-xl font-semibold justify-center border-b border-gray-300">
					Messages
				</div>
				<div className="h-5/6 overflow-auto">
					<ol className="p-2">
						{previousMessages.map(message => (
							<MessageBody
								key={message.id}
								authorId={message.authorId}
								text={message.text}
								createdAt={message.createdAt.split('T')[1].split('.')[0]}
							/>
						))}
						{messages.map(message => (
							<MessageBody
								key={message.id}
								authorId={message.authorId}
								text={message.body}
								createdAt="3:50"
							/>
						))}
					</ol>
					<div ref={messageRef} />
				</div>
				<div className="flex absolute w-full bottom-0 p-2">
					<FormControl className="w-full" variant="outlined">
						<InputLabel>Message</InputLabel>
						<OutlinedInput
							id="message"
							value={newMessage}
							onChange={handleNewMessageChange}
							onKeyUp={handleKeyUp}
							endAdornment={
								<InputAdornment position="end">
									<IconButton
										aria-label="send message"
										onClick={handleSendMessage}
										disabled={!newMessage}
										edge="end"
									>
										<SendMessageIcon />
									</IconButton>
								</InputAdornment>
							}
							labelWidth={70}
						/>
					</FormControl>
				</div>
			</Paper>
		</>
	);
};

export default Chat;
