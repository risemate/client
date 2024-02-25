import React, { useRef } from 'react';
import { useDrag, useDrop, DropTargetMonitor, DragSourceMonitor } from 'react-dnd';

export default function useNavigationListItem(
	id: number,
	index: number,
	moveItem: (dragIndex: number, hoverIndex: number) => void,
) {
	const ref = useRef<HTMLLIElement | null>(null);
	type HoverItem = {
		id: number;
		index: number;
	};
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
	return { ref, handlerId, opacity, drag, drop };
}
