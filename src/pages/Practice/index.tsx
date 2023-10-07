import { PageContainer } from '@ant-design/pro-components';
import { Outlet } from '@umijs/max';

const PracticeList: React.FC = () => {
  return (
    <PageContainer>
      <Outlet />
    </PageContainer>
  );
};

export default PracticeList;
