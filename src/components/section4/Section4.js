import React, {Component} from "react";
  
export default class Section4 extends Component{
  render(){
      return (
        <div>
            <section className="section">
                <div className="container is-max-desktop">
                <div className="container is-max-desktop content">
                <h2 className="title is-2">Related Links</h2>
                To be added.
                </div>
                </div>
            </section>

          <section className="section">
                <div className="container is-max-desktop">
                <div className="container is-max-desktop content">
                <h2 className="title">BibTeX</h2>
                <pre><code>
                    {'@inproceedings{,\
                    \n chung2023diffusion,\
                    \n title={Diffusion Posterior Sampling for General Noisy Inverse Problems},\
                    \n author={Hyungjin Chung and Jeongsol Kim and Michael Thompson Mccann and Marc Louis Klasky and Jong Chul Ye},\
                    \n booktitle={International Conference on Learning Representations},\
                    \n year={2023},\
                    \n url={https://openreview.net/forum?id=OnD9zGAGT0k}\
                    \n}'}
                </code></pre>
                </div>
                </div>
          </section>
          </div>
    );
  }
}
