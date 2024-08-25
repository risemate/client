import { applyCoachingMutation } from '@queries/coaching';
import { isEmpty } from '@utils/helpers';
import { ChangeEvent } from 'react';
import { useController, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { CareerTypeList } from 'types/career/careerDocument';
import { CoachingRequest, CoachingRequestState } from 'types/coach/coaching';

interface FormMethodProps extends CoachingRequest {
	resumeShare: boolean;
	message: string;
}

export default function useReviseForm(formState: CoachingRequestState) {
	const navigate = useNavigate();
	const coachingApplyMutation = applyCoachingMutation();
	const reviseFormMethods = useForm<FormMethodProps>({
		mode: 'onBlur',
		defaultValues: {
			productId: formState.productId,
			selectedPackage: formState.selectedPackage,
			careerType: formState.careerTypes[0],
			originDocId: '',
			impUid: '',
			paidAt: 0,
			resumeShare: false,
			message: '',
			merchantUid: '',
		},
	});
	const { control, watch, setValue, handleSubmit } = reviseFormMethods;

	const { field: careerTypeFields } = useController({
		control,
		name: 'careerType',
		rules: { required: true },
	});

	const { field: resumeShareFields } = useController({
		control,
		name: 'resumeShare',
		rules: { required: true },
	});

	const { field: originDocIdFields } = useController({
		control,
		name: 'originDocId',
		rules: { required: true },
	});

	const { field: messageFields } = useController({
		control,
		name: 'message',
	});

	const disableSubmit = isEmpty(watch('originDocId')) || !watch('resumeShare');

	const onSubmit = handleSubmit(async data => {
		// eslint-disable-next-line
		const coachingRequestData = (({ resumeShare, message, ...rest }) => rest)(data);
		try {
			coachingApplyMutation.mutateAsync(coachingRequestData).then(() => {
				toast('첨삭 신청이 완료되었습니다.');
			});
		} catch (error) {
			toast('첨삭 신청을 실패하였습니다. 다시 시도해주세요.');
		} finally {
			navigate(`expert/${formState.productId}`);
		}
	});

	const onCancel = () => navigate(-1);
	return {
		careerType: {
			options: formState.careerTypes.map(career => {
				return { label: CareerTypeList[career], value: career };
			}),
			...careerTypeFields,
			onChange: (e: ChangeEvent<HTMLSelectElement>) => {
				careerTypeFields.onChange(e.target.value);
				setValue('productId', '');
				setValue('resumeShare', false);
			},
			selectedText: CareerTypeList[careerTypeFields.value],
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
		message: messageFields,
		disableSubmit,
		onSubmit,
		onCancel,
	};
}
