import { useRef } from 'react';
import { DragSourceMonitor, DropTargetMonitor, useDrag, useDrop } from 'react-dnd';
import { useFormContext } from 'react-hook-form';

export default function useNavigationListItem(
	id: number | string,
	index: number,
	moveItem: (dragIndex: number, hoverIndex: number) => void,
) {
	const ref = useRef<HTMLLIElement | null>(null);
	type HoverItem = {
		id: number;
		index: number;
	};
	const { watch, setValue } = useFormContext();
	const [{ handlerId }, drop] = useDrop({
		accept: 'resume',
		collect(monitor) {
			return {
				handlerId: monitor.getHandlerId(),
			};
		},
		hover(item, monitor: DropTargetMonitor) {
			if (!ref.current) return;
			const dragIndex = (item as HoverItem).index;
			const hoverIndex = index;
			if (dragIndex === hoverIndex) return;
			const hoverBoundingRect = ref.current?.getBoundingClientRect();
			const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
			const clientOffset = monitor.getClientOffset();
			if (clientOffset) {
				const hoverClientY = clientOffset.y - hoverBoundingRect.top;
				if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
				if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;
			}
			moveItem(dragIndex, hoverIndex);
			(item as HoverItem).index = hoverIndex;
		},
	});

	const [{ isDragging }, drag] = useDrag({
		type: 'resume',
		item: () => {
			return { id, index };
		},
		collect: (monitor: DragSourceMonitor) => ({
			isDragging: monitor.isDragging(),
		}),
	});

	const opacity = isDragging ? 0 : 1;
	return {
		dnd: {
			ref,
			handlerId,
			opacity,
			drag,
			drop,
		},
		isVisible: {
			value: watch(`doc.orderType.${index}.isVisible`),
			update: (value: boolean) => setValue(`doc.orderType.${index}.isVisible`, value),
		},
	};
}
