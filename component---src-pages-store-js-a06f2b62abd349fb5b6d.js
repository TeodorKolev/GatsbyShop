(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("0mN4");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var n,i=r(a("PJYZ")),o=r(a("VbXa")),s=r(a("8OQS")),l=r(a("pVnL")),d=r(a("q1tI")),u=r(a("17x9")),c=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},p=Object.create({}),g=function(e){var t=c(e),a=f(t);return p[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,v=h&&window.IntersectionObserver,y=new WeakMap;function b(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),d.default.createElement("source",{media:n,srcSet:a,sizes:i}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function E(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function C(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var O=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},k=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?C(e,!0):"")+C(e)})).join("")+"<img "+d+o+s+a+r+t+i+n+l+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},L=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,n=e.spreadProps,i=d.default.createElement(I,(0,l.default)({src:t},n));return a.length>1?d.default.createElement("picture",null,r(a),i):i},I=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,o=e.onLoad,u=e.onError,c=e.onClick,f=e.loading,p=e.draggable,g=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","onClick","loading","draggable"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:n},g,{onLoad:o,onError:u,onClick:c,ref:t,loading:f,draggable:p,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));I.propTypes={style:u.default.object,onError:u.default.func,onClick:u.default.func,onLoad:u.default.func};var N=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!m&&v&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||h&&(m||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),a=f(t),p[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,s=void 0===o?{}:o,u=e.placeholderStyle,f=void 0===u?{}:u,p=e.placeholderClassName,g=e.fluid,m=e.fixed,h=e.backgroundColor,v=e.durationFadeIn,y=e.Tag,S=e.itemProp,C=e.loading,O=e.draggable,N=!1===this.state.fadeIn||this.state.imgLoaded,R=!0===this.state.fadeIn&&!this.state.imgCached,P=(0,l.default)({opacity:N?1:0,transition:R?"opacity "+v+"ms":"none"},s),_="boolean"==typeof h?"lightgray":h,z={transitionDelay:v+"ms"},j=(0,l.default)({opacity:this.state.imgLoaded?0:1},R&&z,{},s,{},f),V={title:t,alt:this.state.isVisible?"":a,style:j,className:p,itemProp:S};if(g){var x=g,T=x[0];return d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(T.srcSet)},d.default.createElement(y,{style:{width:"100%",paddingBottom:100/T.aspectRatio+"%"}}),_&&d.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:_,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},R&&z)}),T.base64&&d.default.createElement(L,{src:T.base64,spreadProps:V,imageVariants:x,generateSources:w}),T.tracedSVG&&d.default.createElement(L,{src:T.tracedSVG,spreadProps:V,imageVariants:x,generateSources:E}),this.state.isVisible&&d.default.createElement("picture",null,b(x),d.default.createElement(I,{alt:a,title:t,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:P,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,onClick:this.props.onClick,itemProp:S,loading:C,draggable:O})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,l.default)({alt:a,title:t,loading:C},T,{imageVariants:x}))}}))}if(m){var q=m,H=q[0],M=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:H.width,height:H.height},i);return"inherit"===i.display&&delete M.display,d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(H.srcSet)},_&&d.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:_,width:H.width,opacity:this.state.imgLoaded?0:1,height:H.height},R&&z)}),H.base64&&d.default.createElement(L,{src:H.base64,spreadProps:V,imageVariants:q,generateSources:w}),H.tracedSVG&&d.default.createElement(L,{src:H.tracedSVG,spreadProps:V,imageVariants:q,generateSources:E}),this.state.isVisible&&d.default.createElement("picture",null,b(q),d.default.createElement(I,{alt:a,title:t,width:H.width,height:H.height,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:P,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,onClick:this.props.onClick,itemProp:S,loading:C,draggable:O})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,l.default)({alt:a,title:t,loading:C},H,{imageVariants:q}))}}))}return null},t}(d.default.Component);N.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var R=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),P=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string});N.propTypes={resolutions:R,sizes:P,fixed:u.default.oneOfType([R,u.default.arrayOf(R)]),fluid:u.default.oneOfType([P,u.default.arrayOf(P)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onClick:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var _=N;t.default=_},Ga68:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return g}));a("f3/d"),a("0mN4");var r=a("q1tI"),n=a.n(r),i=a("Wbzz"),o=a("9eSz"),s=a.n(o),l=a("Bl7J"),d=a("vrFN"),u=a("qj80"),c=a.n(u),f=a("ydnR");var p=function(e){var t,a;function r(t){var a;return(a=e.call(this,t)||this).handleScroll=function(){if(window.pageYOffset+1100>window.outerHeight){var e=a.state.NoOfPost+3;a.setState({NoOfPost:e})}},a.state={NoOfPost:6},a.handleScroll=a.handleScroll.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),a}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var o=r.prototype;return o.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},o.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},o.render=function(){var e=this.props.data,t=this.state.NoOfPost;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"row product-main",onScroll:this.onScrollEvent},e.data.allContentfulProduct.edges.slice(0,t).map((function(e){return n.a.createElement("div",{className:"Catalogue__item col-sm-12 col-md-6 col-lg-4",key:e.node.id},n.a.createElement("div",{className:"details_List"},null===e.node.image?n.a.createElement("div",{className:"no-image"},"No Image"):n.a.createElement(s.a,{sizes:e.node.image.fixed}),n.a.createElement("div",{className:"details_inner"},n.a.createElement("h2",null,n.a.createElement(i.Link,{to:"/"+e.node.slug},e.node.name)),n.a.createElement(c.a,{name:"rate1",starCount:5,value:e.node.rating}),n.a.createElement("p",null,e.node.details.childMarkdownRemark.excerpt),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-4 align-self-center"},n.a.createElement("span",{className:"price"},"$",e.node.price)),n.a.createElement("div",{className:"col-sm-8 text-right align-self-center"},n.a.createElement("a",{href:"#",className:"Product snipcart-add-item","data-item-id":e.node.slug,"data-item-price":e.node.price,"data-item-image":null===e.node.image?"":e.node.image.fixed.src,"data-item-name":e.node.name,"data-item-url":f.b+e.node.slug},n.a.createElement("i",{className:"fas fa-shopping-bag"}),"Add to Cart"))))))}))))},r}(r.Component);t.default=function(e){return n.a.createElement(l.a,null,n.a.createElement(d.a,{title:"Store",keywords:["gatsby","application","react"]}),n.a.createElement("div",{className:"container store-page"},n.a.createElement(p,{data:e})))};var g="204830873"},TSYQ:function(e,t,a){var r;a("LK8F"),function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var o=n.apply(null,r);o&&e.push(o)}else if("object"===i)for(var s in r)a.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},qj80:function(e,t,a){"use strict";a("2Spj"),a("f3/d"),a("/SS/"),a("hHhE"),a("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),n=a("q1tI"),i=l(n),o=l(a("17x9")),s=l(a("TSYQ"));function l(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return a.state={value:e.value},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.value;null!=t&&t!==this.state.value&&this.setState({value:t})}},{key:"onChange",value:function(e){var t=this.props,a=t.editing,r=t.value;a&&null==r&&this.setState({value:e})}},{key:"onStarClick",value:function(e,t,a,r){r.stopPropagation();var n=this.props,i=n.onStarClick;n.editing&&i&&i(e,t,a,r)}},{key:"onStarHover",value:function(e,t,a,r){r.stopPropagation();var n=this.props,i=n.onStarHover;n.editing&&i&&i(e,t,a,r)}},{key:"onStarHoverOut",value:function(e,t,a,r){r.stopPropagation();var n=this.props,i=n.onStarHoverOut;n.editing&&i&&i(e,t,a,r)}},{key:"renderStars",value:function(){for(var e=this,t=this.props,a=t.name,r=t.starCount,n=t.starColor,o=t.emptyStarColor,s=t.editing,l=this.state.value,d=function(e,t){return{float:"right",cursor:s?"pointer":"default",color:t>=e?n:o}},u={display:"none",position:"absolute",marginLeft:-9999},c=[],f=function(t){var r=a+"_"+t,n=i.default.createElement("input",{key:"input_"+r,style:u,className:"dv-star-rating-input",type:"radio",name:a,id:r,value:t,checked:l===t,onChange:e.onChange.bind(e,t,a)}),o=i.default.createElement("label",{key:"label_"+r,style:d(t,l),className:"dv-star-rating-star "+(l>=t?"dv-star-rating-full-star":"dv-star-rating-empty-star"),htmlFor:r,onClick:function(r){return e.onStarClick(t,l,a,r)},onMouseOver:function(r){return e.onStarHover(t,l,a,r)},onMouseLeave:function(r){return e.onStarHoverOut(t,l,a,r)}},e.renderIcon(t,l,a,r));c.push(n),c.push(o)},p=r;p>0;p--)f(p);return c.length?c:null}},{key:"renderIcon",value:function(e,t,a,r){var n=this.props,o=n.renderStarIcon,s=n.renderStarIconHalf;return"function"==typeof s&&Math.ceil(t)===e&&t%1!=0?s(e,t,a,r):"function"==typeof o?o(e,t,a,r):i.default.createElement("i",{key:"icon_"+r,style:{fontStyle:"normal"}},"★")}},{key:"render",value:function(){var e=this.props,t=e.editing,a=e.className,r=(0,s.default)("dv-star-rating",{"dv-star-rating-non-editable":!t},a);return i.default.createElement("div",{style:{display:"inline-block",position:"relative"},className:r},this.renderStars())}}]),t}(n.Component);d.propTypes={name:o.default.string.isRequired,value:o.default.number,editing:o.default.bool,starCount:o.default.number,starColor:o.default.string,onStarClick:o.default.func,onStarHover:o.default.func,onStarHoverOut:o.default.func,renderStarIcon:o.default.func,renderStarIconHalf:o.default.func},d.defaultProps={starCount:5,editing:!0,starColor:"#ffb400",emptyStarColor:"#333"},t.default=d,e.exports=t.default},ydnR:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}));var r="https://teodorkolev.github.io/GatsbyShop/",n="xyygngez"}}]);
//# sourceMappingURL=component---src-pages-store-js-a06f2b62abd349fb5b6d.js.map