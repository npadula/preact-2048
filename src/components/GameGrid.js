import { h, render, Component } from 'preact';

export default class GameGrid extends Component {
    constructor(props,context){
        super(props,context);


        console.log("constructor");
    }
    
    render() {
        console.log("render game grid");
        return(
            
        <div class="game-container">
        
           <div class="grid-container">
        <div class="grid-row">
          <div class="grid-cell">a</div>
          <div class="grid-cell">b</div>
          <div class="grid-cell">c</div>
          <div class="grid-cell">d</div>
        </div>
        <div class="grid-row">
          <div class="grid-cell">e</div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
        </div>
        <div class="grid-row">
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
        </div>
        <div class="grid-row">
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
        </div>
      </div>
       </div>);
    }
}