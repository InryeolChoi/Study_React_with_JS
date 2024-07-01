import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        id : 1,
        message : "인제 갑니다.",
    },
    {
        id : 2,
        message : "문 열어 주세요",
    },
    {
        id : 3,
        message : "오늘 재밌었어요!",
    },
];

var timer;

class NotificationList extends React.Component {
    constructor(props) { // 마운팅
        super(props);

        this.state = {
            notifications : [],
        };
    }

    componentDidMount() { // 마운팅
        const { notifications } = this.state;
        timer = setInterval(() => {
            if (notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                console.log(index)
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications: notifications,
                });
            } else {
                this.setState({
                    notifications: [],
                })
            }
        }, 1000);
    }
    render() {
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return <Notification 
                                key={notification.key}
                                id={notification.id}
                                message={notification.message} />;
                })}
            </div>
        );
    }
}

export default NotificationList;