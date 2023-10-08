import { ProForm, ProFormDependency, ProFormSelect, ProFormText } from '@ant-design/pro-components';
import { message, Card } from 'antd';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

// 表单联动
const Index: React.FC = () => {
  return (
    <Card>
      <ProForm
        onFinish={async (values) => {
          await waitTime(2000);
          console.log(values);
          message.success('提交成功');
        }}
        initialValues={{
          name: '蚂蚁设计有限公司',
          name2: '蚂蚁设计集团',
          useMode: 'chapter',
        }}
      >
        <ProFormText
          width="md"
          name="name"
          label="签约客户名称"
          tooltip="最长为 24 位"
          placeholder="请输入名称"
        />
        <ProFormText
          width="md"
          name={['name2', 'fuck']}
          label="签约客户名称"
          tooltip="最长为 24 位"
          placeholder="请输入名称"
        />
        {/*  ProFormDependency 会自动注入并且 进行 shouldUpdate 的比对  */}
        <ProFormDependency name={['name', ['name2', 'fuck']]}>
          {({ name, name2 }) => {
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
                label={`与《${name || ''}》 与 《${name2?.fuck || ''}》合同约定生效方式`}
              />
            );
          }}
        </ProFormDependency>
        {/* noStyle shouldUpdate 是必选的，写了 name 就会失效 */}
        <ProForm.Item noStyle shouldUpdate>
          {(form) => {
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
                label={`与《${form.getFieldValue('name')}》合同约定生效方式`}
              />
            );
          }}
        </ProForm.Item>
      </ProForm>
    </Card>
  );
};

export default Index;
