import React, { memo } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

function NotificationItem({ type, value, html, markAsRead, id }) {
  const itemStyle = type === 'urgent' ? styles.urgent : styles.default;
  if (html) {
    const rawHtml = typeof html === 'string' ? { __html: html } : html;
    return (
      <li className={css(itemStyle)} onClick={() => markAsRead(id)} data-priority={type} dangerouslySetInnerHTML={rawHtml}></li>
    );
  } else {
    return <li className={css(itemStyle)} onClick={() => markAsRead(id)} data-priority={type}>{value}</li>;
  }
}

NotificationItem.propTypes = {
  html: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({ __html: PropTypes.string }),
  ]),
  value: PropTypes.string,
  type: PropTypes.string,
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {},
  id: 0,
};

const styles = StyleSheet.create({
  default: {
    color: 'blue',
  },
  urgent: {
    color: 'red',
  }
});

export default memo(NotificationItem);
