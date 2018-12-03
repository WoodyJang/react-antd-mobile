import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
import Living from '../living/living.jsx';
import './home.scss';
import api from '../../api/index.jsx';

class home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 1,
            hidden: false,
            fullScreen: false,
            tabItems: [
                {
                    id: 1,
                    name: '赛事直播',
                    class: 'living',
                    classActive: 'living-active',
                    style: {
                        backgroundImage: `url('${require('../../assets/images/ball.png')}')`,
                    },
                    styleActive: {
                        backgroundImage: `url('${require('../../assets/images/ball-active.png')}')`,
                    },
                },
                {
                    id: 2,
                    name: 'NBA资讯',
                    class: 'news',
                    classActive: 'news-active',
                    style: {
                        backgroundImage: `url('${require('../../assets/images/news.png')}')`,
                    },
                    styleActive: {
                        backgroundImage: `url('${require('../../assets/images/news-active.png')}')`,
                    },
                },
                {
                    id: 3,
                    name: '球队战绩',
                    class: 'rank',
                    classActive: 'rank-active',
                    style: {
                        backgroundImage: `url('${require('../../assets/images/rank.png')}')`,
                    },
                    styleActive: {
                        backgroundImage: `url('${require('../../assets/images/rank-active.png')}')`,
                    },
                },
                {
                    id: 4,
                    name: '数据统计',
                    class: 'stats',
                    classActive: 'stats-active',
                    style: {
                        backgroundImage: `url('${require('../../assets/images/stats.png')}')`,
                    },
                    styleActive: {
                        backgroundImage: `url('${require('../../assets/images/stats-active.png')}')`,
                    },
                },
            ],
            tabBarItem: [],
        };
    }

    componentDidMount() {
        api.nab_schedule();
    }

    renderContent(pageText) {
        return (
            <div
                style={{
                    backgroundColor: 'white',
                    height: '100%',
                    textAlign: 'center',
                }}>
                <div style={{ paddingTop: 60 }}>
                    {`Clicked “${pageText}” tab， show “${pageText}” information`}
                </div>
                <span>Click to show/hide tab-bar</span>
                <span>Click to switch fullscreen</span>
            </div>
        );
    }

    render() {
        const { tabItems, selectedTab, hidden } = this.state;
        let { tabBarItem } = this.state;

        tabBarItem = tabItems.map(item => (
            <TabBar.Item
                title={item.name}
                key={item.name}
                icon={
                    <div
                        className={`itemIcon ${item.class}`}
                        style={item.style}
                    />
                }
                selectedIcon={
                    <div
                        className={`itemIcon ${item.classActive}`}
                        style={item.styleActive}
                    />
                }
                selected={selectedTab === item.id}
                onPress={() => {
                    this.setState({
                        selectedTab: item.id,
                    });
                }}
            >
                <Living />
            </TabBar.Item>
        ));
        return (
            <div className='home'>
                <TabBar
                    unselectedTintColor='#949494'
                    tintColor='#00aa98'
                    barTintColor='white'
                    hidden={ hidden }>
                    { tabBarItem }
                </TabBar>
            </div>
        );
    }
}

export default home;
