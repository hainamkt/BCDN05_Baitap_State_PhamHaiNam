import React, { Component } from 'react'

export default class Glasses extends Component {
    arrGlasses = [
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./img/glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother. "
        },
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./img/glassesImage/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother. "
        },
        {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": "./img/glassesImage/v3.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother. "
        },
        {
            "id": 4,
            "price": 70,
            "name": "DIOR D6005U",
            "url": "./img/glassesImage/v4.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother. "
        },
        {
            "id": 5,
            "price": 40,
            "name": "PRADA P8750",
            "url": "./img/glassesImage/v5.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother. "
        },
        {
            "id": 6,
            "price": 60,
            "name": "PRADA P9700",
            "url": "./img/glassesImage/v6.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother. "
        },
        {
            "id": 7,
            "price": 80,
            "name": "FENDI F8750",
            "url": "./img/glassesImage/v7.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother. "
        },
        {
            "id": 8,
            "price": 100,
            "name": "FENDI F8500",
            "url": "./img/glassesImage/v8.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother. "
        },
        {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "./img/glassesImage/v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother. "
        }
    ];

    listGlasses = () => {
        return this.arrGlasses.map((sp) => {
            return <div className="col-2" key={`sp${sp.id}`} onClick={() => {
                this.renderGlass(sp.url,sp.name,sp.desc,'block');
            }}>
                <img src={sp.url} alt="" />
            </div>
        })
    };

    state = {
        imgGlass: '',
        textH3: '',
        textP: '',
        display: 'none',
    }

    renderGlass = (glass,h3,p,block) => {
        let newState = {
            imgGlass: `${glass}`,
            textH3: `${h3}`,
            textP: `${p}`,
            display: block,
        }
        this.setState(newState);
    }

    render() {
        return (
            <div className='container'>
                <div className="row model__item">
                    <div className="col-6 model__left my-5">
                        <img src="./img/glassesImage/model.jpg" alt="" />
                    </div>
                    <div className="col-6 model__right my-5">
                        <img src="./img/glassesImage/model.jpg" alt="" />
                        <div className='model__glass' style={{display:`${this.state.display}`}}>
                            <img src={this.state.imgGlass} alt="" />
                        </div>
                        <div className='text' style={{display:`${this.state.display}`}}>
                            <h3>{this.state.textH3}</h3>
                            <p>{this.state.textP}</p>
                        </div>
                    </div>
                    <div className="col-12 img__glass">
                        <div className="row">
                            {this.listGlasses()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
