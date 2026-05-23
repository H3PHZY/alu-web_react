import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const rowStyle = isHeader ? styles.headerRow : styles.defaultRow;

  return (
    <tr className={css(rowStyle)}>
      {isHeader && (
        <>
          {textSecondCell === null ? (
            <th className={css(styles.thStyle)} data-testid="course-table-header" colSpan="2">
              {textFirstCell}
            </th>
          ) : (
            <>
              <th className={css(styles.thStyle, styles.thSubHeaderStyle)} data-testid="course-table-header">
                {textFirstCell}
              </th>
              <th className={css(styles.thStyle, styles.thSubHeaderStyle)} data-testid="course-table-header">
                {textSecondCell}
              </th>
            </>
          )}
        </>
      )}
      {!isHeader && (
        <>
          <td className={css(styles.tdStyle)} data-testid="course-table-body">
            {textFirstCell}
          </td>
          <td className={css(styles.tdStyle)} data-testid="course-table-body">
            {textSecondCell}
          </td>
        </>
      )}
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textFirstCell: 'Holberton',
  textSecondCell: null,
};

const styles = StyleSheet.create({
  headerRow: {
    backgroundColor: '#deb5b545',
  },
  defaultRow: {
    backgroundColor: '#f5f5f5ab',
  },
  thStyle: {
    borderBottom: '1px solid grey',
  },
  thSubHeaderStyle: {
    textAlign: 'left',
  },
  tdStyle: {
    textAlign: 'left',
  },
});

export default CourseListRow;
