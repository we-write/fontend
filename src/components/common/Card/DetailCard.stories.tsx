import type { Meta, StoryObj } from '@storybook/react';
import DetailCard from '@/components/common/Card/DetailCard';
import { DetailCardProps } from '@/components/common/Card/type';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const meta: Meta<typeof DetailCard> = {
  title: 'Common/DetailCard',
  component: DetailCard,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof DetailCard>;

export const ContinueStoryButton: Story = {
  args: {
    teamUserRole: 'MEMBER',
    textContent: {
      title: '스토리 타이틀',
      genre: '판타지',
      participantCount: 5,
      capacity: 10,
    },
    duration: {
      startDate: '2025-05-15T05:21:34.319Z',
      endDate: '2025-06-30T05:21:34.319Z',
    },
    isCardDataLoading: false,
    handleButtonClick: () => {},
  } as DetailCardProps,

  parameters: {
    docs: {
      description: {
        story:
          '사용자가 모임 멤버일 경우 "스토리 이어쓰기" 버튼이 활성화 됩니다.',
      },
    },
  },
};

export const ParticipateButton: Story = {
  args: {
    teamUserRole: 'GUEST',
    textContent: {
      title: '스토리 타이틀',
      genre: '판타지',
      participantCount: 5,
      capacity: 10,
    },
    duration: {
      startDate: '2025-05-15T05:21:34.319Z',
      endDate: '2025-06-30T05:21:34.319Z',
    },
    isCardDataLoading: false,
    handleButtonClick: () => {},
  } as DetailCardProps,

  parameters: {
    docs: {
      description: {
        story: '사용자가 게스트일 경우 "참여하기" 버튼이 활성화 됩니다.',
      },
    },
  },
};

export const MemberFullButton: Story = {
  args: {
    teamUserRole: 'GUEST',
    textContent: {
      title: '스토리 타이틀',
      genre: '판타지',
      participantCount: 10,
      capacity: 10,
    },
    duration: {
      startDate: '2025-05-15T05:21:34.319Z',
      endDate: '2025-05-30T05:21:34.319Z',
    },
    isCardDataLoading: false,
    handleButtonClick: () => {},
  } as DetailCardProps,

  parameters: {
    docs: {
      description: {
        story:
          '사용자가 게스트이고, 모집 인원이 모두 찼으면 버튼이 비활성화됩니다.',
      },
    },
  },
};

export const NotAllowedParticipateButton: Story = {
  args: {
    teamUserRole: 'GUEST',
    textContent: {
      title: '스토리 타이틀',
      genre: '판타지',
      participantCount: null,
      capacity: null,
    },
    duration: {
      startDate: '2025-05-15T05:21:34.319Z',
      endDate: '2025-06-30T05:21:34.319Z',
    },
    isCardDataLoading: false,
    handleButtonClick: () => {},
  } as DetailCardProps,

  parameters: {
    docs: {
      description: {
        story:
          '사용자가 게스트이고, 모집 인원 정보 데이터를 불러오지 못했을 경우 버튼이 비활성화됩니다.',
      },
    },
  },
};

export const TruncateTitle: Story = {
  args: {
    teamUserRole: 'GUEST',
    textContent: {
      title: '제목이 최대 글자 수를 초과할 경우 줄임표가 나타납니다.',
      genre: '로맨스',
      participantCount: 5,
      capacity: 10,
    },
    duration: {
      startDate: '2025-05-15T05:21:34.319Z',
      endDate: '2025-06-30T05:21:34.319Z',
    },
    isCardDataLoading: false,
    handleButtonClick: () => {},
  } as DetailCardProps,

  parameters: {
    docs: {
      description: {
        story: '제목이 길어지면 줄임표(truncate)가 적용되는 케이스입니다.',
      },
    },
  },
};

export const SkeletonUI: Story = {
  args: {
    teamUserRole: 'GUEST',
    textContent: {
      title: '스토리 타이틀',
      genre: '판타지',
      participantCount: null,
      capacity: null,
    },
    duration: {
      startDate: '2025-05-15T05:21:34.319Z',
      endDate: '2025-06-30T05:21:34.319Z',
    },
    isCardDataLoading: true,
  } as DetailCardProps,

  parameters: {
    docs: {
      description: {
        story: '데이터가 로딩 상태일 경우 SkeletonUI가 대체로 표시됩니다.',
      },
    },
  },
};

export const MobileDeafult: Story = {
  args: {
    teamUserRole: 'MEMBER',
    textContent: {
      title: '스토리 타이틀',
      genre: '판타지',
      participantCount: 5,
      capacity: 10,
    },
    duration: {
      startDate: '2025-05-15T05:21:34.319Z',
      endDate: '2025-06-30T05:21:34.319Z',
    },
    isCardDataLoading: false,
    handleButtonClick: () => {},
  } as DetailCardProps,

  parameters: {
    docs: {
      description: {
        story:
          '모바일 사이즈(390×844)에서 보여지는 UI입니다. 전반적인 padding, margin, gap값을 축소했습니다.',
      },
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone12',
    },
  },
};

export const MobileTruncateTitle: Story = {
  args: {
    teamUserRole: 'GUEST',
    textContent: {
      title:
        '모바일에선 2줄까지 제목이 출력되고, 이후부터는 줄임표가 나타납니다.',
      genre: '로맨스',
      participantCount: 5,
      capacity: 10,
    },
    duration: {
      startDate: '2025-05-15T05:21:34.319Z',
      endDate: '2025-06-30T05:21:34.319Z',
    },
    isCardDataLoading: false,
    handleButtonClick: () => {},
  } as DetailCardProps,

  parameters: {
    docs: {
      description: {
        story:
          '모바일 사이즈(390×844)에서는 카드 좌우 폭이 좁아진 만큼 타이틀 영역을 확보하기 위해 2줄까지 텍스트가 출력되고 이후엔 줄임표가 나타납니다.',
      },
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone12',
    },
  },
};
