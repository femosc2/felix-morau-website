import React, { Dispatch, useEffect } from 'react';
import reduxStore, { IStore } from '../../../../store';
import { IWidths } from '../../redux/reducers';
import { bindActionCreators } from 'redux';
import { setActiveAbout } from '../../redux/actions';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { WhatDoIDo } from './WhatDoIDo'
import { RouteComponentProps, withRouter } from 'react-router';

interface IPropsInternal {
    whoAmIActive: boolean;
    setActiveAbout: (isWhoAmIActive: boolean) => void;
}


type Props = IPropsInternal & RouteComponentProps

const WhatDoIDoContainer: React.FC<Props> = (props: Props) => {
    const { whoAmIActive, setActiveAbout } = props

    useEffect(() => {
        window.location.href.includes("skills") ? setActiveAbout(true) : setActiveAbout(false);
    }, [])

    const handleClick = () => {
        whoAmIActive ? props.history.push("/about/me") : props.history.push("/about/skills")
        whoAmIActive ? setActiveAbout(false) : setActiveAbout(true);
    }

    return (
        <>
            <WhatDoIDo handleClick={ handleClick } whoAmIActive={ whoAmIActive} />
        </>
    )
}

const mapStateToProps = (store: IStore) => {
    return {
        whoAmIActive: store.about.whoAmIActive
    };
};


const mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators({
      setActiveAbout
    }, dispatch);
  };

  export default compose<Props, {}>(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
  )(WhatDoIDoContainer)