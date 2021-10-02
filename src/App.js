import amazon from "./assets/2.png"
import './App.css';
import Info from "./Components/index"
import React from "react";
import "react-data-table-component-extensions/dist/index.css";

class App extends React.Component {

 
  state = {
    selectedFile: null,
    data: [],
    columns: [
      {
        name: "File Name",
        selector: "fName",
        sortable: true
      }
    ]
  };
  
  onFileChange = event => {
    this.setState({ selectedFile: event.target.files[0]/* , data: [...this.state.data,event.target.files[0].name  ]  */ });
  };

  toArray = () => { 
    this.setState({ data: [...this.state.data,{fName:this.state.selectedFile.name}  ] });
    document.getElementById('filename').value = null
    console.log("File Name:", this.recData/* this.state.data */)
    
    let myTime = setInterval(() =>{

      this.setState({data:[]})
 
      clearInterval(myTime);
    },10000)
  }

  toInArray = () => { 
    this.setState({ data: [...this.state.data,{fName:this.state.selectedFile.name}  ] });
    document.getElementById('filename').value = null
    console.log("File Name:", this.recData/* this.state.data */)
  }

  vanishArray = () => {
    this.setState({data:[]})
  }


  render(){
   
      const tableData = {
        columns:[...this.state.columns],
        data:[this.state.data]
      };
    
  
    return (
      <div>
       <div className="container" >
         <div className="row"  style={{marginTop:25 }} >
           <div className="col-md-12" style={{ textAlign:"center"  }} >
             <img  style={{ height: 100}} src={amazon }/>
           </div>
         </div>
         <div className="row" style={{marginTop:50, textAlign:"center"}}>
           <div className="col-md-12" style={{border:"5px solid black", marginBottom:25}}>
             <Info/>
           </div>
         </div>
         <hr></hr>
         <div className="row">
           <div className="col-md-12">
            <input id="filename"className="primary" type="file" onChange={this.onFileChange}></input>
            
            <button style={{marginRight:5}} type="button" class="btn btn-warning" onClick={this.toInArray}>Upload</button>
            <button style={{marginRight:5}} type="button" class="btn btn-warning" onClick={this.vanishArray}>Vanish</button>
            <button  type="button" class="btn btn-warning" onClick={this.toArray}>Upload + Vanish</button>
           </div>

           <div>

          <table style={{marginTop:25, border: "4px solid black"}} class="table table-hover table-responsive">
              <thead style={{backgroundColor:"orange"}}>
                <tr align="center">
                  <th >Security Sweep Reports</th>
                </tr>
              </thead>
              <tbody>
                        
              {this.state.data.map(item => {
                return <tr >
                          <td>{item.fName}</td>
                       </tr>;
              })}
              
              </tbody>
            </table>

           </div>
         </div>
       </div>
      </div>
     )
  }
  
}

export default App;
