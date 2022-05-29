!function(){function e(e,n){var o="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!o){if(Array.isArray(e)||(o=function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return t(e,n)}(e))||n&&e&&"number"==typeof e.length){o&&(e=o);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,u=!1;return{s:function(){o=o.call(e)},n:function(){var e=o.next();return a=e.done,e},e:function(e){u=!0,s=e},f:function(){try{a||null==o.return||o.return()}finally{if(u)throw s}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}(self.webpackChunkmetacourse=self.webpackChunkmetacourse||[]).push([[263],{1263:function(t,o,i){"use strict";i.r(o),i.d(o,{TeachingModule:function(){return k}});var s=i(8583),a=i(5855),u=i(665),c=i(5562),l=i(639),d=i(7369);function g(e,t){if(1&e&&(l.TgZ(0,"div",6),l.TgZ(1,"div",7),l.TgZ(2,"h4"),l._uU(3),l.qZA(),l.qZA(),l.TgZ(4,"div",8),l._uU(5),l.qZA(),l.TgZ(6,"div",9),l.TgZ(7,"a",10),l._uU(8," Open "),l.qZA(),l.qZA(),l.qZA()),2&e){var n=t.$implicit;l.xp6(3),l.Oqu(n.title),l.xp6(2),l.hij(" ",n.description," "),l.xp6(2),l.MGl("routerLink","syllabus/",n.id,"")}}var f=function(){var e=function(){function e(t){n(this,e),this.teachingService=t}return r(e,[{key:"ngOnInit",value:function(){var e=this;this.teachingService.getCourses().subscribe(function(t){e.courses=t},function(e){console.log(e)})}}]),e}();return e.\u0275fac=function(t){return new(t||e)(l.Y36(d.Q))},e.\u0275cmp=l.Xpm({type:e,selectors:[["app-default-page"]],decls:9,vars:1,consts:[[1,"container","teaching-inner"],[1,"teaching-content"],[1,"teaching-add-course"],["routerLink","new","routerLinkActive","active",1,"add-course-btn"],[1,"teaching-body"],["class","course-card",4,"ngFor","ngForOf"],[1,"course-card"],[1,"card-header"],[1,"card-body"],[1,"card-bottom"],["routerLinkActive","true",1,"card-button","primary-btn",3,"routerLink"]],template:function(e,t){1&e&&(l.TgZ(0,"div",0),l.TgZ(1,"h1"),l._uU(2,"Teaching"),l.qZA(),l.TgZ(3,"div",1),l.TgZ(4,"div",2),l.TgZ(5,"a",3),l._uU(6," Add course "),l.qZA(),l.qZA(),l.TgZ(7,"div",4),l.YNc(8,g,9,3,"div",5),l.qZA(),l.qZA(),l.qZA()),2&e&&(l.xp6(8),l.Q6J("ngForOf",t.courses))},directives:[a.yS,a.Od,s.sg],styles:["button[_ngcontent-%COMP%]{font-size:1rem}.primary-btn[_ngcontent-%COMP%]{background:#9b17db;border:2px solid #9b17db;border-radius:7px;color:#fff;padding:10px 20px;cursor:pointer}.primary-btn[_ngcontent-%COMP%]:hover{background:#fff;border-color:#000;color:#000}.teaching-inner[_ngcontent-%COMP%]{padding:50px 0}.teaching-content[_ngcontent-%COMP%], .teaching-inner[_ngcontent-%COMP%]{display:flex;flex-direction:column}.teaching-add-course[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.teaching-body[_ngcontent-%COMP%]{padding:50px 0}.add-course-btn[_ngcontent-%COMP%]{background:#9b17db;border:2px solid #9b17db;border-radius:7px;color:#fff;padding:10px 20px}.course-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;width:100%;height:250px;padding:30px;box-shadow:0 2px 8px 0 rgba(99,99,99,.2);border-radius:7px;margin-bottom:30px}.card-bottom[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}"]}),e}();function p(e,t){if(1&e&&(l.TgZ(0,"option",18),l._uU(1),l.qZA()),2&e){var n=t.$implicit;l.Q6J("ngValue",n.name),l.xp6(1),l.Oqu(n.name)}}function m(e,t){if(1&e&&(l.ynx(0,14),l.TgZ(1,"select",15),l.TgZ(2,"option",16),l._uU(3,"Select category"),l.qZA(),l.YNc(4,p,2,2,"option",17),l.qZA(),l.BQk()),2&e){var n=t.index,o=l.oxw();l.Q6J("formGroupName",n),l.xp6(2),l.Q6J("ngValue",null),l.xp6(2),l.Q6J("ngForOf",o.categoriesData)}}var b=function(){var t=function(){function t(e,o,r){n(this,t),this.router=e,this.formBuilder=o,this.teachingService=r}return r(t,[{key:"ngOnInit",value:function(){var e=this;this.form=this.formBuilder.group({name:[null],description:[null],duration:[null],categories:this.formBuilder.array([])}),this.teachingService.getCategories().subscribe(function(t){console.log("res",t),e.categoriesData=t},function(e){console.log("res",e)})}},{key:"categories",value:function(){return this.form.get("categories")}},{key:"newCategory",value:function(){return this.formBuilder.group({categoryName:null})}},{key:"addCategory",value:function(){this.categories().push(this.newCategory())}},{key:"submit",value:function(){var t=this,n=this.form.getRawValue(),o={title:null,description:null,duration:null,categories:[]};console.log(n.name),o.title=n.name,o.description=n.description,o.duration=n.duration;var r,i=e(n.categories);try{for(i.s();!(r=i.n()).done;){var s=r.value;o.categories.push(s.categoryName)}}catch(a){i.e(a)}finally{i.f()}console.log(o),this.teachingService.createCourse(o).subscribe(function(e){return console.log("res",e),t.router.navigateByUrl("/teaching")},function(e){return console.log("err",e),200==e.status?t.router.navigateByUrl("/teaching"):null})}}]),t}();return t.\u0275fac=function(e){return new(e||t)(l.Y36(a.F0),l.Y36(u.qu),l.Y36(d.Q))},t.\u0275cmp=l.Xpm({type:t,selectors:[["app-new-course"]],decls:22,vars:2,consts:[[1,"container","new-course-outer"],[1,"form",3,"formGroup"],[1,"form-title"],[1,"form-group"],["formControlName","name","type","text","placeholder","Course name"],["formControlName","description","placeholder","Description"],["formControlName","duration","type","number","placeholder","Hours"],[1,"form-group","categories"],["formArrayName","categories"],[1,"categories-top"],[1,"primary-btn",3,"click"],[3,"formGroupName",4,"ngFor","ngForOf"],[1,"form-bottom"],[1,"submit-btn",3,"click"],[3,"formGroupName"],["formControlName","categoryName"],["selected","","disabled","",3,"ngValue"],[3,"ngValue",4,"ngFor","ngForOf"],[3,"ngValue"]],template:function(e,t){1&e&&(l.TgZ(0,"div",0),l.TgZ(1,"form",1),l.TgZ(2,"div",2),l.TgZ(3,"h2"),l._uU(4,"New course"),l.qZA(),l.qZA(),l.TgZ(5,"div",3),l._UZ(6,"input",4),l.qZA(),l.TgZ(7,"div",3),l._UZ(8,"textarea",5),l.qZA(),l.TgZ(9,"div",3),l._UZ(10,"input",6),l.qZA(),l.TgZ(11,"div",7),l.ynx(12,8),l.TgZ(13,"div",9),l.TgZ(14,"h4"),l._uU(15,"Categories"),l.qZA(),l.TgZ(16,"button",10),l.NdJ("click",function(){return t.addCategory()}),l._uU(17,"Add category"),l.qZA(),l.qZA(),l.YNc(18,m,5,3,"ng-container",11),l.BQk(),l.qZA(),l.TgZ(19,"div",12),l.TgZ(20,"button",13),l.NdJ("click",function(){return t.submit()}),l._uU(21,"Create"),l.qZA(),l.qZA(),l.qZA(),l.qZA()),2&e&&(l.xp6(1),l.Q6J("formGroup",t.form),l.xp6(17),l.Q6J("ngForOf",t.categories().controls))},directives:[u._Y,u.JL,u.sg,u.Fj,u.JJ,u.u,u.wV,u.CE,s.sg,u.x0,u.EJ,u.YN,u.Kr],styles:["button[_ngcontent-%COMP%]{font-size:1rem}.primary-btn[_ngcontent-%COMP%]{background:#9b17db;border:2px solid #9b17db;border-radius:7px;color:#fff;padding:10px 20px;cursor:pointer}.primary-btn[_ngcontent-%COMP%]:hover{background:#fff;border-color:#000;color:#000}.new-course-outer[_ngcontent-%COMP%]{display:flex;justify-content:center}.form[_ngcontent-%COMP%]{margin:100px 0;width:600px}.form-title[_ngcontent-%COMP%]{text-align:center;margin-bottom:30px}.form-group[_ngcontent-%COMP%]{margin-bottom:20px}.form-group[_ngcontent-%COMP%]:last-child{margin:0}.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{border:1px solid #000;border-radius:7px;font-size:1.25rem;padding:10px 15px;outline-color:#9b17db;width:100%}.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{height:200px;margin:0}.form-redirect[_ngcontent-%COMP%]{text-align:right}.form-redirect[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{z-index:1000}.form-redirect[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#9b17db}.form-bottom[_ngcontent-%COMP%]{margin-top:30px;text-align:center}.submit-btn[_ngcontent-%COMP%]{border:2px solid #9b17db;border-radius:10px;padding:10px 20px;text-transform:uppercase;font-size:1.25rem;transition:.05s linear;color:#fff;background:#9b17db}.submit-btn[_ngcontent-%COMP%]:hover{color:#000;border-color:#000;background:#fff;transform:scale(1.02)}.categories[_ngcontent-%COMP%]{padding:15px;border:1px solid #000;border-radius:7px}.categories[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{margin-top:20px}.categories-top[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}"]}),t}();function h(e,t){if(1&e&&(l.TgZ(0,"div",17),l.TgZ(1,"h5"),l.TgZ(2,"span",11),l._uU(3),l.qZA(),l.qZA(),l._UZ(4,"input",18),l.TgZ(5,"a",19),l._uU(6,"Edit lesson"),l.qZA(),l.qZA()),2&e){var n=t.index,o=l.oxw(),r=o.index,i=o.$implicit;l.Q6J("formGroupName",n),l.xp6(3),l.AsE(" ",r+1,".",n+1," "),l.xp6(2),l.hYB("routerLink","",i.value.id,"/",n+1,"")}}function x(e,t){if(1&e){var n=l.EpF();l.TgZ(0,"div",9),l.TgZ(1,"div",10),l.TgZ(2,"h3"),l.TgZ(3,"span",11),l._uU(4),l.qZA(),l.qZA(),l._UZ(5,"input",12),l.qZA(),l.TgZ(6,"div",13),l.ynx(7,14),l.YNc(8,h,7,5,"div",15),l.BQk(),l.qZA(),l.TgZ(9,"div",16),l.TgZ(10,"button",3),l.NdJ("click",function(){var e=l.CHM(n),t=e.index,o=e.$implicit;return l.oxw().addLesson(t,o)}),l._uU(11,"Add lesson"),l.qZA(),l.qZA(),l.qZA()}if(2&e){var o=t.index,r=l.oxw();l.Q6J("formGroupName",o),l.xp6(4),l.hij(" ",o+1,". "),l.xp6(4),l.Q6J("ngForOf",r.moduleLessons(o).controls)}}var v=function(){var e=function(){function e(t,o,r){n(this,e),this.route=t,this.formBuilder=o,this.teachingService=r,this.modulesData=[]}return r(e,[{key:"ngOnInit",value:function(){var e=this;this.routeSub=this.route.params.subscribe(function(t){e.courseId=t.id}),this.modulesForm=this.formBuilder.group({modules:this.formBuilder.array([])}),this.getModulesReset()}},{key:"ngOnDestroy",value:function(){this.routeSub.unsubscribe()}},{key:"getModules",value:function(){var e=this;this.teachingService.getCourse(this.courseId).subscribe(function(t){e.courseData=t,e.modulesData=e.courseData.modules})}},{key:"getModulesReset",value:function(){var e=this;this.teachingService.getCourse(this.courseId).subscribe(function(t){e.courseData=t,e.modulesData=e.courseData.modules;for(var n=0;n<e.modulesData.length;++n)e.patchAddModule(e.modulesData[n]);for(var o=0;o<e.modulesData.length;++o)for(var r=0;r<e.modulesData[o].lessons.length;++r)e.patchAddLesson(o,e.modulesData[o].lessons[r])})}},{key:"modules",value:function(){return this.modulesForm.get("modules")}},{key:"newModule",value:function(){return this.formBuilder.group({moduleName:"",lessons:this.formBuilder.array([])})}},{key:"addModule",value:function(){var e=this;this.teachingService.createModule(this.courseId).subscribe(function(e){console.log(e)},function(t){200==t.status&&(console.log("Module Create successfully"),e.modules().push(e.newModule()),e.getModules())})}},{key:"patchAddModule",value:function(e){var t=this.formBuilder.group({id:[null,u.kI.required],moduleName:["",u.kI.required],lessons:this.formBuilder.array([])});t.patchValue({id:e.id,moduleName:e.title,lessons:e.lessons}),this.modules().push(t)}},{key:"removeModule",value:function(e){this.modules().removeAt(e)}},{key:"moduleLessons",value:function(e){return this.modules().at(e).get("lessons")}},{key:"newLesson",value:function(){return this.formBuilder.group({id:null,lessonName:""})}},{key:"addLesson",value:function(e,t){var n=this;this.teachingService.createLesson(this.modulesData[e].id).subscribe(function(e){console.log(e),n.getModulesReset()},function(t){200==t.status&&(console.log("Successfully"),n.moduleLessons(e).push(n.newLesson()))})}},{key:"patchAddLesson",value:function(e,t){var n=this.formBuilder.group({lessonName:["",u.kI.required]});n.patchValue({lessonName:t.title}),this.moduleLessons(e).push(n)}},{key:"removeLesson",value:function(e,t){this.moduleLessons(e).removeAt(t)}},{key:"submit",value:function(){for(var e=this.modulesForm.getRawValue(),t=0;t<e.modules.length;++t){var n={title:e.modules[t].moduleName,duration:"90"};console.log(n),this.teachingService.editModule(this.modulesData[t].id,n).subscribe(function(e){console.log(e)},function(e){console.log(e)})}for(var o=0;o<e.modules.length;++o)for(var r=e.modules[o].lessons,i=0;i<r.length;++i){var s=r[i];console.log(s);var a={title:s.lessonName,description:s.lessonName};console.log(a),this.teachingService.editLesson(this.modulesData[o].lessons[i].id,a).subscribe(function(e){console.log(e)},function(e){console.log(e)})}}}]),e}();return e.\u0275fac=function(t){return new(t||e)(l.Y36(a.gz),l.Y36(u.qu),l.Y36(d.Q))},e.\u0275cmp=l.Xpm({type:e,selectors:[["app-edit-course"]],decls:15,vars:2,consts:[[1,"container","syllabus-outer"],[3,"formGroup"],[1,"teaching-add-module"],[1,"primary-btn",3,"click"],[1,"syllabus-body"],["formArrayName","modules"],["class","module",3,"formGroupName",4,"ngFor","ngForOf"],[1,"form-bottom"],["routerLink","/teaching",1,"primary-btn"],[1,"module",3,"formGroupName"],[1,"module-main"],[1,"gray-number"],["formControlName","moduleName","type","text","placeholder","Module name"],[1,"module-body"],["formArrayName","lessons"],["class","lesson",3,"formGroupName",4,"ngFor","ngForOf"],[1,"add-lessons"],[1,"lesson",3,"formGroupName"],["formControlName","lessonName","type","text","placeholder","Lesson name"],[1,"primary-btn","custom-edit-btn",3,"routerLink"]],template:function(e,t){1&e&&(l.TgZ(0,"div",0),l.TgZ(1,"h1"),l._uU(2,"Edit course"),l.qZA(),l.TgZ(3,"form",1),l.TgZ(4,"div",2),l.TgZ(5,"button",3),l.NdJ("click",function(){return t.addModule()}),l._uU(6,"Add module"),l.qZA(),l.qZA(),l.TgZ(7,"div",4),l.ynx(8,5),l.YNc(9,x,12,3,"div",6),l.BQk(),l.qZA(),l.TgZ(10,"div",7),l.TgZ(11,"a",8),l._uU(12,"Cancel"),l.qZA(),l.TgZ(13,"button",3),l.NdJ("click",function(){return t.submit()}),l._uU(14,"Save"),l.qZA(),l.qZA(),l.qZA(),l.qZA()),2&e&&(l.xp6(3),l.Q6J("formGroup",t.modulesForm),l.xp6(6),l.Q6J("ngForOf",t.modules().controls))},directives:[u._Y,u.JL,u.sg,u.CE,s.sg,a.yS,u.x0,u.Fj,u.JJ,u.u],styles:["button[_ngcontent-%COMP%]{font-size:1rem}.primary-btn[_ngcontent-%COMP%]{background:#9b17db;border:2px solid #9b17db;border-radius:7px;color:#fff;padding:10px 20px;cursor:pointer}.primary-btn[_ngcontent-%COMP%]:hover{background:#fff;border-color:#000;color:#000}input[_ngcontent-%COMP%]{border:1px solid #000;border-radius:10px;font-size:1.25rem;padding:10px 15px;outline-color:#9b17db;width:100%}.custom-edit-btn[_ngcontent-%COMP%]{white-space:nowrap;margin-left:30px}.syllabus-outer[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:50px 0}.syllabus-edit[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.syllabus-edit-btn[_ngcontent-%COMP%]{background:#9b17db;border:2px solid #9b17db;border-radius:7px;color:#fff;padding:10px 20px}.syllabus-body[_ngcontent-%COMP%]{display:flex;flex-direction:column}.teaching-add-module[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.module-main[_ngcontent-%COMP%]{display:flex;align-content:center;padding:30px;box-shadow:0 2px 8px 0 rgba(99,99,99,.2);border-radius:7px;margin-top:50px}.gray-number[_ngcontent-%COMP%]{color:#b3b3b3;margin-right:10px}.lesson[_ngcontent-%COMP%]{display:flex;align-content:center;padding:30px;box-shadow:0 2px 8px 0 rgba(99,99,99,.2);border-radius:7px;margin-left:30px;margin-top:10px;height:100%}.add-lessons[_ngcontent-%COMP%]{margin-top:30px}.add-lessons[_ngcontent-%COMP%], .form-bottom[_ngcontent-%COMP%]{display:flex;justify-content:center}.form-bottom[_ngcontent-%COMP%]{margin-top:50px}.form-bottom[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin-right:20px}"]}),e}();function y(e,t){if(1&e&&(l.TgZ(0,"div",10),l.TgZ(1,"h5"),l.TgZ(2,"span",7),l._uU(3),l.qZA(),l._uU(4),l.qZA(),l.qZA()),2&e){var n=t.$implicit,o=t.index,r=l.oxw().index;l.xp6(3),l.AsE(" ",r+1,".",o+1," "),l.xp6(1),l.hij(" ",n.title," ")}}function Z(e,t){if(1&e&&(l.TgZ(0,"div",5),l.TgZ(1,"div",6),l.TgZ(2,"h3"),l.TgZ(3,"span",7),l._uU(4),l.qZA(),l._uU(5),l.qZA(),l.qZA(),l.TgZ(6,"div",8),l.YNc(7,y,5,3,"div",9),l.qZA(),l.qZA()),2&e){var n=t.$implicit,o=t.index,r=l.oxw();l.xp6(4),l.hij(" ",o+1,". "),l.xp6(1),l.hij(" ",n.title," "),l.xp6(2),l.Q6J("ngForOf",r.modulesData[o].lessons)}}function O(e,t){if(1&e&&(l.TgZ(0,"a",14),l._uU(1),l.qZA()),2&e){var n=t.$implicit,o=t.index,r=l.oxw().$implicit,i=l.oxw();l.cQ8("routerLink","/teaching/edit/",i.courseId,"/",r.id,"/",o+1,""),l.xp6(1),l.Oqu(n.title)}}function C(e,t){if(1&e&&(l.TgZ(0,"div",11),l.TgZ(1,"span",12),l._uU(2),l.qZA(),l.YNc(3,O,2,4,"a",13),l.qZA()),2&e){var n=t.$implicit,o=t.index,r=l.oxw();l.xp6(2),l.Oqu(n.title),l.xp6(1),l.Q6J("ngForOf",r.modulesData[o].lessons)}}function _(e,t){if(1&e&&(l.TgZ(0,"div",15),l._UZ(1,"angular-editor",16),l.qZA()),2&e){var n=t.index,o=l.oxw();l.Q6J("formGroupName",n),l.xp6(1),l.Q6J("config",o.editorConfig)}}var M,A,P,T=[{path:"",component:f},{path:"new",component:b},{path:"syllabus/:id",component:(A=function(){function e(t,o){n(this,e),this.route=t,this.teachingService=o}return r(e,[{key:"ngOnInit",value:function(){var e=this;this.routeSub=this.route.params.subscribe(function(t){e.courseId=t.id}),this.teachingService.getCourse(this.courseId).subscribe(function(t){e.courseData=t,e.modulesData=e.courseData.modules},function(e){console.log("err",e)})}},{key:"ngOnDestroy",value:function(){this.routeSub.unsubscribe()}}]),e}(),A.\u0275fac=function(e){return new(e||A)(l.Y36(a.gz),l.Y36(d.Q))},A.\u0275cmp=l.Xpm({type:A,selectors:[["app-syllabus-course"]],decls:8,vars:2,consts:[[1,"container","syllabus-outer"],[1,"syllabus-edit"],[1,"syllabus-edit-btn",3,"routerLink"],[1,"syllabus-body"],["class","module",4,"ngFor","ngForOf"],[1,"module"],[1,"module-main"],[1,"gray-number"],[1,"module-body"],["class","lesson",4,"ngFor","ngForOf"],[1,"lesson"]],template:function(e,t){1&e&&(l.TgZ(0,"div",0),l.TgZ(1,"h1"),l._uU(2,"Syllabus"),l.qZA(),l.TgZ(3,"div",1),l.TgZ(4,"a",2),l._uU(5," Edit "),l.qZA(),l.qZA(),l.TgZ(6,"div",3),l.YNc(7,Z,8,3,"div",4),l.qZA(),l.qZA()),2&e&&(l.xp6(4),l.MGl("routerLink","/teaching/edit/",t.courseId,""),l.xp6(3),l.Q6J("ngForOf",t.modulesData))},directives:[a.yS,s.sg],styles:[".syllabus-outer[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:50px 0}.syllabus-edit[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.syllabus-edit-btn[_ngcontent-%COMP%]{background:#9b17db;border:2px solid #9b17db;border-radius:7px;color:#fff;padding:10px 20px}.syllabus-body[_ngcontent-%COMP%]{display:flex;flex-direction:column}.module-main[_ngcontent-%COMP%]{padding:30px;box-shadow:0 2px 8px 0 rgba(99,99,99,.2);border-radius:7px;margin-top:50px}.gray-number[_ngcontent-%COMP%]{color:#b3b3b3;margin-right:10px}.lesson[_ngcontent-%COMP%]{padding:30px;box-shadow:0 2px 8px 0 rgba(99,99,99,.2);border-radius:7px;margin-left:30px;margin-top:10px}"]}),A)},{path:"edit/:id",component:v},{path:"edit/:idCourse/:idModule/:idLesson",component:(M=function(){function e(t,o,r){n(this,e),this.route=t,this.formBuilder=o,this.teachingService=r,this.editorConfig={editable:!0,spellcheck:!0,height:"auto",minHeight:"0",maxHeight:"auto",width:"auto",minWidth:"0",translate:"yes",enableToolbar:!0,showToolbar:!0,placeholder:"Enter text here...",defaultParagraphSeparator:"",defaultFontName:"",defaultFontSize:"",customClasses:[{name:"quote",class:"quote"},{name:"redText",class:"redText"},{name:"titleText",class:"titleText",tag:"h1"}],uploadUrl:"v1/image",uploadWithCredentials:!1,sanitize:!0,toolbarPosition:"top",toolbarHiddenButtons:[["bold","italic"],["fontSize"]]}}return r(e,[{key:"ngOnInit",value:function(){var e=this;this.routeSub=this.route.params.subscribe(function(t){e.courseId=t.idCourse,e.moduleId=t.idModule,e.lessonId=t.idLesson,e.teachingService.getCourse(e.courseId).subscribe(function(t){e.courseData=t,e.modulesData=e.courseData.modules,e.getLessonReset()},function(e){console.log(e)})}),this.form=this.formBuilder.group({texts:this.formBuilder.array([])})}},{key:"ngOnDestroy",value:function(){this.routeSub.unsubscribe()}},{key:"getLesson",value:function(){var e=this;this.teachingService.getModule(this.moduleId).subscribe(function(t){e.lessonData=t.lessons[e.lessonId-1];for(var n=0;n<e.lessonData.texts.length;++n)e.addPatchText(e.lessonData.texts[n])})}},{key:"getLessonReset",value:function(){for(var e=this;0!==this.texts().length;)this.texts().removeAt(0);this.teachingService.getModule(this.moduleId).subscribe(function(t){e.lessonData=t.lessons[e.lessonId-1];for(var n=0;n<e.lessonData.texts.length;++n)e.addPatchText(e.lessonData.texts[n])},function(e){console.log(e)})}},{key:"texts",value:function(){return this.form.get("texts")}},{key:"newText",value:function(){return this.formBuilder.group({heading:null,text:""})}},{key:"addText",value:function(){var e=this;this.teachingService.createText(this.lessonData.id).subscribe(function(t){console.log(t),e.getLesson(),e.texts().push(e.newText())},function(t){console.log(t),e.getLesson(),e.texts().push(e.newText())})}},{key:"addPatchText",value:function(e){var t=this.formBuilder.group({id:null,heading:null,text:null});t.patchValue({id:e.id,heading:e.heading,text:e.text}),this.texts().push(t)}},{key:"submit",value:function(){var e=this.form.getRawValue().texts;console.log(e);for(var t=0;t<e.length;++t)this.teachingService.putText(e[t]).subscribe(function(e){console.log(e)},function(e){console.log(e)})}}]),e}(),M.\u0275fac=function(e){return new(e||M)(l.Y36(a.gz),l.Y36(u.qu),l.Y36(d.Q))},M.\u0275cmp=l.Xpm({type:M,selectors:[["app-edit-lesson"]],decls:13,vars:3,consts:[[1,"container","edit-lesson-outer"],[1,"left-menu"],["class","module-block",4,"ngFor","ngForOf"],[1,"lesson-body"],[1,"steps-body"],[1,"primary-btn","top-btn",3,"click"],[3,"formGroup"],["formArrayName","texts"],["class","text-field",3,"formGroupName",4,"ngFor","ngForOf"],[1,"steps-bottom"],[1,"primary-btn",3,"click"],[1,"module-block"],["routerLinkActive","true",1,"module-link"],["routerLinkActive","true","class","lesson-link",3,"routerLink",4,"ngFor","ngForOf"],["routerLinkActive","true",1,"lesson-link",3,"routerLink"],[1,"text-field",3,"formGroupName"],["formControlName","text",3,"config"]],template:function(e,t){1&e&&(l.TgZ(0,"div",0),l.TgZ(1,"div",1),l.YNc(2,C,4,2,"div",2),l.qZA(),l.TgZ(3,"div",3),l.TgZ(4,"div",4),l.TgZ(5,"button",5),l.NdJ("click",function(){return t.addText()}),l._uU(6,"Add text"),l.qZA(),l.TgZ(7,"form",6),l.TgZ(8,"div",7),l.YNc(9,_,2,2,"div",8),l.qZA(),l.qZA(),l.TgZ(10,"div",9),l.TgZ(11,"button",10),l.NdJ("click",function(){return t.submit()}),l._uU(12," Save "),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA()),2&e&&(l.xp6(2),l.Q6J("ngForOf",t.courseData.modules),l.xp6(5),l.Q6J("formGroup",t.form),l.xp6(2),l.Q6J("ngForOf",t.texts().controls))},directives:[s.sg,u._Y,u.JL,u.sg,u.CE,a.Od,a.yS,u.x0,c.s6,u.JJ,u.u],styles:["button[_ngcontent-%COMP%]{font-size:1rem}.primary-btn[_ngcontent-%COMP%]{background:#9b17db;border:2px solid #9b17db;border-radius:7px;color:#fff;padding:10px 20px;cursor:pointer}.primary-btn[_ngcontent-%COMP%]:hover{background:#fff;border-color:#000;color:#000}.edit-lesson-outer[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:50px 0}.left-menu[_ngcontent-%COMP%]{display:flex;flex-direction:column;box-shadow:0 2px 8px 0 rgba(99,99,99,.2);border-radius:7px;width:23%;padding:15px;height:100%}.left-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:7px;border-bottom:1px solid #b3b3b3}.left-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child{border-bottom:0;padding-bottom:0}.left-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#9b17db}.left-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1.25rem}.left-menu[_ngcontent-%COMP%]   .module-block[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-bottom:30px}.left-menu[_ngcontent-%COMP%]   .module-link[_ngcontent-%COMP%]{font-size:1.25rem}.lesson-body[_ngcontent-%COMP%]{width:73%}.top-btn[_ngcontent-%COMP%]{margin-bottom:30px}.steps-body[_ngcontent-%COMP%]{box-shadow:0 2px 8px 0 rgba(99,99,99,.2);border-radius:7px;padding:30px}.steps-bottom[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:30px}.text-field[_ngcontent-%COMP%]{margin-bottom:50px}.text-field[_ngcontent-%COMP%]:last-child{margin-bottom:0}"]}),M)}],k=((P=r(function e(){n(this,e)})).\u0275fac=function(e){return new(e||P)},P.\u0275mod=l.oAB({type:P}),P.\u0275inj=l.cJS({imports:[[s.ez,a.Bz.forChild(T),u.UX,c.UM]]}),P)}}])}();