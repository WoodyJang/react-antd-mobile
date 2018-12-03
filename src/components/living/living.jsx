import React, { Component } from 'react';
import { ListView, DatePicker, List } from 'antd-mobile';
import './living.scss';

export class Living extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        };
    }

    render() {
        return <div>
            <header className='living-header'>
                <div className='header-item icon-pre' />
                <div className='header-item'>
                    <DatePicker mode='date' extra='Optional' value={this.state.date} onChange={date => this.setState(
                        { date },
                    )}>
                        <List.Item className='icon-picker'>
                        </List.Item>
                    </DatePicker>
                </div>
                <div className='header-item icon-next' />
            </header>
        </div>;
    }
}

export default Living;
