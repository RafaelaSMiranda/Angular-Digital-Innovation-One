import { templateJitUrl } from '@angular/compiler';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({

  templateUrl: './courses-info.component.html'

})

export class CourseInfoComponent implements OnInit {


  course: Course;

  constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService){

    // pega informações da rota que esta ativa


  }
  ngOnInit(): void {

    this.course = this.courseService.retrieveById(+ this.activatedRoute.snapshot.paramMap.get('id'));
    // + converte para numero
  }

  save(): void {

    this.courseService.save(this.course);


  }




}
