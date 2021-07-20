export interface IPropertyFilterItem {
	label: string;
	value: any;
}

export interface IPropertyFilterSection {
	label: string;
	name: string;
	items: IPropertyFilterItem[];
}
