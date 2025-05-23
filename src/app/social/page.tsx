import { getSocialList } from '@/api/social/api';
import SocialListGrid from './SocialListGrid';

const Page = async () => {
  const initialSocialList = await getSocialList();
  return <SocialListGrid initialSocialList={initialSocialList} />;
};

export default Page;
