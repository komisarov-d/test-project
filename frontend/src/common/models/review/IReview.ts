export interface IReview {
	id: number;
	userId: number;
	bookingId: number;
	like: string;
	dontLike: string;
	images: { id: number; url: string }[];
	property: { id: number; name: string };
	rating: number;
	meetExpectation: boolean;
	travellForWork: boolean;
	travellPartners: Array<string>;
	generalImpressions: string;
}
