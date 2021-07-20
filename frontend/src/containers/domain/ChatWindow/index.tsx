import React from 'react';
import Modal from '@material-ui/core/Modal';
import Chat from './Chat';
import { MassageIcon } from 'components';

export const ChatWindow: any = () => {
	// getModalStyle is not a pure function, we roll the style only on the first render
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<button type="button" onClick={handleOpen}>
				<MassageIcon />
			</button>
			<Modal open={open} onClose={handleClose}>
				<div className="w-1/3 h-full float-right">
					<Chat />
				</div>
			</Modal>
		</div>
	);
};
