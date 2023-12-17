import {Component, Fragment} from "react";

const OverviewBlock = () => (
    <section className="hero overview">
        <div className="container is-max-desktop">
            <img id="overview" 
                    height={"100%"} 
                    src={process.env.PUBLIC_URL + "/imgs/cover.webp"} 
                    alt={"overview"}>
            </img>
            <h2 className="subtitle has-text-centered">
                Diffusion Posterior Sampling (DPS) enables to solve inverse problems with noise.
            </h2>
        </div>
    </section>
)

const AbstractBlock = () => (
    <section className="section">
    <div className="container is-max-desktop">
        <div className="columns is-centered has-text-centered">
        <div className="column is-four-fifths">
            <h2 className="title is-3">Abstract</h2>
            <div className="content has-text-justified">
            <p>
                Diffusion models have been recently used as generative inverse problem solvers, 
                owing to their high quality reconstructions and the ability to capture the degeneracy of the posterior distribution. 
                However, most works focus on solving simple linear inverse problems in the noiseless settings, 
                which significantly under-represents the complexity of the real world problems. 
            </p>
            <p>
                <b>In this work, we extend diffusion solvers to efficiently handle 
                general noisy (non)linear inverse problems via the approximation of the posterior sampling. </b>
                Interestingly, the resulting posterior sampling scheme is a blended version of the diffusion sampling 
                with the manifold constrained gradient without strict measurement consistency projection step, 
                yielding more desirable generative path in <i>noisy</i> settings compared to the previous studies.
            </p>
            <p>
                Our method demonstrates that diffusion models can incorporate various measurement noise statistics such as
                Gussian and Poisson, but also efficiently handle noisy <i>nonlinear</i> inverse problems 
                such as Fourier phase retrieval and non-uniform deblurring.
            </p>
            </div>
        </div>
        </div>
    </div>
</section>
)



export default class Section1 extends Component{
    render(){
        return (
            <Fragment>
                <OverviewBlock />
                <AbstractBlock />
            </Fragment>
        );
    }
}
