import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import Header from '../../components/Header/Header'

function IndexPage() {
  return (
    <div className={styles.normal}>
      <Header/>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
