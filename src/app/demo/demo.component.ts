import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})

export class DemoComponent implements OnInit {

a = "50";
b = "100";
c = "200";
d = "400";
ValueOne;
ValueTwo;
ValueThree;
ValueFour;
checked=true;


  constructor() { }

  ngOnInit() {
    var btnContainer = document.getElementById("myBtnContainer");
    var btns = btnContainer.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) 
    {
      btns[i].addEventListener("click", function()
      {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }
    
  }

filterLollipopOne(btnValueOne)
{
     this.ValueOne = btnValueOne;
     document.getElementById("lollipopPrice").innerHTML = this.ValueOne;
     document.getElementById("lollipopQty").innerHTML = this.ValueOne;
     document.getElementById("IcecandyPrice").innerHTML = this.a;
     document.getElementById("IcecandyQty").innerHTML = this.ValueOne;
     document.getElementById("difference").innerHTML = this.ValueOne;
     document.getElementById("myCheck").removeAttribute("disabled");
}

filterLollipopTwo(btnValueOne)
{
   this.ValueOne = btnValueOne;
   document.getElementById("lollipopPrice").innerHTML = this.ValueOne;
   document.getElementById("lollipopQty").innerHTML = this.ValueOne;
   document.getElementById("IcecandyPrice").innerHTML = this.b
   document.getElementById("IcecandyQty").innerHTML = this.ValueOne;
   document.getElementById("difference").innerHTML = this.ValueOne;
   document.getElementById("myCheck").removeAttribute("disabled");
}
 filterLollipopThree(btnValueOne)
{
   this.ValueOne = btnValueOne;
   document.getElementById("lollipopPrice").innerHTML = this.ValueOne;
   document.getElementById("lollipopQty").innerHTML = this.ValueOne;
   document.getElementById("IcecandyPrice").innerHTML = this.c
   document.getElementById("IcecandyQty").innerHTML = this.ValueOne;
   document.getElementById("difference").innerHTML = this.ValueOne;
   document.getElementById("myCheck").removeAttribute("disabled");
}
 
filterLollipopFour(btnValueOne)
{
     this.ValueOne = btnValueOne;
     document.getElementById("lollipopPrice").innerHTML = this.ValueOne;
     document.getElementById("lollipopQty").innerHTML = this.ValueOne;
     document.getElementById("IcecandyPrice").innerHTML = this.d
     document.getElementById("IcecandyQty").innerHTML = this.ValueOne;
     document.getElementById("difference").innerHTML = this.ValueOne;
     document.getElementById("myCheck").removeAttribute("disabled");
}

yearlyOffer(e)
{
  if(this.checked = e.target.checked)
  {
    this.ValueThree = this.ValueOne * 2;
    this.ValueFour = this.ValueThree / 2;
    this.ValueTwo = this.ValueOne / 2;
    document.getElementById("lollipopPrice").innerHTML = this.ValueTwo;
    document.getElementById("lollipopQty").innerHTML = this.ValueOne;
    document.getElementById("IcecandyPrice").innerHTML = this.ValueFour;
    document.getElementById("IcecandyQty").innerHTML = this.ValueOne;
    document.getElementById("difference").innerHTML = this.ValueTwo;
  }
  else 
  {
    document.getElementById("lollipopPrice").innerHTML = this.ValueOne;
    document.getElementById("lollipopQty").innerHTML = this.ValueOne;
    document.getElementById("IcecandyPrice").innerHTML = this.ValueThree;
    document.getElementById("IcecandyQty").innerHTML = this.ValueOne;
    document.getElementById("difference").innerHTML = this.ValueOne;
  }
}
}
