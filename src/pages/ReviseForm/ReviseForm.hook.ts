import { careersQuery } from '@queries/career';
import { isEmpty } from '@utils/helpers';
import { ChangeEvent } from 'react';
import { useController, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { CareerTypeList } from 'types/career/careerDocument';
import { CoachingRequest, CoachingRequestState } from 'types/coach/coaching';

interface FormMethodProps extends CoachingRequest {
	resumeShare: boolean;
}

export default function useReviseForm(formState: CoachingRequestState) {
	const navigate = useNavigate();
	const reviseFormMethods = useForm<FormMethodProps>({
		mode: 'onSubmit',
		defaultValues: {
			productId: formState.productId,
			selectedPackage: formState.selectedPackage.packageName,
			careerType: formState.careerTypes[0],
			originDocId: '',
			impUid: '',
			paidAt: 0,
			resumeShare: false,
		},
	});
	const {
		control,
		formState: { errors },
		watch,
		handleSubmit,
	} = reviseFormMethods;
	const resumes = careersQuery({ docType: 'BASIC', careerType: watch('careerType') });

	const { field: resumeShareFields } = useController({
		control,
		name: 'resumeShare',
		rules: { required: true },
	});

	const { field: originDocIdFields } = useController({
		control,
		name: 'originDocId',
		// rules: { required: true },
	});

	const disableSubmit = !isEmpty(errors);

	const onSubmit = handleSubmit(async data => {
		console.log(data, errors);
	});

	const onCancel = () => navigate(-1);
	return {
		careerType: {
			options: formState.careerTypes.map(career => {
				return { label: CareerTypeList[career], value: career };
			}),
			selectedText: CareerTypeList[watch('careerType')],
		},
		resumeShare: {
			checked: resumeShareFields.value,
			onChange: (e: ChangeEvent<HTMLInputElement>) =>
				resumeShareFields.onChange(e.target.checked),
			ref: resumeShareFields.ref,
			onBlur: resumeShareFields.onBlur,
		},
		originDocId: {
			value: originDocIdFields.value,
			update: (id: string | null) => originDocIdFields.onChange(id),
		},
		resumes: resumes.data || [],
		disableSubmit,
		onSubmit,
		onCancel,
	};
}
