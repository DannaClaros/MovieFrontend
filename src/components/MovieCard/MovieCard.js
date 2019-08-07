import React from 'react';
import { Card, Icon, Avatar } from 'antd';

const { Meta } = Card;

class MovieCard extends React.Component {

    state = {
    }

    render() {
        return (
            <Card
                style={{ width: 300 }}
                cover={
                    <img
                        alt="example"
                        src= {this.props.url}
                    />
                }
                actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
            >
                <Meta
                   // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={this.props.name}
                    description={this.props.descrip}
                />
            </Card>
            /* <div >
                 <h3> {this.props.id} {this.props.name}</h3>
             </div>*/
        );
    }

}

export default MovieCard;
