import React from "react";

export default class App extends React.Component {
  state = { 
    data: ""
  }
  
  render(){
    return (
    <form onSubmit={
      (e)=>{
        e.preventDefault();
        
        const ul = document.querySelector('ul');
        for(let i=0; i<ul.children.length;i++){
      if(i%2===0){
        
        ul.children[i].classList.add('div'+i);
        ul.children[i].children[1].id='comButton1';
        ul.children[i].children[2].id='comButton1';
        const b1 = ul.children[i].children[1];
        const bd1 = ul.children[i].children[2];
        
        b1.onclick=()=>{
 const div = document.querySelector(".div"+i);         
          if(div.children[0].style.textDecoration!=='line-through'){
           div.children[0].style.textDecoration='line-through'; 
          }else if(div.children[0].style.textDecoration==='line-through'){
            div.children[0].style.textDecoration='';
          }
          
        }
        bd1.onclick=()=>{
          const elToRemove=document.querySelector('.div'+i);
          ul.removeChild(elToRemove);
        }
      }
      else if(i%2===1){
        
        ul.children[i].classList.add('div'+i);
        ul.children[i].children[1].id='comButton2';
        ul.children[i].children[2].id='comButton2';
        const b2 = ul.children[i].children[1];
        const bd2 = ul.children[i].children[2];
        
     b2.onclick =()=>{
      const div = document.querySelector(".div"+i);
       if(div.children[0].style.textDecoration!=='line-through'){
           div.children[0].style.textDecoration='line-through'; 
          }else if(div.children[0].style.textDecoration==='line-through'){
            div.children[0].style.textDecoration='';
          }
     }
        
        bd2.onclick=()=>{
          const elToRemove=document.querySelector('.div'+i);
          ul.removeChild(elToRemove);
          //return alert(ul.children[i].getAttribute('class'));
        }
      }
    }
        
        const input = document.querySelector('input');
        input.value='';
        this.setState({data:''});
      }
    }>
    <input type='text' onChange={
      (e)=>{
        this.setState({
          data:e.target.value
        });
      }
    } placeHolder='Enter your tasks'/> 
    <button onClick={
      this.handleButton
    } id='button'>+</button>
    </form>
    );
  }
  
  handleButton=()=>{
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    const div = document.createElement('div');
    const taskCom = document.createElement('button');
    const taskDel = document.createElement('button');
    taskDel.innerHTML = '×';
    taskCom.innerHTML = '✓';
    div.id='container';
    li.innerHTML = this.state.data; 
    
    div.appendChild(li);
    div.appendChild(taskCom);
    div.appendChild(taskDel);
    if(this.state.data!=='')
    ul.appendChild(div);
  }
}
