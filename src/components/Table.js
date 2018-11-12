import React from 'react';
import { Card, Col, Row, Skeleton, Switch, Icon, Avatar } from 'antd';
import 'antd/lib/card/style/css';
import 'antd/lib/col/style/css';
import 'antd/lib/row/style/css';
import 'antd/lib/skeleton/style/css';
import 'antd/lib/switch/style/css';
import 'antd/lib/icon/style/css';
import 'antd/lib/avatar/style/css';
import {store} from '../store/configureStore';

const { Meta } = Card;

const gridStyle = {
  width: '25%',
  textAlign: 'center',
};

const tabList = [{
  key: 'tab1',
  tab: 'tab1',
}, {
  key: 'tab2',
  tab: 'tab2',
}];

const contentList = {
  tab1: <p>User</p>,
  tab2: <p>Logged in</p>,
};

const UserDetails = [{
  key: 'email',
  tab: 'email',
}, {
  key: 'firstName',
  tab: 'firstName',
}, {
  key: 'lastName',
  tab: 'lastName',
}];



class Table1 extends React.Component {

  state = {
    loading: true,
    key: 'tab1',
    noTitleKey: 'app'
  }


  onTabChange = (key, type) => {
    this.setState({ [type]: key });
  }

  onChange = (checked) => {
    this.setState({ loading: !checked });
  }

    render() {
      const { loading } = this.state;
      const user = store.getState();
      const contentListNoTitle = {
        email: <p>{user.authentication.user.email}</p>,
        firstName: <p>{user.authentication.user.firstName}</p>,
        lastName: <p>{user.authentication.user.lastName}</p>,
      };
        return (
          <div>
            <h3 className="display">Displaying User information in different card patterns</h3>
            <div style={{ background: '#ECECEC', padding: '30px' }}>
            <Card title="User information (No Border)" bordered={false} style={{ width: 300 }}>
            <p>Email Address : {user.authentication.user.email}</p>
              <p>First Name : {user.authentication.user.firstName}</p>
              <p>Last Name : {user.authentication.user.lastName}</p>
            </Card>

            <Card
              title="User information (Basic card)"
              // extra={<a href="#">More</a>}
              style={{ width: 400, marginTop: '20px' }}
            >
              <p>Email Address : {user.authentication.user.email}</p>
              <p>First Name : {user.authentication.user.firstName}</p>
              <p>Last Name : {user.authentication.user.lastName}</p>
            </Card>

            <Card style={{ width: 300 , marginTop: '20px'}}>
            <p>Email Address : {user.authentication.user.email}</p>
              <p>First Name : {user.authentication.user.firstName}</p>
              <p>Last Name : {user.authentication.user.lastName}</p>
            </Card>

            <Card title="Customized Card" hoverable style={{ width: 240, marginTop: '20px' }}
              cover={<img alt="Profile pic" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
              <Meta title="Login Page Example" description="www.something.com" />
              </Card>
            </div>

            <div style={{ background: '#ECECEC', padding: '30px' }}>
              <Row gutter={16}>
                <Col span={8}>
                  <Card title="Email Address" bordered={false}>{user.authentication.user.email}</Card>
                </Col>
                <Col span={8}>
                  <Card title="FirstName" bordered={false}>{user.authentication.user.firstName}</Card>
                </Col>
                <Col span={8}>
                  <Card title="LastName" bordered={false}>{user.authentication.user.lastName}</Card>
                </Col>
              </Row>
            </div>

            <div style={{ background: '#ECECEC' }}>
        <Switch checked={!loading} onChange={this.onChange} />

        <Card style={{ width: 300, marginTop: 16 }} loading={loading}>
          <Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title="User info"
            description="Logged in User" 
          />
        </Card>

        <Card
          style={{ width: 300, marginTop: 20 }}
          actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
        >
          <Skeleton loading={loading} avatar active>
            <Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title="User info"
              description="Logged in User"
            />
          </Skeleton>
        </Card>
      
    
        <Card title="User logged in" style={{marginTop: 30 }}>
          <Card.Grid style={gridStyle}>User info</Card.Grid>
          <Card.Grid style={gridStyle}>{user.authentication.user.email}</Card.Grid>
          <Card.Grid style={gridStyle}>{user.authentication.user.firstName}</Card.Grid>
          <Card.Grid style={gridStyle}>{user.authentication.user.lastName}</Card.Grid>
          <Card.Grid style={gridStyle}>{user.authentication.user.id}</Card.Grid>
          <Card.Grid style={gridStyle}>Grid card</Card.Grid>
        </Card>
      
    
          
          <div>
            <Card title="User info" style={{marginTop: 30 }}>
              <p
                style={{
                  fontSize: 14,
                  color: 'rgba(0, 0, 0, 0.85)',
                  marginBottom: 16,
                  fontWeight: 500,
                }}
              >
                Logged in User
              </p>
              <Card
                type="inner"
                title="First Name"
                extra={<a href="#">More</a>}
              >
              {user.authentication.user.firstName}
                
              </Card>
              <Card
                style={{ marginTop: 16 }}
                type="inner"
                title="Last Name"
                extra={<a href="#">More</a>}
              >
                {user.authentication.user.lastName}
              </Card>
            </Card>
          </div>

            <Card 
              style={{ width: '100%' }}
              title="User info"
              extra={<a href="#">More</a>}
              tabList={tabList}
              activeTabKey={this.state.key}
              onTabChange={(key) => { this.onTabChange(key, 'key'); }}
            >
              {contentList[this.state.key]}
            </Card>
            <br /><br />
            <Card
              style={{ width: '100%', marginTop: 30 }}
              tabList={UserDetails}
              activeTabKey={this.state.noTitleKey}
              onTabChange={(key) => { this.onTabChange(key, 'noTitleKey'); }}
            >
              {contentListNoTitle[this.state.noTitleKey]}
            </Card>
          </div>

            <Card
              style={{ width: 300, marginTop: 30 }}
              cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
              actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
            >
              <Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title="User info"
                description="This is a type of card"
              />
            </Card>
          </div>
          
          
        )
    }
}

export default Table1;


  