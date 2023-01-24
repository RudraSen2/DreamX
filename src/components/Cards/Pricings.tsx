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
    name: 'Website Me',
    description: (
      <>
        Website only at ₹5000. WordPress development if customer says. Charges
        apply on extras.
      </>
    ),
    button: (
      <>
        <Link className="button button--primary" to="/contact">
          Contact us!
        </Link>
      </>
    ),
  },
];

const WebsitesList = [
  {
    name: 'Applifer',
    description: <>Android© App with App on Google Play© only at ₹10,000</>,
    button: (
      <>
        <Link className="button button--primary" to="/contact">
          Contact us!
        </Link>
      </>
    ),
  },
];

const GamesList = [
  {
    name: 'Combined Packager',
    description: <>All features in Website Me and Applifer only at ₹12,500</>,
    button: (
      <Link className="button button--primary" to="/contact">
        Contact us!
      </Link>
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
          <h2 className="featuresHeading">Web package</h2>
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
          <h2 className="featuresHeading">App packages</h2>
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
          <h2 className="featuresHeading">Two in ones</h2>
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
