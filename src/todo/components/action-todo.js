import React from 'react';
import { Row, Col, Button } from 'antd';
import PropTypes from 'prop-types';

const finishedAndDeletedAllTodo = (props) => {
    return (
        <>
            <Row style={{ marginTop: '5px', marginBottom: '5px' }}>
                <Col span={24}>
                    <Button
                        type="dashed"
                        onClick={() => props.action('finishedAll')}

                    >Finished All</Button>
                    <Button
                        type="dashed"
                        onClick={() => props.action('DeleteAll')}
                        style={{marginLeft: '10px', marginRight: '10px'}}
                    >Delete All</Button>
                    {props.show && (<Button type="dashed" onClick={() => props.action('unfinishedAll')}>UnfinishedAll</Button>)}
                    
                </Col>

            </Row>
        </>
    )
}
finishedAndDeletedAllTodo.prototype = {
    actions: PropTypes.func.isRequired
}
export default React.memo(finishedAndDeletedAllTodo);