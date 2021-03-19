import React from 'react';
import { Table, Space } from 'antd';
import Command from 'models/Command';

export default class ListCommands extends React.PureComponent {
  constructor(props) {
    super(props);

    const commands = [
      new Command('kubenetes', 'command', 'kubectl get nodes', '', ''),
      new Command('kubenetes', 'command', 'kubectl get pods', '', ''),
      new Command(
        'kubenetes',
        'command',
        'kubectl run NAME --image <value>',
        '',
        'kubectl run db --image mongo'
      )
    ];
    this.state = { commands };
  }

  getColumns = () => {
    return [
      {
        title: 'Command',
        dataIndex: 'command',
        key: 'command'
      },
      {
        title: 'Description',
        dataIndex: 'description',
        key: 'description'
      },
      {
        title: 'Example',
        dataIndex: 'example',
        key: 'example'
      },
      {
        title: 'Tool',
        dataIndex: 'tool',
        key: 'tool'
      },
      {
        title: 'Type',
        dataIndex: 'type',
        key: 'type'
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <Space size="middle">
            <a>Delete</a>
          </Space>
        )
      }
    ];
  };

  render() {
    const { commands } = this.state;
    const columns = this.getColumns();
    return <Table columns={columns} dataSource={commands} />;
  }
}
