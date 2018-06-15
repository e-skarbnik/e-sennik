import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ClassCrudService } from '../../../services/class-crud.service';
import { Class } from '../../../models/class.model';
import { NgForm } from '@angular/forms';
// import { MemberService } from '../../../services/member.service';
// import { Member } from '../../../models/member.model';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-class-delete',
  templateUrl: './class-delete.component.html',
  styleUrls: ['./class-delete.component.css']
})
export class ClassDeleteComponent implements OnInit {

  cls: Class;
  // users: Member[];

  constructor(
    // private mService: MemberService,
    private clService: ClassCrudService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.switchMap((params: Params) => this.clService.getClassByID(params['id'])).subscribe(cl => this.cls = cl);
    // this.mService.getMembers().subscribe(usrs => this.users = usrs);

    this.clService.deleteClass(this.cls);
    this.router.navigateByUrl('/classes');
   }

  ngOnInit() {
    // console.log('aaaaaaaaaaaaaa');
    // console.log(this.cls);
    // this.clService.deleteClass(this.cls);
    // this.router.navigateByUrl('/classes');
  }

}