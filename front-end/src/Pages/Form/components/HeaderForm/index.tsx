import {Flex} from '@chakra-ui/react';
import React, {Fragment} from 'react';
import icon1 from '../../../../assets/icon-step1.svg';
import icon2 from '../../../../assets/icon-step2.svg';
import icon3 from '../../../../assets/icon-step3.svg';
import {IconLogo} from './iconModule';
import {useFormContext} from '../../../../contexts/FormContext';

const HeaderForm: React.FC = () => {
  const {step} = useFormContext();

  const newuStep = step - 1;

  // refactor logic
  const steps = [
    [
      {initial: true, active: true, lineBefore: true},
      {lineBefore: true},
    ],
    [
      {lineBefore: true, concluded: true},
      {active: true, lineBefore: true},
    ],
    [
      {initial: true, lineBefore: true, concluded: true},
      {lineBefore: true, concluded: true},
      {active: true},
    ],
    [
      {initial: true, lineBefore: true, concluded: true},
      {lineBefore: true, concluded: true},
      {concluded: true},
    ],
  ];

  const render = [
    {id: 1, component: <IconLogo icon={icon1}
      {...steps[newuStep][0]} />},
    {id: 2, component: <IconLogo icon={icon2}
      {...steps[newuStep][1]} />},
    {id: 3, component: <IconLogo icon={icon3}
      {...steps[newuStep][2]} />},
  ];

  return (
    <Flex justifyContent={'center'}>
      {
        render.map((item) => <Fragment key={item.id}>
          {item.component}
        </Fragment>,
        )
      }
    </Flex>
  );
};

export default HeaderForm;
