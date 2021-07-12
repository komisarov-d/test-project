export interface IReview {
	userId: number;
    bookingId: number;
    like: string;
    dontLike: string;
    rating: number;
    meetExpectation: boolean;
    travellForWork: boolean;
    travellPartners: Array<string>;
    generalImpressions: string;
}
