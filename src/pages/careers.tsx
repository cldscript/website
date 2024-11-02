import Layout from '@theme/Layout';
import clsx from 'clsx';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function CareersHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.careersBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Be part of our mission
        </Heading>
        <p className="hero__subtitle">
          We're always looking for passionate individuals to join our team. We value flat hierarchies, open communication, and full ownership and responsibility.
        </p>
      </div>
    </header>
  );
}

function CareersPills() {
  return (
    <ul className={clsx("pills pills--block", styles.careersPills)}>
      <li className="pills__item pills__item--active">All</li>
      <li className="pills__item">Design</li>
      <li className="pills__item">Engineering</li>
      <li className="pills__item">Management</li>
      <li className="pills__item">Marketing</li>
      <li className="pills__item">Operations</li>
    </ul>
  );
}

function CareersItem() {
  return (
    <div className='row'>
      <hr />
    </div>
  )
}

function CareersList() {
  return (
    <div className="container">
      <div className="col col--8 col--offset-2">
        <CareersItem />
      </div>
    </div>
  );
}

export default function Careers() {
  return (
    <Layout
      title="Careers"
      description="">
      <CareersHeader />
      <main>
        <CareersPills />
        <CareersList />
      </main>
    </Layout>
  );
}
