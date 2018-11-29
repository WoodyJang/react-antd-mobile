import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
import './home.scss';

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
        },
        {
          id: 2,
          name: 'NBA资讯',
          class: 'news',
          classActive: 'news-active',
        },
        {
          id: 3,
          name: '球队战绩',
          class: 'rank',
          classActive: 'rank-active',
        },
        {
          id: 4,
          name: '数据统计',
          class: 'stats',
          classActive: 'stats-active',
        },
      ],
      tabBarItem: [],
    };
  }

  renderContent(pageText) {
    return (
      <div
        style={{
          backgroundColor: 'white',
          height: '100%',
          textAlign: 'center',
        }}
      >
        <div style={{ paddingTop: 60 }}>
          Clicked “{pageText}” tab， show “{pageText}” information
        </div>
        <span
          style={{
            display: 'block',
            marginTop: 40,
            marginBottom: 20,
            color: '#108ee9',
          }}
          onClick={e => {
            e.preventDefault();
            this.setState({
              hidden: !this.state.hidden,
            });
          }}
        >
          Click to show/hide tab-bar
        </span>
        <span
          style={{ display: 'block', color: '#108ee9' }}
          onClick={e => {
            e.preventDefault();
          }}
        >
          Click to switch fullscreen
        </span>
      </div>
    );
  }

  render() {
    let { tabItems, tabBarItem } = this.state;
    tabBarItem = tabItems.map((item, index) => {
      return (
        <TabBar.Item
          title={item.name}
          key={item.name}
          icon={<div className={'itemIcon ' + item.class} />}
          selectedIcon={<div className={'itemIcon ' + item.classActive} />}
          selected={this.state.selectedTab === item.id}
          onPress={() => {
            this.setState({
              selectedTab: item.id,
            });
          }}
        >
          {this.renderContent(item.name)}
        </TabBar.Item>
      );
    });
    return (
      <div className="home">
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#00aa98"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          {tabBarItem}
        </TabBar>
      </div>
    );
  }
}

export default home;
