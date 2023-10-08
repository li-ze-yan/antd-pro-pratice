import type { ProFormInstance } from '@ant-design/pro-components';
import { ProForm, ProFormDatePicker, ProFormText } from '@ant-design/pro-components';
import { Button, Card, message } from 'antd';
import dayjs from 'dayjs';
import { useRef } from 'react';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

// 你可以通过 formRef 获取到表单实例的引用，通过引用可以调用表单方法实现表单重置，设置表单，获取表单值等功能。
const Index: React.FC = () => {
  const formRef = useRef<ProFormInstance>();
  const onFill = () => {
    formRef?.current?.setFieldsValue({
      name: '张三',
      company: '蚂蚁金服',
    });
  };

  const getCompanyName = () => {
    message.info(`公司名称为 "${formRef?.current?.getFieldValue('company')}"`);
  };

  const getFormatValues = () => {
    const { name, company, date } = formRef.current?.getFieldsFormatValue?.();
    message.info(`公司名称为 "${company}"`);
    message.info(`姓名为 "${name}"`);
    message.info(`日期为 "${date}"`);
    console.log('格式化后的所有数据：', formRef.current?.getFieldsFormatValue?.());
  };

  const validateAndGetFormatValue = () => {
    formRef.current?.validateFieldsReturnFormatValue?.().then((values) => {
      const { name, company, date } = values;
      message.info(`公司名称为 "${company}"`);
      message.info(`姓名为 "${name}"`);
      message.info(`日期为 "${date}"`);
    });
  };

  const notValidateAndGetFormatValue = () => {
    formRef.current?.validateFields?.().then((values) => {
      const { name, company, date } = values;
      message.info(`公司名称为 "${company}"`);
      message.info(`姓名为 "${name}"`);
      message.info(`日期为 "${date}"`);
      console.log('未格式化的所有数据：', values);
    });
  };

  return (
    <Card>
      <ProForm
        title="新建表单"
        formRef={formRef}
        submitter={{
          render: (props, doms) => {
            return [
              ...doms,
              <Button htmlType="button" onClick={onFill} key="edit">
                一键填写
              </Button>,
              <Button htmlType="button" onClick={getCompanyName} key="read">
                读取公司
              </Button>,
              <Button.Group key="refs" style={{ display: 'block' }}>
                <Button htmlType="button" onClick={getFormatValues} key="format">
                  获取格式化后的所有数据
                </Button>
                <Button htmlType="button" onClick={validateAndGetFormatValue} key="format2">
                  校验表单并返回格式化后的所有数据
                </Button>
                <Button htmlType="button" onClick={notValidateAndGetFormatValue} key="format3">
                  获取未格式化的数据
                </Button>
              </Button.Group>,
            ];
          },
        }}
        onFinish={async (values) => {
          await waitTime(2000);
          console.log(values);
          message.success('提交成功');
          return true;
        }}
      >
        <ProFormText
          width="md"
          name="name"
          label="签约客户名称"
          tooltip="最长为 24 位"
          placeholder="请输入名称"
          rules={[
            {
              required: true,
              message: 'fuck you',
            },
          ]}
        />

        <ProFormText width="md" name="company" label="我方公司名称" placeholder="请输入名称" />
        <ProFormDatePicker name="date" initialValue={dayjs('2021-08-09')} />
      </ProForm>
    </Card>
  );
};

export default Index;
