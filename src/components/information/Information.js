import React, {Component} from "react";
import { Button } from "@mui/material";
import { VscGithub } from "react-icons/vsc"
import {FaFilePdf} from "react-icons/fa"
import {SiArxiv} from "react-icons/si"

  
const AuthorBlock = (props) => (
  <span className="author-block">
    <a href={props.link}>{props.name}</a>
    <sup>{props.number}</sup>,
  </span>
)

const LinkButton = (props) => (
    <Button sx={{m: '0.3rem'}} 
      style={{
        borderRadius: 35,
        backgroundColor: "black",
        padding: "0.5rem 1.0rem"
      }}
      href={props.link}
      variant="contained" 
      startIcon={props.icon}>
      {props.text}
  </Button>
);

export default class Information extends Component{
  render(){
      return (
          <section className="hero information">
          <div className="hero-body">
          <div className="container is-max-desktop">
              <div className="columns is-centered">
                  <div className="column has-text-centered">
                      <h1 className="title is-1 publication-title">Diffusion Posterior Sampling for General Noisy Inverse Problems</h1>
                      <div className="is-size-5 publication-authors">
                          <AuthorBlock name="Hyungjin Chung" link="https://hj-chung.com" number="*1" />
                          <AuthorBlock name="Jeongsol Kim" link="https://bispl.weebly.com/members.html" number="*1" />
                          <AuthorBlock name="Michael T. McCann" link="https://michael-t-mccann.github.io/" number="2" />
                          <AuthorBlock name="Marc L. Klasky" link="https://scholar.google.com/citations?user=AKo06isAAAAJ&hl=en" number="1,2" />
                          <AuthorBlock name="Jong Chul Ye" link="https://bispl.weebly.com/professor.html" number="1" />
                      </div>
                      <div className="is-size-5 publication-authors">
                          <span className="author-block"><sup>1</sup>Korea Advanced Institute of Science & Technology (KAIST),</span>
                          <span className="author-block"><sup>2</sup>Los Alamos National Laboratory (LANL)</span>
                          <br></br> 
                          <span className="author-block-small">*Joint first authors</span>
                      </div>
                  
                      {/*Publication links*/}
                      <div className="column has-text-centered">
                          <LinkButton link={"https://openreview.net/forum?id=OnD9zGAGT0k"} icon={<FaFilePdf />} text="Paper"/>
                          <LinkButton link={"https://arxiv.org/abs/2209.14687"} icon={<SiArxiv />} text="arXiv"/>
                          <LinkButton link={"https://github.com/DPS2022/diffusion-posterior-sampling"} icon={<VscGithub />} text="Code"/>
                      </div>
                  </div>
              </div>  
          </div>
          </div>
          </section>
        );
  }
}
