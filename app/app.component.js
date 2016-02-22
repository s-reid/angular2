System.register(['angular2/core', './bindings/input.component', './bindings/confirm.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, input_component_1, confirm_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (input_component_1_1) {
                input_component_1 = input_component_1_1;
            },
            function (confirm_component_1_1) {
                confirm_component_1 = confirm_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.myself = { name: '', age: '' };
                    this.confirmedMyself = { name: '', age: '' };
                }
                AppComponent.prototype.onSubmit = function (myself) {
                    this.myself = { name: myself.name, age: myself.age };
                };
                AppComponent.prototype.onConfirm = function (myself) {
                    this.confirmedMyself = { name: myself.name, age: myself.age };
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        template: "\n    <div class=\"container\">\n        <my-input (submitted)=\"onSubmit($event)\" [myself]=\"confirmedMyself\"></my-input>\n    </div>\n    <div class=\"container\">\n        <my-confirm (confirmed)=\"onConfirm($event)\" [myself]=\"myself\"></my-confirm>\n    </div>\n    ",
                        directives: [input_component_1.InputComponent, confirm_component_1.ConfirmComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiQXBwQ29tcG9uZW50Lm9uU3VibWl0IiwiQXBwQ29tcG9uZW50Lm9uQ29uZmlybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSUE7Z0JBQUFBO29CQWFJQyxXQUFNQSxHQUFHQSxFQUFDQSxJQUFJQSxFQUFFQSxFQUFFQSxFQUFFQSxHQUFHQSxFQUFFQSxFQUFFQSxFQUFDQSxDQUFDQTtvQkFDN0JBLG9CQUFlQSxHQUFHQSxFQUFDQSxJQUFJQSxFQUFFQSxFQUFFQSxFQUFFQSxHQUFHQSxFQUFFQSxFQUFFQSxFQUFDQSxDQUFDQTtnQkFTMUNBLENBQUNBO2dCQVBHRCwrQkFBUUEsR0FBUkEsVUFBU0EsTUFBbUNBO29CQUN4Q0UsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsRUFBQ0EsSUFBSUEsRUFBRUEsTUFBTUEsQ0FBQ0EsSUFBSUEsRUFBRUEsR0FBR0EsRUFBRUEsTUFBTUEsQ0FBQ0EsR0FBR0EsRUFBQ0EsQ0FBQ0E7Z0JBQ3ZEQSxDQUFDQTtnQkFFREYsZ0NBQVNBLEdBQVRBLFVBQVVBLE1BQW1DQTtvQkFDekNHLElBQUlBLENBQUNBLGVBQWVBLEdBQUdBLEVBQUNBLElBQUlBLEVBQUVBLE1BQU1BLENBQUNBLElBQUlBLEVBQUVBLEdBQUdBLEVBQUVBLE1BQU1BLENBQUNBLEdBQUdBLEVBQUNBLENBQUNBO2dCQUNoRUEsQ0FBQ0E7Z0JBdEJMSDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxLQUFLQTt3QkFDZkEsUUFBUUEsRUFBRUEsb1JBT1RBO3dCQUNEQSxVQUFVQSxFQUFFQSxDQUFDQSxnQ0FBY0EsRUFBRUEsb0NBQWdCQSxDQUFDQTtxQkFDakRBLENBQUNBOztpQ0FZREE7Z0JBQURBLG1CQUFDQTtZQUFEQSxDQXZCQSxBQXVCQ0EsSUFBQTtZQXZCRCx1Q0F1QkMsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtJbnB1dENvbXBvbmVudH0gZnJvbSAnLi9iaW5kaW5ncy9pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IHtDb25maXJtQ29tcG9uZW50fSBmcm9tICcuL2JpbmRpbmdzL2NvbmZpcm0uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICA8bXktaW5wdXQgKHN1Ym1pdHRlZCk9XCJvblN1Ym1pdCgkZXZlbnQpXCIgW215c2VsZl09XCJjb25maXJtZWRNeXNlbGZcIj48L215LWlucHV0PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgPG15LWNvbmZpcm0gKGNvbmZpcm1lZCk9XCJvbkNvbmZpcm0oJGV2ZW50KVwiIFtteXNlbGZdPVwibXlzZWxmXCI+PC9teS1jb25maXJtPlxuICAgIDwvZGl2PlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW0lucHV0Q29tcG9uZW50LCBDb25maXJtQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICAgIG15c2VsZiA9IHtuYW1lOiAnJywgYWdlOiAnJ307XG4gICAgY29uZmlybWVkTXlzZWxmID0ge25hbWU6ICcnLCBhZ2U6ICcnfTtcbiAgICBcbiAgICBvblN1Ym1pdChteXNlbGY6IHtuYW1lOiBzdHJpbmcsIGFnZTogc3RyaW5nfSkge1xuICAgICAgICB0aGlzLm15c2VsZiA9IHtuYW1lOiBteXNlbGYubmFtZSwgYWdlOiBteXNlbGYuYWdlfTtcbiAgICB9XG4gICAgXG4gICAgb25Db25maXJtKG15c2VsZjoge25hbWU6IHN0cmluZywgYWdlOiBzdHJpbmd9KSB7XG4gICAgICAgIHRoaXMuY29uZmlybWVkTXlzZWxmID0ge25hbWU6IG15c2VsZi5uYW1lLCBhZ2U6IG15c2VsZi5hZ2V9O1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
