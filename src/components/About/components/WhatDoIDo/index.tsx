import React, { Dispatch } from 'react';
import reduxStore, { IStore } from '../../../../store';
import { IWidths } from '../../redux/reducers';
import { bindActionCreators } from 'redux';
import { setActiveAbout } from '../../redux/actions';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { WhatDoIDo } from './WhatDoIDo'

interface IPropsInternal {
    whoAmIActive: boolean;
    setActiveAbout: (isWhoAmIActive: boolean) => void;
}

const WhatDoIDoContainer: React.FC<IPropsInternal> = (props: IPropsInternal) => {
    const { whoAmIActive, setActiveAbout } = props

    const handleClick = () => {
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

  export default (connect(mapStateToProps, mapDispatchToProps)(WhatDoIDoContainer))