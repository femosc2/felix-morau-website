import React, { useState } from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { bindActionCreators } from 'redux';
import { IStore } from 'store';

import { CookieBar } from './CookieBar';
import { setIsShowing } from './redux/actions';


type Props = RouteComponentProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

const CookieBarContainer: React.FC<Props> = (props) => {

  const [isCookiesEnabled, setIsCookiesEnabled] = useState(props.isShowing);

  useEffect(() => {
    setIsCookiesEnabled(localStorage.getItem('cookies') === null);
    console.log(props.isShowing);
}, [props.isShowing]);

  return (
    <CookieBar isShowing={isCookiesEnabled} setIsShowing={props.setIsShowing} />
  );
};

const mapStateToProps = (store: IStore) => {
  return {
    isShowing: store.cookieBar.isShowing,
  };
};
  
const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    setIsShowing,
  }, dispatch);
};
  
export default compose<Props, Record<string, unknown>>(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
)(CookieBarContainer);

