import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const ContactPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Acerca de — {site.siteMetadata.title}</title>
        <meta name="description" content={"Contact page of " + site.siteMetadata.description} />
      </Helmet>
      <div className="two-grids -contact">
        <div className="post-thumbnail" style={{backgroundImage: `url('/assets/circles-light.png')`, marginBottom: 0}}>
          <h1 className="post-title">Vamos a charlar un poco!</h1>
          <p>Puedes contactarme a mis redes &rarr;</p>
        </div>
        <div className="social">
        <h2 className="redes"><a href="https://twitter.com/christianEdSV">Twitter</a></h2>
        <h2 className="redes"><a href="https://www.linkedin.com/in/christian-hernandez-531bb494/">Linkedin</a></h2>
        <h2 className="redes"><a href="https://github.com/christianEdsv">Github</a></h2>
        </div>
      </div>
    </Layout>
  )
}
export default ContactPage
export const pageQuery = graphql`
  query ContactPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`