import { createRef, useEffect, useRef } from 'react';
import { TabItem } from 'types/common/tab';

// TabItem 타입 정의가 필요합니다.
import useTab from './common/useTab';

export default function useScrollToSection(tabItems: TabItem[]) {
	const { changeTab, isCurrentTab } = useTab(tabItems, false);
	const sectionRefs = useRef<{ [key: string]: React.RefObject<HTMLDivElement> }>({});

	if (Object.keys(sectionRefs.current).length !== tabItems.length) {
		sectionRefs.current = tabItems.reduce(
			(acc, item) => {
				if (item.value) {
					acc[item.value] = acc[item.value] || createRef<HTMLDivElement>();
				}
				return acc;
			},
			{} as { [key: string]: React.RefObject<HTMLDivElement> },
		);
	}

	const handleScroll = () => {
		const sections = sectionRefs.current;

		// 기본적으로 첫 번째 탭을 활성화할 수 있도록 초기화
		let activeTabItem = tabItems.length > 0 ? tabItems[0] : null;

		for (const item of tabItems) {
			if (item.value) {
				const ref = sections[item.value]?.current;
				if (ref) {
					const { top } = ref.getBoundingClientRect();
					const middle = window.innerHeight / 2; // 화면의 상단 중앙값

					// 섹션이 중앙에 위치할 때 activeTabItem을 설정
					if (top <= middle && top >= 0) {
						activeTabItem = item;
						break;
					}
				}
			}
		}

		// 스크롤이 제일 위에 있을 때 첫 번째 섹션을 활성화
		if (window.scrollY === 0) {
			activeTabItem = tabItems.length > 0 ? tabItems[0] : null;
			activeTabItem && changeTab(activeTabItem);
		}

		// activeTabItem이 변경되었을 때만 changeTab 호출
		if (activeTabItem && !isCurrentTab(activeTabItem)) {
			changeTab(activeTabItem);
		}
	};

	const scrollToSection = (newItem: TabItem) => {
		if (!newItem.value) {
			return;
		}
		const section = sectionRefs.current[newItem.value]?.current;
		if (section) {
			const yOffset = -90; // 여기서 90px 만큼 더 내려갑니다.
			const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
			window.scrollTo({ top: y, behavior: 'smooth' });
			const tabItem = tabItems.find(item => item.value === newItem.value);
			if (tabItem) changeTab(tabItem);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	// console.log(currentTab)

	return { sectionRefs, activeSection: isCurrentTab, scrollToSection };
}
