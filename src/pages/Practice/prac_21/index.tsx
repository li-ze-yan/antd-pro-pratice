import { FormListActionType, ProFormList, ProFormText } from '@ant-design/pro-components';
import { Card } from 'antd';
import { useRef } from 'react';

// actionGuard 拦截器
const Index: React.FC = () => {
  const actionRef = useRef<
    FormListActionType<{
      name: string;
    }>
  >();

  const actionGuard = {
    beforeAddRow: async (defaultValue: any, insertIndex: any, count: any) => {
      return new Promise((resolve) => {
        console.log(defaultValue?.name, insertIndex, count);
        setTimeout(() => resolve(true), 1000);
      });
    },
    beforeRemoveRow: async (index: any, count: any) => {
      const row = actionRef.current?.get(index as number);
      console.log('--->', index, count, row);
      return new Promise((resolve) => {
        if (index === 0) {
          resolve(false);
          return;
        }
        setTimeout(() => resolve(true), 1000);
      });
    },
  };

  return (
    <Card>
      <ProFormList
        initialValue={['adad']}
        name="list"
        actionGuard={actionGuard as any}
        actionRef={actionRef}
      >
        <ProFormText key="useMode" name="name" label="姓名" />
      </ProFormList>
    </Card>
  );
};

export default Index;
