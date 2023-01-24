import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/ProductCard';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import GetAppRoundedIcon from '@mui/icons-material/GetAppRounded';
import Chip from '@mui/joy/Chip';
import {CssVarsProvider} from '@mui/joy/styles';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';

// Data Start

const SolutionsList = [
  {
    name: 'Deployable',
    description: (
      <>
        Free Domain is Here! Publish a site on prathamgupta.in/yoursitename.
        Please fill our form to access.
      </>
    ),
    button: (
      <>
        <Link
          className="button button--primary"
          href="https://docs.google.com/forms/d/e/1FAIpQLSfKuuT46JOjpS3St5IJOceysJPVxQ3cOiLvE9F3XuIjco9AnA/viewform">
          Get Access!
        </Link>
      </>
    ),
  },
];

const WebsitesList = [
  {
    name: 'Searcher 2.0',
    description: (
      <>
        Our Top Search Engine, Searcher is BACK! It Has the Power of <b>6</b>{' '}
        Search Engines. Get it Now!
      </>
    ),
    button: (
      <>
        <Link className="button button--primary" to="/searcher">
          Search Now!
        </Link>
      </>
    ),
  },
];

const GamesList = [
  {
    name: 'FlappyCloud',
    description: (
      <>
        Battle with TOP 5 players to get popular. FlappyCloud Lets you enjoy the
        original flappybird with a TWIST. Harder, Better, And Smoother. Get it
        NOW here!
      </>
    ),
    button: (
      <div className="button-group button-group--block">
        <Link
          className="button button--primary"
          href="http://prathamgupta.in/FlappyCloud.apk">
          Download
        </Link>
        <Link className="button button--primary" href="/docs/FlappyCloud">
          Update Log
        </Link>
      </div>
    ),
  },
];

interface Props {
  name: string;
  url: {
    download?: string;
    page?: string;
    type?: string;
    github?: string;
  };
  description: JSX.Element;
  button: JSX.Element;
}

// Data End and Functions Start

function ProductCard({name, url, description, button}: Props) {
  return (
    <CssVarsProvider>
      <div className="col col--12 margin-bottom--lg">
        <div className={clsx('card')}>
          {/* {image && (
            <div className={clsx('card__image')}>
              <Link to={url.page}>
                <img src={image} alt={name} title={name}></img>
              </Link>
            </div>
          )} */}
          <div className="card__body">
            <h3>{name}</h3>
            {description && <p>{description}</p>}
          </div>
          <div className="card__footer">
            <div className="button-group button-group--block">{button}</div>
          </div>
        </div>
      </div>
    </CssVarsProvider>
  );
}

export function Products(): JSX.Element {
  return (
    <>
      <div>
        <section>
          <h2 className="featuresHeading">SaaS Solutions</h2>
          <div className="features">
            <div className="col col--12">
              <div className="row">
                {SolutionsList.map((games) => (
                  <>
                    <ProductCard
                      url={{
                        download: '',
                        page: '',
                        type: '',
                        github: '',
                      }}
                      description={undefined}
                      button={undefined}
                      key={games.name}
                      {...games}
                    />
                    <br />
                  </>
                ))}
              </div>
            </div>
          </div>
          <hr />
        </section>
        <section>
          <h2 className="featuresHeading">Websites</h2>
          <div className="features">
            <div className="col col--12">
              <div className="row">
                {WebsitesList.map((games) => (
                  <>
                    <ProductCard
                      button={undefined}
                      key={games.name}
                      {...games}
                    />
                    <br />
                  </>
                ))}
              </div>
            </div>
          </div>
          <hr />
        </section>
        <section>
          <h2 className="featuresHeading">Games</h2>
          <div className="features">
            <div className="col col--12">
              <div className="row">
                {GamesList.map((games) => (
                  <>
                    <ProductCard key={games.name} {...games} />
                    <br />
                  </>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
