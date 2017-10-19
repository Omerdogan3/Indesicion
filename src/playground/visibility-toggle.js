let visibility = false;

const showDetail = () =>{
    visibility = !visibility;
    render();
};


const render = () =>{
    const template = (
        <div>
            <h2>Visibility Toogle</h2>
            <button onClick={showDetail}>
                {visibility ? 'Hide Details' : 'Show Details'}
            </button>
            {visibility && (
                <div>
                    <p>There are some details!</p>
                </div>
            )}
        </div>
    );
    ReactDOM.render(template,nameRoot)
};
const nameRoot = document.getElementById('name');
render();