System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var InputComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            InputComponent = (function () {
                function InputComponent() {
                    this.myself = { name: '', age: '' };
                    this.isFilled = false;
                    this.isValid = false;
                    this.submitted = new core_1.EventEmitter();
                }
                InputComponent.prototype.onKeyup = function () {
                    if (this.myself.name != '' && this.myself.age != '') {
                        this.isFilled = true;
                    }
                    else {
                        this.isFilled = false;
                    }
                    if (this.myself.name != '' && /^\d+/.test(this.myself.age)) {
                        this.isValid = true;
                    }
                    else {
                        this.isValid = false;
                    }
                };
                InputComponent.prototype.onSubmit = function () {
                    this.submitted.emit(this.myself);
                };
                InputComponent = __decorate([
                    core_1.Component({
                        selector: 'my-input',
                        template: "\n        <h1>Your details, please</h1>\n        <div>\n            <label for=\"name\">Your Name</label>\n            <input type=\"text\" id=\"name\" [(ngModel)]=\"myself.name\" (keyup)=\"onKeyup()\">\n        </div>\n        <div>\n            <label for=\"age\">Your Age</label>\n            <input type=\"text\" id=\"age\" [(ngModel)]=\"myself.age\" (keyup)=\"onKeyup()\">\n        </div>\n        <br>\n        <div>Filled out: {{isFilled ? 'Yes' : 'No'}}</div>\n        <div>Valid: {{isValid ? 'Yes' : 'No'}}</div>\n        <button [disabled]=\"!isValid\" (click)=\"onSubmit()\">Submit</button>\n    ",
                        inputs: ['myself'],
                        outputs: ['submitted']
                    }), 
                    __metadata('design:paramtypes', [])
                ], InputComponent);
                return InputComponent;
            })();
            exports_1("InputComponent", InputComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmRpbmdzL2lucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJJbnB1dENvbXBvbmVudCIsIklucHV0Q29tcG9uZW50LmNvbnN0cnVjdG9yIiwiSW5wdXRDb21wb25lbnQub25LZXl1cCIsIklucHV0Q29tcG9uZW50Lm9uU3VibWl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFFQTtnQkFBQUE7b0JBcUJJQyxXQUFNQSxHQUFHQSxFQUFDQSxJQUFJQSxFQUFFQSxFQUFFQSxFQUFFQSxHQUFHQSxFQUFFQSxFQUFFQSxFQUFDQSxDQUFDQTtvQkFDN0JBLGFBQVFBLEdBQUdBLEtBQUtBLENBQUNBO29CQUNqQkEsWUFBT0EsR0FBR0EsS0FBS0EsQ0FBQ0E7b0JBQ2hCQSxjQUFTQSxHQUFHQSxJQUFJQSxtQkFBWUEsRUFBK0JBLENBQUNBO2dCQW1CaEVBLENBQUNBO2dCQWpCR0QsZ0NBQU9BLEdBQVBBO29CQUNJRSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxJQUFJQSxFQUFFQSxJQUFJQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxHQUFHQSxJQUFJQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDbERBLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLElBQUlBLENBQUNBO29CQUN6QkEsQ0FBQ0E7b0JBQUNBLElBQUlBLENBQUNBLENBQUNBO3dCQUNKQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxLQUFLQSxDQUFDQTtvQkFDMUJBLENBQUNBO29CQUVEQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxJQUFJQSxFQUFFQSxJQUFJQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDekRBLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLElBQUlBLENBQUNBO29CQUN4QkEsQ0FBQ0E7b0JBQUNBLElBQUlBLENBQUNBLENBQUNBO3dCQUNKQSxJQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxLQUFLQSxDQUFDQTtvQkFDekJBLENBQUNBO2dCQUNMQSxDQUFDQTtnQkFFREYsaUNBQVFBLEdBQVJBO29CQUNJRyxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtnQkFDckNBLENBQUNBO2dCQTFDTEg7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsVUFBVUE7d0JBQ3BCQSxRQUFRQSxFQUFFQSxpbUJBY1RBO3dCQUNEQSxNQUFNQSxFQUFFQSxDQUFDQSxRQUFRQSxDQUFDQTt3QkFDbEJBLE9BQU9BLEVBQUVBLENBQUNBLFdBQVdBLENBQUNBO3FCQUN6QkEsQ0FBQ0E7O21DQXdCREE7Z0JBQURBLHFCQUFDQTtZQUFEQSxDQTNDQSxBQTJDQ0EsSUFBQTtZQTNDRCwyQ0EyQ0MsQ0FBQSIsImZpbGUiOiJiaW5kaW5ncy9pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1pbnB1dCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGgxPllvdXIgZGV0YWlscywgcGxlYXNlPC9oMT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuYW1lXCI+WW91ciBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIFsobmdNb2RlbCldPVwibXlzZWxmLm5hbWVcIiAoa2V5dXApPVwib25LZXl1cCgpXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImFnZVwiPllvdXIgQWdlPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiYWdlXCIgWyhuZ01vZGVsKV09XCJteXNlbGYuYWdlXCIgKGtleXVwKT1cIm9uS2V5dXAoKVwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJyPlxuICAgICAgICA8ZGl2PkZpbGxlZCBvdXQ6IHt7aXNGaWxsZWQgPyAnWWVzJyA6ICdObyd9fTwvZGl2PlxuICAgICAgICA8ZGl2PlZhbGlkOiB7e2lzVmFsaWQgPyAnWWVzJyA6ICdObyd9fTwvZGl2PlxuICAgICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCIhaXNWYWxpZFwiIChjbGljayk9XCJvblN1Ym1pdCgpXCI+U3VibWl0PC9idXR0b24+XG4gICAgYCxcbiAgICBpbnB1dHM6IFsnbXlzZWxmJ10sXG4gICAgb3V0cHV0czogWydzdWJtaXR0ZWQnXVxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dENvbXBvbmVudCB7XG4gICAgbXlzZWxmID0ge25hbWU6ICcnLCBhZ2U6ICcnfTtcbiAgICBpc0ZpbGxlZCA9IGZhbHNlO1xuICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICBzdWJtaXR0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHtuYW1lOiBzdHJpbmcsIGFnZTogc3RyaW5nfT4oKTtcbiAgICBcbiAgICBvbktleXVwKCkge1xuICAgICAgICBpZiAodGhpcy5teXNlbGYubmFtZSAhPSAnJyAmJiB0aGlzLm15c2VsZi5hZ2UgIT0gJycpIHtcbiAgICAgICAgICAgIHRoaXMuaXNGaWxsZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pc0ZpbGxlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5teXNlbGYubmFtZSAhPSAnJyAmJiAvXlxcZCsvLnRlc3QodGhpcy5teXNlbGYuYWdlKSkge1xuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIG9uU3VibWl0KCkge1xuICAgICAgICB0aGlzLnN1Ym1pdHRlZC5lbWl0KHRoaXMubXlzZWxmKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
