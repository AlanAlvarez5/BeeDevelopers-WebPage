import React,{Component} from 'react';

export default class Home extends Component {

    render() {
        return (
            <div className="home">
                <div className="top">
                    <img src="img/img1.jpg" alt="img1"/>
                    <h1>Desarrollo de software para todos</h1>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aliquam repellendus nisi commodi natus maiores enim fuga quae nostrum. Reprehenderit aliquid delectus voluptas quidem quos iure, vero esse ipsam sequi?
                    </h4>
                    <button>Conoce más</button>
                </div>
                <div className="section1">
                    <img src="img/img2.jpg" alt="img2"/>
                    <h2>De estudiantes para estudiantes</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Quibusdam aliquam 
                    repellendus nisi commodi natus maiores enim fuga quae nostrum. 
                    </p>
                </div>
                <img src="img/web.png" alt="web"></img>
                <h2>Aprende lo último</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Quibusdam aliquam  repellendus nisi commodi natus maiores enim fuga quae nostrum. 
                Lorem ipsum dolor sit amet consectetur adipisicing elit.Quibusdam aliquam  repellendus nisi commodi natus maiores enim fuga quae nostrum. 
                </p>
                
            </div>
           
            
        );
    }
}