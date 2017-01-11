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