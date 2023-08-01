/*eslint-disable*/
import React from "react";


// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader() {
    // let pageHeader = React.createRef();

    // React.useEffect(() => {
    //     if (window.innerWidth > 991) {
    //         const updateScroll = () => {
    //             let windowScrollTop = window.pageYOffset / 70;
    //             pageHeader.current.style.transform =
    //                 "translate3d(0," + windowScrollTop + "px,0)";
    //         };
    //         window.addEventListener("scroll", updateScroll);
    //         return function cleanup() {
    //             window.removeEventListener("scroll", updateScroll);
    //         };
    //     }
    // });

    return (
        <>
            <div className="page-header clear-filter" filter-color="orange">
                <div
                    className="page-header-image"
                    style={{
                        backgroundImage: "url(" + require("../../assets/img/header.jpg") + ")",
                        backgroundPosition: "center top -50px",
                    }}
                // ref={pageHeader}
                >

                </div>

                <Container>
                    <div className="content-center brand">

                        <h1 className="h1-seo">Community</h1>

                    </div>
                    <h6 className="category category-absolute">
                        <a
                            href="https://smart-factory-lee-joon-ho.tistory.com/"
                            target="_blank"
                        >
                            <img
                                alt="..."
                                className="creative-tim-logo"
                                src={require("../../assets/img/creative-tim-white-slim2.png")}
                            ></img>
                        </a>
                    </h6>
                </Container>
            </div>
        </>
    );
}

export default IndexHeader;
