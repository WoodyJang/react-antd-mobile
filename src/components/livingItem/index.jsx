import React, { Component } from 'react';
import {
    Flex, List,
} from 'antd-mobile';
import './index.scss';


export default class LivingItem extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        const { item } = this.props;

        return (
            <Flex className='list-container'>
                <Flex className='left-icon'><img src={item.hometeamlogo} alt=''/></Flex>
                <Flex className='score left-score' direction='column' justify='between' align='center'>
                    <div className='team-score'>{item.homescore}</div>
                    <div className='team-name'>{item.hometeamname}</div>
                </Flex>
                <Flex justify='center' className='result'>{item.match_status ? item.match_status : item.time}</Flex>
                <Flex className='score left-score' direction='column' justify='between' align='center'>
                    <div className='team-score'>{item.visitscore}</div>
                    <div className='team-name'>{item.visitteamname}</div>
                </Flex>
                <Flex className='right-icon'><img src={item.visitteamlogo} alt='' /></Flex>
            </Flex>
        );
    }
}
