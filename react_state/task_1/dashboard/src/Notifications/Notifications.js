import React from "react";
import close from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";
import { StyleSheet, css } from "aphrodite";

class Notifications extends React.Component {
  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }
  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length ||
      nextProps.displayDrawer !== this.props.displayDrawer
    );
  }
  render() {
    const {
      displayDrawer,
      listNotifications,
      handleDisplayDrawer,
      handleHideDrawer,
    } = this.props;
    return (
      <>
        {!displayDrawer && (
          <div className={css(styles.menuItem)} onClick={handleDisplayDrawer}>
            Your notifications
          </div>
        )}
        {displayDrawer && (
          <div className={css(styles.Notifications)}>
            <p className={css(styles.text)}>
              Here is the list of notifications{" "}
              <button
                aria-label="close"
                style={{ textAlign: "right", display: "inline" }}
                onClick={handleHideDrawer}
              >
                <img src={close} alt="close" height={20} width={20} />
              </button>
            </p>
            <ul className={css(styles.list)}>
              {listNotifications.length > 0 ? (
                listNotifications.map(({ id, type, value, html }) => (
                  <NotificationItem
                    id={id}
                    markAsRead={this.markAsRead}
                    key={id}
                    type={type}
                    value={value}
                    html={html}
                  />
                ))
              ) : (
                <NotificationItem value="No new notification for now" />
              )}
            </ul>
          </div>
        )}
      </>
    );
  }
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

const opacityKeyframes = {
  'from': {
    opacity: 0.5,
  },
  'to': {
    opacity: 1,
  }
};

const bounceKeyframes = {
  '0%': {
    transform: 'translateY(0px)',
  },
  '50%': {
    transform: 'translateY(-5px)',
  },
  '100%': {
    transform: 'translateY(5px)',
  }
};

const styles = StyleSheet.create({
  Notifications: {
    border: "2px solid pink",
    padding: "20px",
    '@media (max-width: 900px)': {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 9999,
      backgroundColor: "white",
      border: "none",
      padding: 0,
    }
  },

  text: { 
    display: "flex", 
    justifyContent: "space-between",
    '@media (max-width: 900px)': {
      fontSize: "20px",
    }
  },

  list: {
    '@media (max-width: 900px)': {
      padding: 0,
      listStyle: "none",
      margin: 0,
      fontSize: "20px",
    }
  },

  menuItem: {
    float: "right",
    backgroundColor: "#fff8f8",
    cursor: "pointer",
    ':hover': {
      animationName: [opacityKeyframes, bounceKeyframes],
      animationDuration: '1s, 0.5s',
      animationIterationCount: 3,
    }
  }
});

export default Notifications;
