import React from 'react';
import App, { Container as NextContainer } from 'next/app';
import Nav from '../components/nav';
import "../sass/app.scss"

const user= { name: "Cocoa", role: "admin", level: 100, isLoggedIn: true };
class Lolibrary extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
  const { Component, pageProps } = this.props;
  return (

<NextContainer>
    <a className="sr-only sr-only-focusable" href="#skip-navigation">Skip to Content</a>
        <Nav user={user} />
        <main className="py-4" id="skip-navigation" style={{MarginTop: "55px"}}>
          <Component {...pageProps} />
        </main>
        <footer className="footer mt-4 py-5 text-muted">
            <div className="container">
                <p className="npo-statement">Lolibrary Inc is a 501(c)(3) non-profit incorporated in the USA.</p>

                <p>
                    Powered by <a href="https://www.fastly.com" title="Fastly" rel="external nofollow">
                        <img style={{height: "1.5rem"}} src="{{ cdn_link('assets/fastly.svg') }}" alt="Fastly" />
                    </a>
                </p>

            </div>
        </footer>

</NextContainer>
    
       
        )
}
}

export default Lolibrary;