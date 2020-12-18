import React from 'react';
import { Row, Col, Card, Skeleton } from 'antd';
import MyContext from '../context/my-context';

const Gobal = () => {
    return (
        <MyContext.Consumer>
            {context => {
                //console.log(context)
                if(context.Global === undefined) {
                    return<Skeleton active />
                }
                return (
                    <Row>
                        <Col span={8}>
                            <Card title="nhiem benh" bordered={true}>
                                <p>-moi nhiem :{context.Global.NewConfirmed}</p>
                                <p>-tong ca nhiem :{context.Global.TotalConfirmed}</p>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="tu vong" bordered={true}>
                                <p>-moi tu vong  :{context.Global.NewDeaths}</p>
                                <p>-tong ca tu vong :{context.Global.TotalDeaths}</p>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="khoi benh" bordered={true}>
                                <p>-moi khoi :{context.Global.NewRecovered}</p>
                                <p>-tong ca khoi :{context.Global.TotalRecovered}</p>
                            </Card>
                        </Col>
                    </Row>
                );
            }}

        </MyContext.Consumer>

    )
}
export default Gobal;