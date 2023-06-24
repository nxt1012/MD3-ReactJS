import {
  Breadcrumb,
  Layout,
  Menu,
  theme,
  Badge,
  Avatar,
  Button,
  Row,
  Col,
} from "antd";
import { HeartOutlined, UserOutlined } from "@ant-design/icons";

import { Card } from "antd";
const { Meta } = Card;
const { Header, Content, Footer } = Layout;
const Baitap01 = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const headerBadges = (
    <Badge count={5} showZero>
      <Avatar shape="square" size="large" />
    </Badge>
  );
  const heartShape = <HeartOutlined />;
  const userShape = <UserOutlined />;

  const itemHeader = ["Home", "Product", headerBadges, heartShape, userShape];
  return (
    <Layout className="layout">
      <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={itemHeader.map((data, index) => {
            const key = index + 1;
            return {
              key,
              label: data,
            };
          })}
        />
      </Header>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Products</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
          }}
        >
          <Row gutter={16}>
            <Col className="gutter-row" span={6}>
              <Card
                style={{
                  width: 300,
                }}
                cover={
                  <img
                    alt="example"
                    src="https://dummyimage.com/300x300/ccc/fff"
                  />
                }
                actions={[
                  <Button>Add to Cart</Button>,
                  <Button>Add to Wishlist</Button>,
                ]}
              >
                <Meta
                  title="Product 1"
                  description="$20.00"
                  direction="horizontal"
                  style={{ width: "100%", justifyContent: "center" }}
                />
              </Card>
            </Col>
            <Col className="gutter-row" span={6}>
              <Card
                style={{
                  width: 300,
                }}
                cover={
                  <img
                    alt="example"
                    src="https://dummyimage.com/300x300/ccc/fff"
                  />
                }
                actions={[
                  <Button>Add to Cart</Button>,
                  <Button>Add to Wishlist</Button>,
                ]}
              >
                <Meta
                  title="Product 2"
                  description="$20.00"
                  direction="horizontal"
                  style={{ width: "100%", justifyContent: "center" }}
                />
              </Card>
            </Col>
            <Col className="gutter-row" span={6}>
              <Card
                style={{
                  width: 300,
                }}
                cover={
                  <img
                    alt="example"
                    src="https://dummyimage.com/300x300/ccc/fff"
                  />
                }
                actions={[
                  <Button>Add to Cart</Button>,
                  <Button>Add to Wishlist</Button>,
                ]}
              >
                <Meta
                  title="Product 3"
                  description="$20.00"
                  direction="horizontal"
                  style={{ width: "100%", justifyContent: "center" }}
                />
              </Card>
            </Col>
            <Col className="gutter-row" span={6}>
              <Card
                style={{
                  width: 300,
                }}
                cover={
                  <img
                    alt="example"
                    src="https://dummyimage.com/300x300/ccc/fff"
                  />
                }
                actions={[
                  <Button>Add to Cart</Button>,
                  <Button>Add to Wishlist</Button>,
                ]}
              >
                <Meta
                  title="Product 4"
                  description="$20.00"
                  direction="horizontal"
                  style={{ width: "100%", justifyContent: "center" }}
                />
              </Card>
            </Col>
          </Row>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default Baitap01;
