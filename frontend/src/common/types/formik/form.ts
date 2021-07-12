import { FormikConfig, FormikValues } from 'formik';

export interface FormProps extends FormikConfig<FormikValues> {
	isLoading?: boolean;
	title?: string;
	className?: string;
}
