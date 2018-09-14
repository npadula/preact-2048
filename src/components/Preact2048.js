import { h, render, Component } from 'preact';
import GameGrid from "./GameGrid";

export default class Preact2048 extends Component {
    constructor(props,context){
        super(props,context);


        console.log("constructor");
    }

    render() {
        return <GameGrid/>;
    }
}