import { zodResolver } from '@hookform/resolvers/zod';
import { UseFormProps, useForm } from 'react-hook-form';
import { ZodType } from 'zod';

export default function useZodForm<TSchema extends ZodType>(
	props: Omit<UseFormProps<TSchema['_input']>, 'resolver'> & {
		schema: TSchema;
	},
) {
	return useForm<TSchema['_input']>({
		...props,
		// defaultValues: props.schema.parse(props.defaultValues),
		// values: props.schema.parse(props.values),
		resolver: zodResolver(props.schema),
	});
}
