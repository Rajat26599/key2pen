import { Component } from '@angular/core';

import jsPDF from 'jspdf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'key2pen';
  content=""; 
  papers = {
    'No Margin' : '/assets/img/noMargin.jfif',
    'Single Margin' : '/assets/img/singleMargin.png',
    'Double Margin' : '/assets/img/doubleMargin.jfif',
    'Diary' : '/assets/img/diary.jfif',
  }
  fonts = ['Times New Roman', 'fantasy', 'cursive', 'monospace', 'Courier', 'Lucida', 'Cambria']
  selectedPaper = this.papers['No Margin']
  selectedFont = "";
  selectedSize = "9px";
  selectedLineHight = "";
  selectedHorizontalMargin = "0";
  selectedVerticalMargin = "0";
  currentYear = new Date().getFullYear();
  previewWidth = 437;
  previewHight = 620;

  optimizedContentWidth = this.previewWidth-parseInt(this.selectedHorizontalMargin);

  onPaperChange(paper){
    console.log(this.selectedPaper);
    this.selectedPaper = paper;
  }
  onFontFamilyChange(fontFamily){
    this.selectedFont = fontFamily;
  }
  onFontSizeChange(fontSize){
    this.selectedSize = fontSize + 'px';
  }
  onLineHightChange(lineHight){
    this.selectedLineHight = lineHight + 'px';
  }
  onHorizontalMarginChange(horizontalMargin){
    this.selectedHorizontalMargin = horizontalMargin + 'px';
  }
  onVerticalMarginChange(verticalMargin){
    this.selectedVerticalMargin = verticalMargin + 'px'; 
  }

  public openPDF():void {
    var doc = new jsPDF('p','px','a4');
    doc.setLineHeightFactor(parseInt(this.selectedLineHight)/10);
    doc.setFontSize(parseInt(this.selectedSize)+2);
    doc.text(this.content, parseInt(this.selectedHorizontalMargin)+20, parseInt(this.selectedVerticalMargin), {maxWidth:417-parseInt(this.selectedHorizontalMargin)});
    
    doc.save('Test.pdf');
    }

  // public openPDF():void {
  //   let DATA = document.getElementById('content');
      
  //   html2canvas(DATA).then(canvas => {
        
  //       let fileWidth = 208;
  //       let fileHeight = canvas.height * fileWidth / canvas.width;
        
  //       const FILEURI = canvas.toDataURL('image/png')
  //       let PDF = new jsPDF('p', 'mm', 'a4');
  //       let position = 0;
  //       PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)
        
  //       PDF.save('angular-demo.pdf');
  //   });     
  // }
}
