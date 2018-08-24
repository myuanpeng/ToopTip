    import React, { Component } from "react";
    import ReactDOM from "react-dom";
	import ToopTip from "../presentational/ToopTip";
	import Contxt from "../presentational/Contxt";
    import Input from "../presentational/Input";
    class FormContainer extends Component {
    constructor() {
    super();
    this.state = {
    seo_title: ""
    };
    this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
    }
    render() {
    const { seo_title } = this.state;
    return (
    <form id="article-form">
    <Input
    text="SEO title"
    label="seo_title"
    type="text"
    id="seo_title"
    value={seo_title}
    handleChange={this.handleChange}
    />
    </form>
    );
    }
    }
	
    export default FormContainer;
	const wrapper = document.querySelector(".tooptip");
    ReactDOM.render(
        <div>
            <div className="top-top">
                <div className="box box-top">
                    <ToopTip pos="top" overlay="top" >
                        <Contxt>top</Contxt>
                    </ToopTip>
                </div>
                <div className="box box-tl">
                    <ToopTip pos="tl" overlay="tl" >
                        <Contxt>top-left</Contxt>
                    </ToopTip>
                </div>
                <div className="box box-tr">
                    <ToopTip pos="tr" overlay="tr" >
                        <Contxt>top-right</Contxt>
                    </ToopTip>
                </div>

            </div>
            <div className="center">
                <div className="box box-left">
                    <ToopTip pos="left" overlay="left" >
                        <Contxt>left</Contxt>
                    </ToopTip>
                </div>
                <div className="box box-right">
                    <ToopTip pos="right" overlay="right" >
                        <Contxt>right</Contxt>
                    </ToopTip>
                </div>
            </div>
            <div className="bottom">
                <div className="box box-bottom">
                    <ToopTip pos="bottom" overlay="bottom" >
                        <Contxt>bottom</Contxt>
                    </ToopTip>
                </div>
            </div>
        </div>, wrapper);
	