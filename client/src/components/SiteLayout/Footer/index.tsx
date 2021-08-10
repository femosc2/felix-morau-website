import React, { useState } from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { bindActionCreators } from 'redux';
import { IStore } from 'store';

import { Footer } from './Footer';


type Props = RouteComponentProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

const FooterContainer: React.FC<Props> = (props) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const onScroll = (e: any) => {
      setScrollPosition(e.target.documentElement.scrollTop);
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollPosition]);

  return (
    <Footer currentPage={props.currentPage} isAtTop={scrollPosition < 10} />
  );
};

const mapStateToProps = (store: IStore) => {
  return {
    currentPage: store.header.currentPage,
  };
};
  
const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
  }, dispatch);
};
  
export default compose<Props, Record<string, unknown>>(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
)(FooterContainer);

