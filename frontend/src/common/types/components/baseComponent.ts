export type ComponentSize = 'none' | 'sm' | 'md' | 'lg';

export type ComponentColor = 'primary' | 'secondary' | 'inherit';

export interface ComponentPadding {
	padding?: ComponentSize;
}

export interface ComponentRounded {
	rounded?: ComponentSize;
}

export interface ComponentBackground {
	color?: ComponentColor;
}
