import { Card } from 'antd';
import {
  LightFilter,
  ProFormFieldSet,
  ProFormSelect,
  ProFormText,
} from '@ant-design/pro-components';

// 轻量筛选中使用 light
const Index: React.FC = () => {
  return (
    <Card>
      <LightFilter
        onFinish={async (values) => {
          console.log(values);
        }}
        initialValues={{
          name: [
            {
              label: '包含',
              value: 'Like',
            },
            '123',
          ],
        }}
        placement={'bottomLeft'}
      >
        <ProFormFieldSet
          label="筛选"
          name={'name'}
          lightProps={{
            labelFormatter: (value) => {
              return value.join(' ');
            },
          }}
          transform={(value: any) => {
            return {
              filter: [
                {
                  operator: value[0],
                  value: value[1],
                },
              ],
            };
          }}
        >
          <ProFormSelect
            fieldProps={{
              labelInValue: true,
            }}
            valueEnum={{
              Like: '包合',
              NotLike: '不包合',
              Eq: '等于',
              NotEq: '不等于',
            }}
          />
          <ProFormText placeholder="请输入" />
        </ProFormFieldSet>
      </LightFilter>
    </Card>
  );
};

export default Index;
