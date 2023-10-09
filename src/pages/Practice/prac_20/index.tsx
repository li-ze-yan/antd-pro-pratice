import {
  FormListActionType,
  ProForm,
  ProFormList,
  ProFormSelect,
} from '@ant-design/pro-components';
import { Button, Card, Space } from 'antd';
import { useRef } from 'react';

// actionRef 操作项目实例
const Index: React.FC = () => {
  const actionRef = useRef<
    FormListActionType<{
      name: string;
    }>
  >();

  return (
    <Card>
      <Space>
        <Button
          type="primary"
          onClick={() => {
            const list = actionRef.current?.getList();
            actionRef.current?.add({
              name: '新增' + list?.length,
            });
          }}
        >
          增加一行
        </Button>
        <Button
          danger
          onClick={() => {
            actionRef.current?.remove(1);
          }}
        >
          删除一行
        </Button>
        <Button
          onClick={() => {
            actionRef.current?.move(1, 0);
          }}
        >
          移动到第一行
        </Button>
        <Button
          type="dashed"
          onClick={() => {
            const row = actionRef.current?.get(1);
            console.log(row);
          }}
        >
          获取一行数据
        </Button>
        <Button
          type="dashed"
          onClick={() => {
            const row = actionRef.current?.getList();
            console.log(row);
          }}
        >
          获取所有数据
        </Button>
      </Space>
      <ProForm
        initialValues={{
          users: [
            {
              useMode: 'chapter',
            },
          ],
        }}
      >
        <ProFormList
          name="users"
          actionRef={actionRef}
          creatorButtonProps={{
            position: 'top',
            creatorButtonText: '再建一行',
          }}
          creatorRecord={{
            useMode: 'none',
          }}
        >
          <ProFormSelect
            key="useMode"
            options={[
              {
                value: 'chapter',
                label: '盖章后生效',
              },
              {
                value: 'none',
                label: '不生效',
              },
            ]}
            width="xl"
            name="useMode"
            label="合同约定生效方式"
          />
        </ProFormList>
      </ProForm>
    </Card>
  );
};

export default Index;
