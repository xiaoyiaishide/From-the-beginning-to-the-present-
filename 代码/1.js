function box() {
  var value;
  return {
    get: function() {
      return value;
    },
    set: function(val) {
      // this.value = val;
      value = val;
    },
    type: function() {
      return typeof value;
    }
  }
}
var Animal = fuunction(){};
Animal.prototype.breath = function() {

}
@Component({
  template:'',
  
})