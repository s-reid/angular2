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
    var ConfirmComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ConfirmComponent = (function () {
                function ConfirmComponent() {
                    this.myself = { name: '', age: '' };
                    this.isFilled = false;
                    this.isValid = false;
                    this.confirmed = new core_1.EventEmitter();
                }
                ConfirmComponent.prototype.onKeyup = function () {
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
                ConfirmComponent.prototype.onConfirm = function () {
                    this.confirmed.emit(this.myself);
                };
                ConfirmComponent = __decorate([
                    core_1.Component({
                        selector: 'my-confirm',
                        template: "\n        <h1>You submitted the following details. Is this correct?</h1>\n        <p>Your name is <span class=\"highlight\">{{myself.name}}</span> and you're <span class=\"highlight\">{{myself.age}}</span> years old. Please click 'Confirm' if you have made any changes to this information.</p>\n        <div>\n            <label for=\"name\">Your Name</label>\n            <input type=\"text\" id=\"name\" [(ngModel)]=\"myself.name\" (keyup)=\"onKeyup()\">\n        </div>\n        <div>\n            <label for=\"age\">Your Age</label>\n            <input type=\"text\" id=\"age\" [(ngModel)]=\"myself.age\" (keyup)=\"onKeyup()\">\n        </div>\n        <br>\n        <div>Filled out: {{isFilled ? 'Yes' : 'No'}}</div>\n        <div>Valid: {{isValid ? 'Yes' : 'No'}}</div>\n        <button [disabled]=\"!isValid\" (click)=\"onConfirm()\">Confirm</button>\n    ",
                        inputs: ['myself'],
                        outputs: ['confirmed']
                    }), 
                    __metadata('design:paramtypes', [])
                ], ConfirmComponent);
                return ConfirmComponent;
            })();
            exports_1("ConfirmComponent", ConfirmComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmRpbmdzL2NvbmZpcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIkNvbmZpcm1Db21wb25lbnQiLCJDb25maXJtQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiQ29uZmlybUNvbXBvbmVudC5vbktleXVwIiwiQ29uZmlybUNvbXBvbmVudC5vbkNvbmZpcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUVBO2dCQUFBQTtvQkFzQklDLFdBQU1BLEdBQUdBLEVBQUNBLElBQUlBLEVBQUVBLEVBQUVBLEVBQUVBLEdBQUdBLEVBQUVBLEVBQUVBLEVBQUNBLENBQUNBO29CQUM3QkEsYUFBUUEsR0FBR0EsS0FBS0EsQ0FBQ0E7b0JBQ2pCQSxZQUFPQSxHQUFHQSxLQUFLQSxDQUFDQTtvQkFDaEJBLGNBQVNBLEdBQUdBLElBQUlBLG1CQUFZQSxFQUErQkEsQ0FBQ0E7Z0JBbUJoRUEsQ0FBQ0E7Z0JBakJHRCxrQ0FBT0EsR0FBUEE7b0JBQ0lFLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLElBQUlBLEVBQUVBLElBQUlBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLEdBQUdBLElBQUlBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO3dCQUNsREEsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsSUFBSUEsQ0FBQ0E7b0JBQ3pCQSxDQUFDQTtvQkFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7d0JBQ0pBLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLEtBQUtBLENBQUNBO29CQUMxQkEsQ0FBQ0E7b0JBRURBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLElBQUlBLEVBQUVBLElBQUlBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO3dCQUN6REEsSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsSUFBSUEsQ0FBQ0E7b0JBQ3hCQSxDQUFDQTtvQkFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7d0JBQ0pBLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLEtBQUtBLENBQUNBO29CQUN6QkEsQ0FBQ0E7Z0JBQ0xBLENBQUNBO2dCQUVERixvQ0FBU0EsR0FBVEE7b0JBQ0lHLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO2dCQUNyQ0EsQ0FBQ0E7Z0JBM0NMSDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxZQUFZQTt3QkFDdEJBLFFBQVFBLEVBQUVBLGkyQkFlVEE7d0JBQ0RBLE1BQU1BLEVBQUVBLENBQUNBLFFBQVFBLENBQUNBO3dCQUNsQkEsT0FBT0EsRUFBRUEsQ0FBQ0EsV0FBV0EsQ0FBQ0E7cUJBQ3pCQSxDQUFDQTs7cUNBd0JEQTtnQkFBREEsdUJBQUNBO1lBQURBLENBNUNBLEFBNENDQSxJQUFBO1lBNUNELCtDQTRDQyxDQUFBIiwiZmlsZSI6ImJpbmRpbmdzL2NvbmZpcm0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktY29uZmlybScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGgxPllvdSBzdWJtaXR0ZWQgdGhlIGZvbGxvd2luZyBkZXRhaWxzLiBJcyB0aGlzIGNvcnJlY3Q/PC9oMT5cbiAgICAgICAgPHA+WW91ciBuYW1lIGlzIDxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0XCI+e3tteXNlbGYubmFtZX19PC9zcGFuPiBhbmQgeW91J3JlIDxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0XCI+e3tteXNlbGYuYWdlfX08L3NwYW4+IHllYXJzIG9sZC4gUGxlYXNlIGNsaWNrICdDb25maXJtJyBpZiB5b3UgaGF2ZSBtYWRlIGFueSBjaGFuZ2VzIHRvIHRoaXMgaW5mb3JtYXRpb24uPC9wPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5hbWVcIj5Zb3VyIE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCIgWyhuZ01vZGVsKV09XCJteXNlbGYubmFtZVwiIChrZXl1cCk9XCJvbktleXVwKClcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiYWdlXCI+WW91ciBBZ2U8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJhZ2VcIiBbKG5nTW9kZWwpXT1cIm15c2VsZi5hZ2VcIiAoa2V5dXApPVwib25LZXl1cCgpXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnI+XG4gICAgICAgIDxkaXY+RmlsbGVkIG91dDoge3tpc0ZpbGxlZCA/ICdZZXMnIDogJ05vJ319PC9kaXY+XG4gICAgICAgIDxkaXY+VmFsaWQ6IHt7aXNWYWxpZCA/ICdZZXMnIDogJ05vJ319PC9kaXY+XG4gICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cIiFpc1ZhbGlkXCIgKGNsaWNrKT1cIm9uQ29uZmlybSgpXCI+Q29uZmlybTwvYnV0dG9uPlxuICAgIGAsXG4gICAgaW5wdXRzOiBbJ215c2VsZiddLFxuICAgIG91dHB1dHM6IFsnY29uZmlybWVkJ11cbn0pXG5leHBvcnQgY2xhc3MgQ29uZmlybUNvbXBvbmVudCB7XG4gICAgbXlzZWxmID0ge25hbWU6ICcnLCBhZ2U6ICcnfTtcbiAgICBpc0ZpbGxlZCA9IGZhbHNlO1xuICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICBjb25maXJtZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHtuYW1lOiBzdHJpbmcsIGFnZTogc3RyaW5nfT4oKTtcbiAgICBcbiAgICBvbktleXVwKCkge1xuICAgICAgICBpZiAodGhpcy5teXNlbGYubmFtZSAhPSAnJyAmJiB0aGlzLm15c2VsZi5hZ2UgIT0gJycpIHtcbiAgICAgICAgICAgIHRoaXMuaXNGaWxsZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pc0ZpbGxlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5teXNlbGYubmFtZSAhPSAnJyAmJiAvXlxcZCsvLnRlc3QodGhpcy5teXNlbGYuYWdlKSkge1xuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIG9uQ29uZmlybSgpIHtcbiAgICAgICAgdGhpcy5jb25maXJtZWQuZW1pdCh0aGlzLm15c2VsZik7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
