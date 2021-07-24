import { getTranslations } from 'api';
import { Languages } from 'models/languages';
import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { bindActionCreators } from 'redux';
import { IStore } from 'store';

import { Header } from './Header';
import { setCurrentPage, setLanguage, setTranslations } from './redux/actions';

type Props = RouteComponentProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

const HeaderContainer: React.FC<Props> = (props) => {

  const switchPage = (tabName: string) => {
    props.history.push(`/${ tabName }`);
    props.setCurrentPage(tabName);
  };

  const switchLanguage = async (language: Languages) => {
    const translations = await getTranslations(language);
    console.log(translations.data);
    props.setTranslations(translations.data);
    props.setLanguage(language);
  };

  return (
    <Header switchPage={ switchPage } switchLanguage={ switchLanguage } />
  );
};

const mapStateToProps = (store: IStore) => {
  return {
    currentPage: store.header.currentPage,
  };
};
  
const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    setCurrentPage,
    setLanguage,
    setTranslations,
  }, dispatch);
};
  
export default compose<Props, Record<string, unknown>>(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
)(HeaderContainer);

