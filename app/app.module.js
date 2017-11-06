"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./rxjs-extensions");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_routing_module_1 = require("./routing/app-routing.module");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var in_memory_data_service_1 = require("./services/in-memory-data.service");
var app_component_1 = require("./app.component");
var data_service_1 = require("./services/data.service");
var story_component_1 = require("./components/story.component");
var stories_list_component_1 = require("./components/stories-list.component");
var story_selected_component_1 = require("./components/story-selected.component");
var story_add_form_component_1 = require("./components/story-add-form.component");
var stories_statistics_component_1 = require("./components/stories-statistics.component");
var sandbox_component_1 = require("./components/sandbox.component");
var story_ngx_ol_component_1 = require("./components/story-ngx-ol.component");
var ngx_openlayers_1 = require("ngx-openlayers");
var menu_bar_component_1 = require("./components/menu-bar.component");
var story_pipe_1 = require("./pipes/story-pipe");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpModule,
                angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService, { passThruUnknownUrl: true }),
                app_routing_module_1.AppRoutingModule,
                ngx_openlayers_1.AngularOpenlayersModule
            ],
            declarations: [
                app_component_1.AppComponent,
                story_component_1.StoryComponent,
                stories_list_component_1.StoryListComponent,
                story_selected_component_1.ShowStoryComponent,
                story_add_form_component_1.StoryAddFormComponent,
                stories_statistics_component_1.StatisticsComponent,
                sandbox_component_1.SandBoxComponent,
                story_ngx_ol_component_1.StoryNgxOlComponent,
                menu_bar_component_1.MenuBarComponent,
                story_pipe_1.StoryPipe
            ],
            providers: [data_service_1.DataService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map