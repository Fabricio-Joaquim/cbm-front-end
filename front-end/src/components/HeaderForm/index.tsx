import {Flex} from '@chakra-ui/react';
import React, {Fragment} from 'react';
import icon1 from '../../assets/icon-step1.svg';
import icon2 from '../../assets/icon-step2.svg';
import {IconLogo} from './iconModule';
import icon3 from '../../assets/icon-step3.svg';

const HeaderForm: React.FC = () => {
  const [state, setState] = React.useState(1);

  const steps = [
    [
      {initial: true, active: true, lineBefore: true},
      {initial: false, active: false, lineBefore: true},
      {initial: false, active: false, lineBefore: false},
    ],
    [
      {initial: false, active: false, lineBefore: true, concluded: true},
      {initial: false, active: true, lineBefore: true},
    ],
    [
      {initial: true, active: false, lineBefore: true, concluded: true},
      {initial: false, active: false, lineBefore: true, concluded: true},
      {initial: false, active: true, lineBefore: false},
    ],
    [
      {initial: true, active: false, lineBefore: true, concluded: true},
      {initial: false, active: false, lineBefore: true, concluded: true},
      {initial: false, active: false, lineBefore: false, concluded: true},
    ],
  ];

  const render = [
    {id: 1, component: <IconLogo icon={icon1}
      {...steps[state][0]} />},
    {id: 2, component: <IconLogo icon={icon2}
      {...steps[state][1]} />},
    {id: 3, component: <IconLogo icon={icon3}
      {...steps[state][2]} />},
  ];

  return (
    <Flex w={'fit-content'}>
      {render.map((item) => <Fragment key={item.id}>
        {item.component}
      </Fragment>,
      )}
      <button onClick={()=>setState((state)=>state-1)}>BUTONMINUS-</button>
      <button onClick={()=>setState((state)=>state+1)}>BUTTONMAS-</button>
      {state}
    </Flex>
  );
};

export default HeaderForm;
