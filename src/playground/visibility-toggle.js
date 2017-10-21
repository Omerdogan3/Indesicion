//visibilty toogle -render, constructor, handleTogglevisibility
//visibility -> false

class Visibility extends React.Component{
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility : false
        };
    }
    handleToggleVisibility(){
        this.setState((previousState) =>{
            return {
                visibility: !previousState.visibility
            };
        });
    }
    render(){
        return(
            <div>
            <button onClick={this.handleToggleVisibility}>Visibility</button>
            
            {this.state.visibility && (
                <div>
                    <p>There are some details!</p>
                </div>
            )}
            </div>
        );
       
    }
}

ReactDOM.render(<Visibility/>,document.getElementById('app'));



// let visibility = false;

// const showDetail = () =>{
//     visibility = !visibility;
//     render();
// };


// const render = () =>{
//     const template = (
//         <div>
//             <h2>Visibility Toogle</h2>
//             <button onClick={showDetail}>
//                 {visibility ? 'Hide Details' : 'Show Details'}
//             </button>
//             {visibility && (
//                 <div>
//                     <p>There are some details!</p>
//                 </div>
//             )}
//         </div>
//     );
//     ReactDOM.render(template,nameRoot)
// };
// const nameRoot = document.getElementById('name');
// render();