import { ProForm, ProFormUploadButton, ProFormUploadDragger } from '@ant-design/pro-components';
import { Card } from 'antd';

// 上传表单
const Index: React.FC = () => {
  return (
    <Card>
      <ProForm>
        <ProFormUploadButton
          name="upload"
          label="Upload"
          max={2}
          fieldProps={{
            name: 'file',
          }}
          action="/upload.do"
          extra="longgggggggggggggggggggggggggggggggggg"
        />
        <ProFormUploadButton
          name="upload"
          label="Upload"
          max={2}
          fieldProps={{
            name: 'file',
            listType: 'picture-card',
          }}
          action="/upload.do"
          extra="longgggggggggggggggggggggggggggggggggg"
        />
        <ProFormUploadDragger max={4} label="Dragger" name="dragger" />
      </ProForm>
    </Card>
  );
};

export default Index;
