import React from 'react';
import L from '@material-ui/core/List';
import Li from '@material-ui/core/ListItem';
import LiIcon from '@material-ui/core/ListItemIcon';
import LiText from '@material-ui/core/ListItemText';
// import Divider from '@material-ui/core/Divider';
import Home from '@material-ui/icons/Home';
import { Link } from '../../router';

function Nav() {
  return (
    <L>
      <Link route='/' passHref>
        <Li component='a'>
          <LiIcon><Home /></LiIcon><LiText primary='Home' />
        </Li>
      </Link>
    </L>
  );
}

export default Nav;
