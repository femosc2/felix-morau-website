import { COLORS } from './colors';
import { IParticlesParams } from 'react-particles-js';

const c = { ...COLORS };

export const aboutParams: IParticlesParams = {
  'particles': {
    'number': {
      'value': 300,
      'density': {
        'enable': true,
        'value_area': 1500,
      },
    },
    'color': {
      'value': c.red,
    },
    'line_linked': {
      'enable': true,
      'opacity': 0.25,
      'color': c.red,
        
    },
    'move': {
      'speed': 2,
      'attract': {
        'enable': false,
      },
    },
    'size': {
      'value': 2,
    },
    'opacity': {
      'anim': {
        'enable': false,
        'speed': 20,
        'opacity_min': 0.05,
      },
    },
  },
  'interactivity': {
    'events': {
      'onhover': {
        'enable': true,
        'mode': 'grab',
      },
      'onclick': {
        'enable': true,
        'mode': 'repulse',
      },
      'resize': true,
    },
    'modes': {
      'repulse': {
        'distance': 50,
        'duration': 0.25,
      },
    },
  },
  'retina_detect': true,
};

export const loaderParams: IParticlesParams = {
  'particles': {
    'number': {
      'value': 100,
    },
    'color': {
      'value': c.red,
    },
    'move': {
      'speed': 0,
      'bounce': true,
      'straight': false,
      'attract': {
        'rotateX': 10,
        'rotateY': 10,
      },
    },
    'shape': {
      'type': 'edge',
    },
    'line_linked': {
      'enable': false,
    },
    'size': {
      'value': 5,
      'random': true,
      'anim': {
        'speed': 40,
        'size_min': 0.3,
      },
    },
    'opacity': {
      'value': 1,
      'anim': {
        'enable': true,
        'speed': 10,
        'opacity_min': 0.01,
      },
    },
  },
  'retina_detect': true,
};
