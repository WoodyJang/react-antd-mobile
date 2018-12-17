import React, { Component } from 'react';
import {
    Flex, ListView, DatePicker, List,
} from 'antd-mobile';
import './living.scss';
import LivingItem from '../livingItem/index.jsx';
import api from '../../api/index.jsx';

export class Living extends Component {
    // constructor(props) {
    //     super(props);
    //     // this.state = {
    //     //     livingData: {},
    //     // };
    //     // this.bindDateChange = this.bindDateChange.bind(this);
    //     // this.bindData = this.bindData.bind(this);
    // }

    // componentDidMount() {
    //     this.nba_schedule();
    // }

    // async nba_schedule(params) {
    //     let res = await api.nba_schedule({
    //         date: params,
    //     });

    //     console.log(res);
    //     this.setState({
    //         livingData: res.data,
    //     });
    // }

    bindDateChange(date) {
        let select = new Date(date);
        let date_value = `${select.getFullYear()}-${select.getMonth() + 1}-${select.getDate()}`;

        this.props.bindDateChange(date_value);
    }

    bindData(e) {
        console.log(e);
        this.props.bindData(e.target.dataset.time);
    }

    render() {
        const {
            lists: {
                pre_date, list, cur_date, next_date,
            },
        } = this.props;

        console.log(list);
        const listItems = list && list.map((item, index) => <li key={index}><LivingItem item={item}></LivingItem></li>);

        return <div>
            <header className='living-header'>
                <div className='header-item icon-pre' onClick={e => this.bindData(e)} data-time={pre_date} />
                <div className='header-item'>
                    <DatePicker mode='date' format='YYYY-MM-DD' extra='Optional' value={new Date(cur_date)} onChange={date => this.bindDateChange(date)}>
                        <List.Item className='icon-picker'>
                        </List.Item>
                    </DatePicker>
                </div>
                <div className='header-item icon-next' onClick={e => this.bindData(e)} data-time={next_date}/>
            </header>
            <ul>{listItems}</ul>
        </div>;
    }
}

export default Living;
