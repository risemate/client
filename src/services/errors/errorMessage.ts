export const getErrorMessage = (status: 204 | 401 | 402 | 409 | 500) => {
    switch (status) {
        case 204:
            return {
                title: '콘텐츠가 없습니다.',
                content: ''
            }
        case 401:
        case 402:
        return {
            title: '접근 권한이 없습니다.',
            content: '로그인을 해주세요.',
        };
        case 409:
        case 500:
        default:
        return {
            title: '서비스에 접속할 수 없습니다.',
            content: '새로고침을 하거나 잠시 후 다시 접속해 주시기 바랍니다.',
        };
    }
};
