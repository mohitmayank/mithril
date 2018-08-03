import React from "react";
import Link from "next/link";
import { inject, observer } from "mobx-react";
import { object } from "prop-types";
import Clock from "./Clock";


const links = [
  { href: "https://github.com/segmentio/create-next-app", label: "Github" },
].map((link) => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

@inject("store") @observer
class Nav extends React.Component {
  componentDidMount() {
    this.props.store.start();
  }

  componentWillUnmount() {
    this.props.store.stop();
  }

  render() {
    return (
      <nav>
        <Clock lastUpdate={this.props.store.lastUpdate} light={this.props.store.light} />
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/index2">
              <a>Two</a>
            </Link>
          </li>
          <ul>
            {links.map(
              ({ key, href, label }) => (
                <li key={key}>
                  <Link href={href}>
                    <a>{label}</a>
                  </Link>
                </li>
              ),
            )}
          </ul>
        </ul>

        <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system,BlinkMacSystemFont,Avenir Next,Avenir,Helvetica,sans-serif;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
      </nav>
    );
  }
}

Nav.propTypes = {
  store: object,
};


export default Nav;
