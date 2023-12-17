import React, {Component} from "react";
import Grid from '@mui/material/Grid';
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { ReactCompareSlider, ReactCompareSliderImage, ReactCompareSliderHandle } from 'react-compare-slider';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { MathJax } from 'better-react-mathjax';

const SUBTASK = {
    'super_resolution': ['4', '16'],
    'inpaint':['box', 'random'],
    'deblur':['gaussian', 'motion']
};

const SUBTASK_TEXT = {
    'super_resolution': ["Super-resolution x4", "Super-resolution x16"],
    'inpaint': ["Inpaint (block)", "Inpaint (random)"],
    'deblur': ["Deblur (gaussian)", "Deblur (motion)"]
}

const SRDescPanel = () => (
    <div id='task-description' className="task-description hero is-light">
        <p style={{ 'fontSize': '1.5rem', 'margin': '0 0' }}>
            <MathJax>{"$\\mathbf y=L^f \\mathbf x+ \\mathbf n$"}</MathJax>
        </p>
        <p><MathJax>{"where $L^f$ denotes the bicubic downsampling block Hankel matrix with the factor $f$"}.</MathJax></p>
    </div>
)

const InpaintDescPanel = () => (
    <div id='task-description' className="task-description hero is-light">
        <p style={{ 'fontSize': '1.5rem', 'margin': '0 0' }}>
            <MathJax>{"$\\mathbf y=P \\mathbf x+ \\mathbf n$"}</MathJax>
        </p>
        <p><MathJax>{"where $P \\in \\{0,1\\}^{n \\times d}$ is the masking matrix that consists of elementary unit vectors."}</MathJax></p>
    </div>
)

const DeblurDescPanel = () => (
    <div id='task-description' className="task-description hero is-light">
        <p style={{ 'fontSize': '1.5rem', 'margin': '0 0' }}>
            <MathJax>{"$\\mathbf y=C^\\psi \\mathbf x + \\mathbf n$"}</MathJax>
        </p>
        <p><MathJax>{"where $C^\\psi$ is the block Henkel matrix that effectively induces convolution with the gaussian blur kernel $\\psi$"}.</MathJax></p>
    </div>
)


const DESCRIPTIONS = {
    'super_resolution': <SRDescPanel />,
    'inpaint': <InpaintDescPanel />,
    'deblur': <DeblurDescPanel />
}

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
            </Grid>
        ))}
        </Carousel>
    </div>
);


const ResultPanels = (props) => (
    <div>
        <h2>{SUBTASK_TEXT[props.task][0]}</h2>
        <div className="result-display">
            <CarouselPanel imgs={props.imgs_1} />
        </div>
        <h2>{SUBTASK_TEXT[props.task][1]}</h2>
        <div className="result-display">
            <CarouselPanel imgs={props.imgs_2} />
        </div>
    </div>
);


export default class Section2 extends Component{

    default_task = 'super_resolution'
    state = {
            imgs_1: this.ImageGenerator(this.default_task, SUBTASK[this.default_task][0]),
            imgs_2: this.ImageGenerator(this.default_task, SUBTASK[this.default_task][1]),
            task: this.default_task
    };

    ImageGenerator(task, subtask){
        const root = process.env.PUBLIC_URL;
        return [[
            {'first': root + '/imgs/results/'+ task + '/' + subtask + '/input/0.webp',
            'second': root + '/imgs/results/'+ task + '/' + subtask + '/recon/0.webp',},
            {'first': root + '/imgs/results/'+ task + '/' + subtask + '/input/1.webp',
            'second': root + '/imgs/results/'+ task + '/' + subtask + '/recon/1.webp',},
            
        ],
        [
            {'first': root + '/imgs/results/'+ task + '/' + subtask + '/input/2.webp',
            'second': root + '/imgs/results/'+ task + '/' + subtask + '/recon/2.webp',},
            {'first': root + '/imgs/results/'+ task + '/' + subtask + '/input/3.webp',
            'second': root + '/imgs/results/'+ task + '/' + subtask + '/recon/3.webp',},
        ],
        [
            {'first': root + '/imgs/results/'+ task + '/' + subtask + '/input/4.webp',
            'second': root + '/imgs/results/'+ task + '/' + subtask + '/recon/4.webp',},
            {'first': root + '/imgs/results/'+ task + '/' + subtask + '/input/5.webp',
            'second': root + '/imgs/results/'+ task + '/' + subtask + '/recon/5.webp',}
        ]]
    }

    create_toggle_button(id, text){
        return (
            <ToggleButton value={id} onClick={this.onClick} id={id}>
                {text}
            </ToggleButton>
            );
    }

    onClick = (e) => {
        this.setState({
            imgs_1: this.ImageGenerator(e.target.id, SUBTASK[e.target.id][0]),
            imgs_2: this.ImageGenerator(e.target.id, SUBTASK[e.target.id][1]),
            task: e.target.id
        })
    }

    render(){
        const imgs_1 = this.state.imgs_1;
        const imgs_2 = this.state.imgs_2;
        const task = this.state.task;

        return(
            <section className="section">
                <div className="container is-max-desktop">
                    <h2 className="title is-2">Linear Inverse Problems</h2>
                    <div className="task-btns">
                    <ToggleButtonGroup
                        color="primary"
                        value={task}
                        aria-label="Platform"
                    >
                        {this.create_toggle_button("super_resolution", "super-resolution")}
                        {this.create_toggle_button("inpaint", "inpaint")}
                        {this.create_toggle_button("deblur", "deblur")}
                    </ToggleButtonGroup>
                    </div>

                    {DESCRIPTIONS[task]}
                    <ResultPanels imgs_1={imgs_1} imgs_2={imgs_2} task={task}/>
                </div>
            </section>
        );
    }
}