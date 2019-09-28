import PropTypes from 'prop-types';
import styles from './index.css';

function BasicLayout({ children }) {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>SoftExpert Analytics</h1>
      {children}
    </div>
  );
}

BasicLayout.propTypes = {
  children: PropTypes.node
};

export default BasicLayout;
