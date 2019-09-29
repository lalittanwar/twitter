import { Component,ViewChild,OnInit} from '@angular/core';
import{ListService} from './list.service';
import { SearchPipe } from './search.pipe';
import { MatTableDataSource,MatSort,MatPaginator} from '@angular/material';

// const list=[
//   {
//     "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//   },
//   {
//     "userId": 1,
//     "id": 2,
//     "title": "qui est esse",
//     "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
//   },
//   {
//     "userId": 1,
//     "id": 3,
//     "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//     "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
//   },
//   {
//     "userId": 1,
//     "id": 4,
//     "title": "eum et est occaecati",
//     "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
//   },
// ]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'twitter';
  token:string;
  //cd=['lalit','bog','hafjks'];
  list:any;
  dataSource:any;

  
  displayedColumns: string[] = ['id', 'source'];
  //dataSource=new MatTableDataSource(list);

  @ViewChild (MatSort,{static:true}) sort: MatSort;
  @ViewChild (MatPaginator,{static:true}) paginator:MatPaginator;    

  constructor(private ls:ListService){}
  

  ngOnInit(){
    
    this.list=this.ls.getlist()
    
      console.log(this.list);
      this.dataSource=new MatTableDataSource(this.list);

      this.dataSource.sort=this.sort;
      this.dataSource.paginator=this.paginator;    
      this.dataSource.sort=this.sort;
    }
    

    


  applyfilter(fvalue:string){
    this.dataSource.filter=fvalue.trim().toLowerCase();
  }
  
}
