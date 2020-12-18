import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Skeleton, Button, Pagination } from 'antd';
import { api } from '../../service/api';

const { Meta } = Card;

const User = () => {
    const [loading, setLoading] = useState(false);
    const [user, setListUser] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    const [previous, showPrevious] = useState(false);
    const [next, showNext] = useState(false);
    const [totalItems, setTotalItems] = useState([]);

    useEffect(() => {
        const getData = async () => {
            //call data tu Api
            await setLoading(true);
            const listUser = await api.getDatUsers(page);
            if (listUser) {
                await setListUser(listUser.data);
                await setTotalPage(listUser.total_pages);
                await setTotalItems(listUser.total);
                await setLoading(false);
                //can kiem tra page
                if (page < 1) {
                    setPage(1);
                } else if (page > listUser.total_pages) {
                    setPage(listUser.total_pages);
                }
                //check viec hen thi nut previous 
                if (page > 1 && page <= listUser.total_pages) {
                    showPrevious(true);

                } else {
                    showPrevious(false);
                }
                //check viec hen thi nut  next
                if (page < listUser.total_pages && page >= 1) {
                    showNext(true);
                } else {
                    showNext(false);
                }
            }
        }
        getData();
    }, [page]); //muon sd nhu la componetdidmout hay nhu la componetdidupdate

    const previousAndNextPage = (type) => {
        if (type === 'previous') {
            if (page > 1) {
                setPage(page - 1);
            }

        } else if (type === 'next') {
            if (page < totalPage) {
                setPage(page + 1);
            }
        }
    }
    const changePage = (currentPage) => {
        setPage(currentPage);
    }
    if (loading || user.length === 0) {
        return (<Skeleton active />);

    }

    return (
        <>
            <Row style={{ marginTop: '20px', marginBottom: '20px' }}>
                {user.map((item, index) => (
                    <Col span={8} key={index}>
                        <Card
                            hoverable
                            style={{ width: 200 }}
                            cover={<img alt="example" src={item.avatar} />}
                        >
                            <Meta title={item.first_name} description={item.email} />

                        </Card>
                    </Col>
                ))}

            </Row>

            <Row style={{ marginTop: '20px', marginBottom: '60px', textAlign: 'center' }}>
                <Col span={12} offset={6}>
                    {previous && (<Button
                        onClick={() => previousAndNextPage('previous')}
                        type="primary">Previous</Button>)}
                    {next && <Button
                        onClick={() => previousAndNextPage('next')}
                        type="primary" style={{ marginLeft: '10px' }}>next</Button>}

                </Col>
            </Row>
            <Row style={{ marginTop: '20px', marginBottom: '60px', textAlign: 'center' }}>
                <Col span={24}>
                    <Pagination
                        current={page}
                        pageSize={3}
                        total={totalItems}
                        onChange={(currentPage) => changePage(currentPage)}
                    />
                </Col>

            </Row>
        </>
    )

}
export default React.memo(User);