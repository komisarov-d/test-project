import React, { ReactElement } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/scss/image-gallery.scss';
import './react-image-gallery.scss';

const images = [
	{
		original: 'https://www.jet2holidays.com/HotelImages/Web/ALC_138_Htl_Presidente_0818_01.jpg',
		thumbnail: 'https://www.jet2holidays.com/HotelImages/Web/ALC_138_Htl_Presidente_0818_01.jpg'
	},
	{
		original: 'https://cf.bstatic.com/images/hotel/max1024x768/211/211874461.jpg',
		thumbnail: 'https://cf.bstatic.com/images/hotel/max1024x768/211/211874461.jpg'
	},
	{
		original: 'https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg',
		thumbnail: 'https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg'
	},
	{
		original: 'https://pix10.agoda.net/hotelImages/200524/-1/e7e36079645da64601ea20c5249c367d.jpg',
		thumbnail: 'https://pix10.agoda.net/hotelImages/200524/-1/e7e36079645da64601ea20c5249c367d.jpg'
	},
	{
		original:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Hotel_Adlon_%28Berlin%29.jpg/1200px-Hotel_Adlon_%28Berlin%29.jpg',
		thumbnail:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Hotel_Adlon_%28Berlin%29.jpg/1200px-Hotel_Adlon_%28Berlin%29.jpg'
	},
	{
		original:
			'https://www.bluesunhotels.com/EasyEdit/UserFiles/PageImages/hotel-amor-supetar-brac/hotel-amor-supetar-brac-637103700072492984-1_1600_900.jpeg',
		thumbnail:
			'https://www.bluesunhotels.com/EasyEdit/UserFiles/PageImages/hotel-amor-supetar-brac/hotel-amor-supetar-brac-637103700072492984-1_1600_900.jpeg'
	},
	{
		original: 'https://cf.bstatic.com/images/hotel/max1024x768/255/255425351.jpg',
		thumbnail: 'https://cf.bstatic.com/images/hotel/max1024x768/255/255425351.jpg'
	},
	{
		original: 'https://www.leonardo-hotels.ru/octopus/Upload/images/Pages/antwerpencomfort-room.jpg',
		thumbnail: 'https://www.leonardo-hotels.ru/octopus/Upload/images/Pages/antwerpencomfort-room.jpg'
	}
];
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

// eslint-disable-next-line no-empty-pattern
export default function index({}: Props): ReactElement {
	return (
		<div className="mt-4">
			<ImageGallery items={images} showFullscreenButton={false} showPlayButton={false} />
		</div>
	);
}
