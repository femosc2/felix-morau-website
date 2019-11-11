import React, { useEffect } from 'react';
import { IStore } from '../../../../store';
import { bindActionCreators } from 'redux';
import { setActiveAbout } from '../../redux/actions';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { WhoAmI } from './WhoAmI';
import { withRouter, RouteComponentProps } from 'react-router';
import { ITimelineEvent } from './index';

interface IPropsInternal {
    whoAmIActive: boolean;
    setActiveAbout: (isWhoAmIActive: boolean) => void;
}

export interface ITimelineEvent {
    date: string;
    event: string;
}


type Props = IPropsInternal & RouteComponentProps

const WhoAmIContainer: React.FC<Props> = (props: Props) => {
  const { whoAmIActive, setActiveAbout } = props;

  const timelineEvents: ITimelineEvent[] = [
    {
      date: '2019-08-26',
      event: 'Completed my trainee assignment and was assigned to AWA as a front-end web developer',
    },
    {
      date: '2019-07-02',
      event: 'Started at HiQ as a trainee',
    },
    {
      date: '2018-02-04',
      event: 'Launched felixmorau.se',
    },
    {
      date: '2017-11-02',
      event: 'Wrote my first Hello World in Python',
    },
    {
      date: '2017-08-24',
      event: 'Started studying Computer Science at Malmö University',
    },
    {
      date: '2017-01-21',
      event: 'Started coding with HTML & CSS',
    },
  ];

  useEffect(() => {
    window.location.href.includes('me') ? setActiveAbout(false) : console.log('lol');
  }, []);

  const handleClick = () => {
    whoAmIActive ? props.history.push('/about/me') : console.log('lol');
    whoAmIActive ? setActiveAbout(false) : console.log('lol');
  };
  return (
    <>
      <WhoAmI handleClick={ handleClick } whoAmIActive={ whoAmIActive} timelineEvents={ timelineEvents } />
    </>
  );
};

const mapStateToProps = (store: IStore) => {
  return {
    whoAmIActive: store.about.whoAmIActive,
  };
};


const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    setActiveAbout,
  }, dispatch);
};

export default compose<Props, {}>(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
)(WhoAmIContainer);
