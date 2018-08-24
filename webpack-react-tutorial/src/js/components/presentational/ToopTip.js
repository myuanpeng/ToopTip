import React from "react";
class ToopTip extends React.Component{
    off_tip(){
        let tips = [...document.querySelectorAll(".tip")];
        for (let i=0;i<tips.length;i++ ){
            tips[i].style.display = "none";
            tips[i].index = 1;
        }
    }

    clickt(obj){
        let tip = obj.target.previousElementSibling;
        let height = getComputedStyle(tip).height;
        if (this.infex){
            this.infex = false;
            this.off_tip();
        }
        if (tip.index ===1){
            this.off_tip();
            tip.style.display = "block";
            let left = getComputedStyle(tip).width;
            let l = (parseInt(getComputedStyle(obj.target).width)-parseInt(getComputedStyle(tip).width))/2;
            let t = (parseInt(getComputedStyle(obj.target).height)-parseInt(getComputedStyle(tip).height))/2;
            tip.index = 0;
            console.log(obj.target);
            switch (this.props.pos) {
                case "top":console.log(l);
                           tip.firstElementChild.classList.add(this.props.pos);
                           tip.style.top = -(parseInt(height) + 10)  +  "px";
                           tip.style.left = l - 6 + 'px';
                           break;
                case "tl":
                          tip.style.left = "2%";
                          tip.style.top = -(parseInt(height) + 10)  +  "px";
                          tip.firstElementChild.classList.add(this.props.pos);
                          break;
                case  "tr":
                           tip.style.right = "2%";
                           tip.style.top = -(parseInt(height) + 10)  +  "px";
                           tip.firstElementChild.classList.add(this.props.pos);
                           break;
                case "left":
                            tip.style.top = t-3 + "px";
                            tip.style.left = -(parseInt(left) + 15)  +  "px";
                            tip.firstElementChild.classList.add(this.props.pos);
                            break;
                case "right":
                            tip.style.top = t-3 + "px";
                            tip.style.right = -(parseInt(left) + 15)  +  "px";
                            tip.firstElementChild.classList.add(this.props.pos);
                            break;
                case "bottom":
                            tip.firstElementChild.classList.add(this.props.pos);
                            tip.style.bottom = -(parseInt(height) + 10)  +  "px";
                            tip.style.left = l - 6 + 'px';
                            break;
            }
            /*tip.style.top = -(parseInt(height) + 10)  +  "px";
            tip.style.left = l - 6 + 'px';*/
        } else {
            tip.style.display = "none";
            tip.index = 1
        }
    }
    render(){

        return(
                <div className='' onClick={(e) => this.clickt(e)} >
                    <div className='tip' index = {1} >
                        <div className='inner'></div>
                        <div className='text'>{this.props.overlay}</div>
                    </div>
                        {
                            React.Children.map(this.props.children, function (child) {
                                return {child}.child;
                            })
                        }
                </div>
        )
    }
}


export default ToopTip;

/*ReactDOM.render(
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
    </div>

,document.querySelector(".tooptip"));*/

