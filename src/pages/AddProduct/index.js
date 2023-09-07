import { Button, Card, Form, Input, Select, Space, Tag, Typography, Upload, message } from 'antd'
import React, { useState } from 'react';
import { DeleteOutlined } from '@ant-design/icons'

export default function AddProduct() {
  const [tags, setTags] = useState(['HTML', 'CSS']);
  return (
    <Card>
      <Typography.Title level={4}>Add Product</Typography.Title>
      
      <Space size={20} direction='horizontal'>
            <Form style={{ display: 'flex', flexDirection: 'row', width: '80vw', alignItems: 'center', justifyContent: 'space-between'}}>
              <Space direction='vertical'>
                <Form.Item name='productTitle' required label='Product Title'>
                  <Input placeholder='Enter Product Title' />
                </Form.Item>
                <Form.Item name='productDescription' required label='Product Description'>
                  <Input placeholder='Enter Product Description' />
                </Form.Item>
                <Form.Item name='productDescription' required label='Upload Preview Image'>
                  <Upload maxCount={1}>
                  <Button>Upload Preview Image</Button>
                  </Upload>
                </Form.Item>
                <Form.Item name='productDescription' required label='Upload Zip File.'>
                  <Upload maxCount={1} accept='.zip'>
                    <Button>Upload Zip File</Button>
                  </Upload>
                </Form.Item>
              </Space>

              <Space direction='vertical'>
                <Form.Item name='productDescription' required label='Set Price'>
                  <Space direction='horizontal'>
                     <Select placeholder='Price'/>
                     <Select placeholder='Discounted Price'/>
                  </Space>
                </Form.Item>
                <Form.Item name='productDescription' required label='Category'>
                  <Space direction='horizontal'>
                     <Select placeholder='Category'/>
                     <Select placeholder='Sub-category'/>
                  </Space>
                </Form.Item>
                <Card>
                  <Typography.Paragraph strong>Tags</Typography.Paragraph>
                  <Space direction='horizontal' style={{marginBottom: 20}}>
                    
                    {
                      tags.map(tag => {
                        return  (
                          <Tag color='success' closable onClose={() => {}} closeIcon={<DeleteOutlined />}>{tag}</Tag>
                        );
                      })
                    }
                  </Space>
                  <Input placeholder='Type tag here...' onChange={(event) => {
                    document.body.onkeyup = function(e) {
                      if (e.key == " " || e.code == "Space" || e.keyCode == 32 ) {
                        setTags([...tags, event.target.value]);
                      }
                    }
                  }}
                  />
                </Card>
                <Button type='primary' htmlType='submit' block>Submit</Button>
              </Space>
        </Form>
      </Space>
    </Card>
  )
}
