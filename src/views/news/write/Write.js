import React, { useRef } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Editor } from '@tinymce/tinymce-react'
import Input from 'antd/lib/input/Input';
import { Button, Upload } from 'antd';

function Write(props) {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <div style={{ minHeight: '520px' }}>
      <Input placeholder='title'></Input><br /><br />
      <Input placeholder='summary'></Input><br /><br />
      <Upload action='http://localhost:4000/article' maxCount={1}>
        <Button icon={<UploadOutlined />}>Upload</Button>
      </Upload><br />
      <Editor
        apiKey='qigktpzij16hvppe0tspnip71icwe9qqoxo1sowaxlcvutmd'
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 500,
          menubar: false,
          toolbar: 'undo redo | formatselect | ' +
            'bold italic backcolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: `body { font-family:Helvetica,Arial,sans-serif; font-size:14px }`
        }}
      />
      <Button onClick={log}>over my article</Button>

    </div>
  );
}

export default Write;