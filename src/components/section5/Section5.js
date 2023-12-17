import React, { Component, useState } from "react"
import { Grid, Slider } from "@mui/material"
import { MathJax } from 'better-react-mathjax'
import { AiOutlineClockCircle } from "react-icons/ai"

String.prototype.format = function() {
    var formatted = this;
    for( var arg in arguments ) {
        formatted = formatted.replace("{" + arg + "}", arguments[arg]);
    }
    return formatted;
};

function getImagePath(value, task){
    let idx = 0;
    if (value==0){
        idx = 990;
    }else{
        idx = 990 - (value-1) * 10
    }
    
    const path_xt = process.env.PUBLIC_URL + "/imgs/progress/{0}/xt/x_{1}.webp".format(task, idx.toString().padStart(4,"0"));
    const path_x0 = process.env.PUBLIC_URL + "/imgs/progress/{0}/x0/x0_{1}.webp".format(task, idx.toString().padStart(4,"0"));
    return {progress_img: path_xt, progress_x0: path_x0};
};


function ProgressImage (prop) {
    let task = prop.task;
    const input_img = process.env.PUBLIC_URL + '/imgs/progress/{0}/input/input.webp'.format(task);
    const label_img = process.env.PUBLIC_URL + '/imgs/progress/{0}/label/label.webp'.format(task);

    const [imgs, setImgs] = useState(
        getImagePath(0, task)
    )
        
    return (
    <div className="generate-progress">
        <Grid container spacing={2}>
            <Grid item xs>
                <h4 className="has-text-centered">Measurement</h4>
                <img src={input_img} alt="input image" width={256} height={256}></img>
            </Grid>
            <Grid item xs>
                <h4 className="has-text-centered"><MathJax>{"$x_t$"}</MathJax></h4>
                <img src={imgs.progress_img} alt="test image" width={256} height={256}></img>
            </Grid>
            <Grid item xs>
                <h4 className="has-text-centered"><MathJax>{"$\\hat{x}_0$"}</MathJax></h4>
                <img src={imgs.progress_x0} alt="test image" width={256} height={256}></img>
            </Grid>
            <Grid item xs>
                <h4 className="has-text-centered">Label</h4>
                <img src={label_img} alt='label image' width={256} height={256}></img>
            </Grid>
        </Grid>
        <div className="container column">
            <Grid container spacing={2} alignItems="center">
                <Grid item >
                    <AiOutlineClockCircle />
                </Grid>
                <Grid item xs>
                    <Slider step={2} onChange={(e) => {setImgs(getImagePath(e.target.value, task))}}/>
                </Grid>
            </Grid>
        </div>
    </div>
    );
}


export default class Section5 extends Component{

    render(){
        return (
            <section className="section">
                <div className="container">
                    <h2 className="title is-2">Inverse Problem with Poisson Noise</h2>
                    {/* <MathJax> */}
                        {/* We display intermediate samples {"$x_t$"} and estimated {"$x_0$"} at time step {"$t$"} for motion deblurring and super-resolution task with the Poisson noise. */}
                    {/* </MathJax> */}
                    <ProgressImage task='motion_deblur'/>
                    <ProgressImage task='super_resolution'/>
                </div>
            </section>
        )
    }
}