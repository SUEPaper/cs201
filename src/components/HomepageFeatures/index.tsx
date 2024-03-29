import React from 'react';


import CourseInfos from '../CourseInfos';
import Schedules from '../Schedules';
import Teachers from '../Teachers';
import TAs from '../TAs';
import Maintainers from '../Maintainers';

import styles from './index.module.css';

export default function HomepageFeatures(): JSX.Element {
  return (
      <div className="container w-4/5 mt-14 mx-auto">
        <CourseInfos />
        <Teachers />
        <TAs />
        <Maintainers />
      </div>
  );
}
