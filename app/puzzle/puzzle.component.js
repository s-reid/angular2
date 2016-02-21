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
    var PuzzleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PuzzleComponent = (function () {
                function PuzzleComponent() {
                }
                PuzzleComponent.prototype.ngOnInit = function () {
                    this.switch1Number = Math.round(Math.random());
                    this.switch2Number = Math.round(Math.random());
                    this.switch3Number = Math.round(Math.random());
                    this.switch4Number = Math.round(Math.random());
                    console.log(this.switch1Number, this.switch2Number, this.switch3Number, this.switch4Number);
                };
                PuzzleComponent = __decorate([
                    core_1.Component({
                        selector: 'my-puzzle',
                        template: "\n        <section class=\"setup\">\n            Enter your name:\n            <input type=\"text\" #name (keyup)=\"0\">\n        </section>\n        <section\n        [ngClass]=\"{puzzle: true,\n            solved: switch1.value == switch1Number && switch2.value == switch2Number && \n                switch3.value == switch3Number && switch4.value == switch4Number}\"\n        [ngStyle]=\"{display: name.value === '' ? 'none' : 'block'}\"\n        >\n            <h2>\n                The Puzzle |  {{switch1.value == switch1Number && switch2.value == switch2Number && switch3.value == switch3Number && switch4.value == switch4Number ? 'SOLVED' : 'NOT SOLVED'}}\n            </h2>\n            <p>Welcome <span class=\"name\">{{name.value}}</span></p>\n            <br>\n            Switch 1:\n            <input type=\"text\" #switch1 (keyup)=\"0\"><br>\n            Switch 2:\n            <input type=\"text\" #switch2 (keyup)=\"0\"><br>\n            Switch 3:\n            <input type=\"text\" #switch3 (keyup)=\"0\"><br>\n            Switch 4:\n            <input type=\"text\" #switch4 (keyup)=\"0\"><br>\n        </section>\n        <h2 [hidden]=\"switch1.value != switch1Number || switch2.value != switch2Number ||\n                switch3.value != switch3Number || switch4.value != switch4Number\">Congratulations {{name.value}}, you did it!</h2>\n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], PuzzleComponent);
                return PuzzleComponent;
            })();
            exports_1("PuzzleComponent", PuzzleComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1enpsZS9wdXp6bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIlB1enpsZUNvbXBvbmVudCIsIlB1enpsZUNvbXBvbmVudC5jb25zdHJ1Y3RvciIsIlB1enpsZUNvbXBvbmVudC5uZ09uSW5pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR0E7Z0JBQUFBO2dCQTRDQUMsQ0FBQ0E7Z0JBUEdELGtDQUFRQSxHQUFSQTtvQkFDSUUsSUFBSUEsQ0FBQ0EsYUFBYUEsR0FBR0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7b0JBQy9DQSxJQUFJQSxDQUFDQSxhQUFhQSxHQUFHQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQSxDQUFDQTtvQkFDL0NBLElBQUlBLENBQUNBLGFBQWFBLEdBQUdBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBLENBQUNBO29CQUMvQ0EsSUFBSUEsQ0FBQ0EsYUFBYUEsR0FBR0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7b0JBQy9DQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxhQUFhQSxFQUFFQSxJQUFJQSxDQUFDQSxhQUFhQSxFQUFFQSxJQUFJQSxDQUFDQSxhQUFhQSxFQUFFQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFBQTtnQkFDL0ZBLENBQUNBO2dCQTNDTEY7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsV0FBV0E7d0JBQ3JCQSxRQUFRQSxFQUFFQSxvMUNBMkJUQTtxQkFDSkEsQ0FBQ0E7O29DQWNEQTtnQkFBREEsc0JBQUNBO1lBQURBLENBNUNBLEFBNENDQSxJQUFBO1lBNUNELDZDQTRDQyxDQUFBIiwiZmlsZSI6InB1enpsZS9wdXp6bGUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LXB1enpsZScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJzZXR1cFwiPlxuICAgICAgICAgICAgRW50ZXIgeW91ciBuYW1lOlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI25hbWUgKGtleXVwKT1cIjBcIj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvblxuICAgICAgICBbbmdDbGFzc109XCJ7cHV6emxlOiB0cnVlLFxuICAgICAgICAgICAgc29sdmVkOiBzd2l0Y2gxLnZhbHVlID09IHN3aXRjaDFOdW1iZXIgJiYgc3dpdGNoMi52YWx1ZSA9PSBzd2l0Y2gyTnVtYmVyICYmIFxuICAgICAgICAgICAgICAgIHN3aXRjaDMudmFsdWUgPT0gc3dpdGNoM051bWJlciAmJiBzd2l0Y2g0LnZhbHVlID09IHN3aXRjaDROdW1iZXJ9XCJcbiAgICAgICAgW25nU3R5bGVdPVwie2Rpc3BsYXk6IG5hbWUudmFsdWUgPT09ICcnID8gJ25vbmUnIDogJ2Jsb2NrJ31cIlxuICAgICAgICA+XG4gICAgICAgICAgICA8aDI+XG4gICAgICAgICAgICAgICAgVGhlIFB1enpsZSB8ICB7e3N3aXRjaDEudmFsdWUgPT0gc3dpdGNoMU51bWJlciAmJiBzd2l0Y2gyLnZhbHVlID09IHN3aXRjaDJOdW1iZXIgJiYgc3dpdGNoMy52YWx1ZSA9PSBzd2l0Y2gzTnVtYmVyICYmIHN3aXRjaDQudmFsdWUgPT0gc3dpdGNoNE51bWJlciA/ICdTT0xWRUQnIDogJ05PVCBTT0xWRUQnfX1cbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8cD5XZWxjb21lIDxzcGFuIGNsYXNzPVwibmFtZVwiPnt7bmFtZS52YWx1ZX19PC9zcGFuPjwvcD5cbiAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgIFN3aXRjaCAxOlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI3N3aXRjaDEgKGtleXVwKT1cIjBcIj48YnI+XG4gICAgICAgICAgICBTd2l0Y2ggMjpcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNzd2l0Y2gyIChrZXl1cCk9XCIwXCI+PGJyPlxuICAgICAgICAgICAgU3dpdGNoIDM6XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjc3dpdGNoMyAoa2V5dXApPVwiMFwiPjxicj5cbiAgICAgICAgICAgIFN3aXRjaCA0OlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI3N3aXRjaDQgKGtleXVwKT1cIjBcIj48YnI+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPGgyIFtoaWRkZW5dPVwic3dpdGNoMS52YWx1ZSAhPSBzd2l0Y2gxTnVtYmVyIHx8IHN3aXRjaDIudmFsdWUgIT0gc3dpdGNoMk51bWJlciB8fFxuICAgICAgICAgICAgICAgIHN3aXRjaDMudmFsdWUgIT0gc3dpdGNoM051bWJlciB8fCBzd2l0Y2g0LnZhbHVlICE9IHN3aXRjaDROdW1iZXJcIj5Db25ncmF0dWxhdGlvbnMge3tuYW1lLnZhbHVlfX0sIHlvdSBkaWQgaXQhPC9oMj5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBQdXp6bGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHN3aXRjaDFOdW1iZXI6IG51bWJlcjtcbiAgICBzd2l0Y2gyTnVtYmVyOiBudW1iZXI7XG4gICAgc3dpdGNoM051bWJlcjogbnVtYmVyO1xuICAgIHN3aXRjaDROdW1iZXI6IG51bWJlcjtcbiAgICBcbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5zd2l0Y2gxTnVtYmVyID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcbiAgICAgICAgdGhpcy5zd2l0Y2gyTnVtYmVyID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcbiAgICAgICAgdGhpcy5zd2l0Y2gzTnVtYmVyID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcbiAgICAgICAgdGhpcy5zd2l0Y2g0TnVtYmVyID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zd2l0Y2gxTnVtYmVyLCB0aGlzLnN3aXRjaDJOdW1iZXIsIHRoaXMuc3dpdGNoM051bWJlciwgdGhpcy5zd2l0Y2g0TnVtYmVyKVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
