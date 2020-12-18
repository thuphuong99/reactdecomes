import React from 'react';
import { Row, Col, Table , Skeleton} from 'antd';
import MyContext from '../context/my-context';
const Countries = () => {
    const columns = [
        {
            title: 'Ngay', //tieu de
            dataIndex: 'date', //du lieu lat do data
            key: 'date'

        },
        {
            title: 'Quoc gia',
            dataIndex: 'Country',
            key: 'Country'
        },
        {
            title: 'Moi nhiem',
            dataIndex: 'NewConfirmed',
            key: 'NewConfirmed'

        },
        {
            title: 'Tong ca nhiem',
            dataIndex: 'TotalConfirmed',
            key: 'TotalConfirmed'

        },
        {
            title: ' Tu vong',
            dataIndex: 'NewDeaths',
            key: 'NewDeaths'
        },
        {
            title: ' Tong tu vong',
            dataIndex: 'TotalDeaths',
            key: 'TotalDeaths'
        },
        {
            title: ' Khoi benh',
            dataIndex: 'NewRecovered',
            key: 'NewRecovered'
        },
        {
            title: 'Tong khoi benh',
            dataIndex: 'TotalRecovered',
            key: 'TotalRecovered'
        }

    ];
    //tao du lieu mau
   /*  const data = [
        {
            Date: '2020-01-01',
            Country: 'Viet Nam',
            NewConfirmed: 2123,
            TotalConfirmed: 32222224,
            NewDeaths: 3324,
            TotalDeaths: 34354,
            NewRecovered: 121213,
            TotalRecovered: 1212
        },

    ]; */
    return (
        <MyContext.Consumer>
            {context => {
               
                if(context.Global === undefined) {
                    return<Skeleton active />
                }
                return(
                <Row style={{ marginTop: '20px', marginBottom: '20px' }}>
                    <Col span={24}>
                        <Table
                            dataSource={context.Countries}
                            columns={columns}
                        />
                    </Col>
                </Row>
                )
            }}


        </MyContext.Consumer>
    )
}
export default Countries;