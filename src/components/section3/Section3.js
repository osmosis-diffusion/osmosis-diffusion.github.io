import React, {Component} from "react";
import { MathJax } from 'better-react-mathjax';
import { ReactCompareSlider, ReactCompareSliderImage, ReactCompareSliderHandle } from 'react-compare-slider';
import Grid from '@mui/material/Grid';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const root = process.env.PUBLIC_URL;

const DeblurIMG = [
    [
        {first: root + '/imgs/results/nonuniform_deblur/input/0.webp',
        second: root + '/imgs/results/nonuniform_deblur/recon/0.webp',},
        {first: root + '/imgs/results/nonuniform_deblur/input/1.webp',
        second: root + '/imgs/results/nonuniform_deblur/recon/1.webp',},
        {first: root + '/imgs/results/nonuniform_deblur/input/2.webp',
        second: root + '/imgs/results/nonuniform_deblur/recon/2.webp',}
    ],
    [
        {first: root + '/imgs/results/nonuniform_deblur/input/3.webp',
        second: root + '/imgs/results/nonuniform_deblur/recon/3.webp',},
        {first: root + '/imgs/results/nonuniform_deblur/input/4.webp',
        second: root + '/imgs/results/nonuniform_deblur/recon/4.webp',},
        {first: root + '/imgs/results/nonuniform_deblur/input/5.webp',
        second: root + '/imgs/results/nonuniform_deblur/recon/5.webp',}
    ]
];

const PhaseIMG = [[
    {first: root + '/imgs/results/phase_retrieval/input/0.webp',
    second: root + '/imgs/results/phase_retrieval/recon/0.webp',},
    {first: root + '/imgs/results/phase_retrieval/input/1.webp',
    second: root + '/imgs/results/phase_retrieval/recon/1.webp',},
    {first: root + '/imgs/results/phase_retrieval/input/2.webp',
    second: root + '/imgs/results/phase_retrieval/recon/2.webp',}
],
[
    {first: root + '/imgs/results/phase_retrieval/input/3.webp',
    second: root + '/imgs/results/phase_retrieval/recon/3.webp',},
    {first: root + '/imgs/results/phase_retrieval/input/4.webp',
    second: root + '/imgs/results/phase_retrieval/recon/4.webp',},
    {first: root + '/imgs/results/phase_retrieval/input/5.webp',
    second: root + '/imgs/results/phase_retrieval/recon/5.webp',}
]];


const CustomHandle = () => (
    <ReactCompareSliderHandle 
    buttonStyle={{WebkitBackdropFilter: undefined, 
        backdropFilter: undefined, 
        backgroundColor: 'white', 
        width: '2.5rem',
        height: '2.5rem',
        border: 0, 
        boxShadow: undefined, 
        color: '#444'}} 
        linesStyle={{opacity: 0.5}}/>
);


const CarouselPanel = (props) => (
    <div className="result-display">
        <Carousel infiniteLoop={true} swipeable={false}>
        {props.imgs.map((img, index) => (
            <Grid container spacing={2}>
            <Grid item xs>
            <ReactCompareSlider
                handle = {<CustomHandle />}
                itemOne = {<ReactCompareSliderImage src={img[0].first}/>}
                itemTwo={<ReactCompareSliderImage src={img[0].second}/>}
            /></Grid>

            <Grid item xs>
            <ReactCompareSlider
                handle = {<CustomHandle />}
                itemOne = {<ReactCompareSliderImage src={img[1].first}/>}
                itemTwo={<ReactCompareSliderImage src={img[1].second}/>}
            /></Grid>

            <Grid item xs>
            <ReactCompareSlider
                handle = {<CustomHandle />}
                itemOne = {<ReactCompareSliderImage src={img[2].first}/>}
                itemTwo={<ReactCompareSliderImage src={img[2].second}/>}
            /></Grid>

            </Grid>
        ))}
        </Carousel>
    </div>
);

export default class Section3 extends Component{
    render(){
        return(
            <section className="section">
                <div className="container is-max-desktop">
                    <h2 className="title is-2">Non-linear Inverse Problems</h2>
                    <h2 style={{'fontSize': '1.5rem'}}>Non-uniform deblur</h2>
                    <div id='task-description' className="task-description hero is-light">
                        <p style={{ 'fontSize': '1.5rem', 'margin': '0 0' }}>
                            <MathJax>{"$y= \\int \\left(b \\left(\\frac{1}{M} \\sum_{i=1}^M x[i]\\right)\\right)$"}</MathJax>
                        </p>
                        <p><MathJax>{"$b(x)=x^{1/2.2}$ is the nonlinear camera response function."}</MathJax></p>
                    </div>
                    <CarouselPanel imgs={DeblurIMG} />

                    <h2 style={{'fontSize': '1.5rem'}}>Fourier phase retrieval</h2>
                    <div id='task-description' className="task-description hero is-light">
                        <p style={{ 'fontSize': '1.5rem', 'margin': '0 0' }}>
                            <MathJax>{"$y=|FPx|+n$"}</MathJax>
                        </p>
                        <p><MathJax>{"where $F$ denotes the 2D Discrete Fourier Transform (DFT) and $P$ is the oversampling matrix."}</MathJax></p>
                    </div>
                    <CarouselPanel imgs={PhaseIMG} />
                        
                </div>
            </section>
        );
    }
}