import React from 'react';
import ReactDOM from 'react-dom';
import {useState} from 'react'

function App() {

    const [user, setUser] = useState([])

    async function handelUsers() {
        setUser('Виталий')
        let res = axios.get(axios.defaults.api+'user')
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>

                        <div className="card-body">I'm an example component!</div>
                        <div>{user}</div>
                        <button onClick={handelUsers}>Usвers</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App/>, document.getElementById('app'));
}
