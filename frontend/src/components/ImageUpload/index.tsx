import React, { useState, useEffect, FunctionComponent } from 'react';

interface Props {
	onInput: (uploadedFile: FileList, fileIsValid: boolean) => void;
	onLoadPreview?: (previewUrl: string) => void;
}

const ImageUpload: FunctionComponent<Props> = ({ onInput, onLoadPreview, children }) => {
	const [file, setFile] = useState();
	const [isValid, setIsValid] = useState(false);

	useEffect(() => {
		if (!file) return;

		const fileReader = new FileReader();
		fileReader.onload = () => {
			if (onLoadPreview) onLoadPreview(fileReader.result as string);
		};

		fileReader.readAsDataURL(file);
	}, [file, onLoadPreview]);

	const pickedHandler = event => {
		let uploadedFile;
		let fileIsValid = isValid;
		if (event.target.files && event.target.files.length === 1) {
			[uploadedFile] = event.target.files;
			setFile(uploadedFile);
			fileIsValid = true;
			setIsValid(true);
		} else {
			fileIsValid = false;
			setIsValid(false);
		}
		onInput(uploadedFile, fileIsValid);
	};

	return (
		<label htmlFor="image-upload">
			<input
				id="image-upload"
				type="file"
				className="absolute opacity-0 pointer-events-none"
				accept=".jpg,.png,.jpeg"
				onChange={pickedHandler}
				multiple
			/>
			{children}
		</label>
	);
};

export default ImageUpload;
