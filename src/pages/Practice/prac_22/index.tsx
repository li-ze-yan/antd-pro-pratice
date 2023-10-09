import { ProForm, ProFormDependency, ProFormSelect, ProFormText } from '@ant-design/pro-components';
import { Card } from 'antd';

// 简单的表单依赖
const Index: React.FC = () => {
  return (
    <Card>
      <ProForm
        onFinish={async (values) => {
          console.log(values);
        }}
      >
        <ProFormText name="name" label="名称" width="md" />
        <ProFormDependency name={['name']}>
          {({ name }) => {
            return (
              <ProFormSelect
                options={[
                  {
                    value: 'chapter',
                    label: '盖章后生效',
                  },
                ]}
                width="md"
                name="useMode"
                label={`与《${name ?? ''}》合同约定生效方式`}
              />
            );
          }}
        </ProFormDependency>
      </ProForm>
    </Card>
  );
};

export default Index;
