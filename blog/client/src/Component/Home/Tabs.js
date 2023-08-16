import React from "react";

// reactstrap components
import {
    Card,
    CardHeader,
    CardBody,
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane,
    Container,
    Row,
    Col,
} from "reactstrap";

// core components

function Tabs() {
    const [iconPills, setIconPills] = React.useState("1");
    return (
        <>
            <div className="section section-tabs">
                <Container>
                    <Row>
                        <Col className="ml-auto mr-auto" md="10" xl="6">
                            <p className="category">Intro</p>
                            <Card>
                                <CardHeader>
                                    <Nav className="justify-content-center" role="tablist" tabs>
                                        <NavItem>
                                            <NavLink
                                                className={iconPills === "1" ? "active" : ""}
                                                href="#pablo"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setIconPills("1");
                                                }}
                                            >
                                                <i className="now-ui-icons objects_umbrella-13"></i>
                                                Home
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={iconPills === "2" ? "active" : ""}
                                                href="#pablo"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setIconPills("2");
                                                }}
                                            >
                                                <i className="now-ui-icons shopping_cart-simple"></i>
                                                Profile
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={iconPills === "3" ? "active" : ""}
                                                href="#pablo"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setIconPills("3");
                                                }}
                                            >
                                                <i className="now-ui-icons shopping_shop"></i>
                                                Messages
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={iconPills === "4" ? "active" : ""}
                                                href="#pablo"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setIconPills("4");
                                                }}
                                            >
                                                <i className="now-ui-icons ui-2_settings-90"></i>
                                                Settings
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </CardHeader>
                                <CardBody>
                                    <TabContent
                                        className="text-center"
                                        activeTab={"iconPills" + iconPills}
                                    >
                                        <TabPane tabId="iconPills1">
                                            <p>
                                                풀스택 개발자를 꿈 꾸는 이준호의 홈페이지 입니다.
                                            </p>
                                        </TabPane>
                                        <TabPane tabId="iconPills2">
                                            <p>
                                                재영소프트 센텀 연구소에서 근무 중입니다.
                                            </p>
                                        </TabPane>
                                        <TabPane tabId="iconPills3">
                                            <p>
                                                포스팅을 위해서는 회원가입 및 로그인을 부탁드립니다.
                                            </p>
                                        </TabPane>
                                        <TabPane tabId="iconPills4">
                                            <p>
                                                설정에 들어가면 본인의 프로필을 수정할 수 있습니다.
                                            </p>
                                        </TabPane>
                                    </TabContent>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Tabs;
