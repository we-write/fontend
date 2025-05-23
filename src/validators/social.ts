import { LOCATION_GENRE_MAP } from '@/api/social/type';

export const validateLocation = (value: string) => {
  if (!value) return '장르를 선택해주세요';
  if (!Object.keys(LOCATION_GENRE_MAP).includes(value)) {
    return '올바른 장르를 선택해주세요';
  }
  return true;
};

export const validateRegistrationEnd = (
  value: string,
  startDate: string | Date
) => {
  const start = new Date(startDate || new Date());
  const end = new Date(value);
  const diffHours = (end.getTime() - start.getTime()) / (1000 * 60 * 60);

  if (diffHours < 24) {
    return '마감 날짜는 시작날짜로부터 최소 1일 이상 이후로 설정해주세요.';
  }
  return true;
};

export const validateCapacity = {
  required: '모집 정원을 입력해주세요',
  min: {
    value: 2,
    message: '모집 정원은 2명 이상, 10명 이하로 입력해주세요',
  },
  max: {
    value: 10,
    message: '모집 정원은 2명 이상, 10명 이하로 입력해주세요',
  },
  pattern: {
    value: /^[0-9]+$/,
    message: '숫자만 입력해주세요',
  },
};
