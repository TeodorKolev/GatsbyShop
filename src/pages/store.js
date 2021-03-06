import React, { Component } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import StarRatingComponent from "react-star-rating-component"
import { prodUrl } from "../utils/constants"
import QRCode from "qrcode"

class IndexPost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      NoOfPost: 6,
      priceAskedIds: {}
    }
    this.handleScroll = this.handleScroll.bind(this)
    this.canvasRefs = {}
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll = () => {
    var lastScrollY = window.pageYOffset + 1100

    if (lastScrollY > window.outerHeight) {
      var count = this.state.NoOfPost + 3
      this.setState({
        NoOfPost: count,
      })
    }
  }

  getPrice = (id, price) => {
    const priceString = '$ ' + price.toString()
    QRCode.toCanvas(this.canvasRefs[`canvas-${id}`], priceString, (error) => {
      if (error) console.error('Error: ' + error)
    })

    this.setState(previousState => {
      const priceAskedIds = { ...previousState.priceAskedIds }
      priceAskedIds[id] = !priceAskedIds[id]
      return { priceAskedIds }
    })
  }

  render() {
    const { data } = this.props
    const { NoOfPost } = this.state

    return (
      <React.Fragment>
        <div className="row product-main" onScroll={this.onScrollEvent}>
          {data.data.allContentfulProduct.edges
            .slice(0, NoOfPost)
            .map(items => (
              <div
                className="Catalogue__item col-sm-12 col-md-6 col-lg-4"
                key={items.node.id}
              >
                <div className="details_List">
                  {items.node.image === null ? (
                    <div className="no-image">No Image</div>
                  ) : (
                    <Img sizes={items.node.image.fixed} />
                  )}

                  <div className="details_inner">
                    <h2>
                      <Link to={`/${items.node.slug}`}>{items.node.name}</Link>
                    </h2>
                    <StarRatingComponent
                      name="rate1"
                      starCount={5}
                      value={items.node.rating}
                    />
                    <p>{items.node.details.childMarkdownRemark.excerpt}</p>
                    <div className="row">
                      <div className="col-sm-6 align-self-center price-holder">
                        <canvas
                          className={`price-canvas ${this.state.priceAskedIds[items.node.id] === undefined ? "hidden" : "visible"}`}
                          ref={ref =>
                            (this.canvasRefs[`canvas-${items.node.id}`] = ref)
                          }
                        ></canvas>
                        <span
                          className={`price ${this.state.priceAskedIds[items.node.id] !== undefined ? "hidden" : "visible"}`}
                          onClick={() =>
                            this.getPrice(items.node.id, items.node.price)
                          }
                        >
                          Ask for a price
                        </span>
                      </div>
                      <div className="col-sm-6 text-right align-self-end">
                        <a
                          href="#"
                          className="Product snipcart-add-item"
                          data-item-id={items.node.slug}
                          data-item-price={items.node.price}
                          data-item-image={
                            items.node.image === null
                              ? ""
                              : items.node.image.fixed.src
                          }
                          data-item-name={items.node.name}
                          data-item-url={prodUrl + items.node.slug}
                        >
                          <i className="fas fa-shopping-bag" />
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </React.Fragment>
    )
  }
}

const IndexPage = data => (
  <Layout>
    <SEO title="Store" keywords={[`gatsby`, `application`, `react`]} />
    <div className="container store-page">
      <IndexPost data={data}></IndexPost>
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query StoreQuery {
    allContentfulProduct {
      edges {
        node {
          id
          name
          slug
          rating
          image {
            fixed(width: 1000, height: 500) {
              width
              height
              src
              srcSet
            }
          }
          price
          details {
            childMarkdownRemark {
              excerpt(pruneLength: 140)
            }
          }
        }
      }
    }
  }
`
